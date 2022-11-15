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
    const url = `${process.env.REACT_APP_RIJKS_BASE_URL}/en/collection?key=${process.env.REACT_APP_RIJKS_API_KEY}&involvedMaker=Rembrandt+van+Rijn&p=4`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data?.artObjects);
  };

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
        <div
          style={{ height: "100vh" }}
          key={index}
          data-src={img.webImage.url + "?.jpg"}
        />
      ))}
    </AutoplaySlider>
  );

  return <CollectionSliderContainer>{slider}</CollectionSliderContainer>;
};

export default CollectionSlider;
