import { useEffect, useState } from "react";

import { CollectionSliderContainer } from "./styled";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const CollectionSlider = () => {
  const [data, setData] = useState([]);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const fetchCollectionImages = async () => {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_RIJKS_API_KEY}&involvedMaker=Rembrandt+van+Rijn&p=3`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data.artObjects);
  };
  console.log(data);

  useEffect(() => {
    fetchCollectionImages();
  }, []);

  const slider = (
    <AutoplaySlider
      style={{ height: "100%" }}
      play={true}
      cancelOnInteraction={false}
      interval={4000}
      animation="foldOutAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
    >
      {data?.map((img, index) => (
        <div key={index} data-src={img.webImage.url + "?.jpg"} />
      ))}
    </AutoplaySlider>
  );

  console.log(slider);

  return <CollectionSliderContainer>{slider}</CollectionSliderContainer>;
};

export default CollectionSlider;
