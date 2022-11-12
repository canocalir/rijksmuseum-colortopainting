import React, { useEffect, useState } from "react";
import FilterResults from "../components/FilterResults/FilterResults";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ResultCard from "../components/ResultCard/ResultCard";
import {
  CircleColors,
  ColorContainer,
  ColorHeading,
  MainPageContainer,
  ResultsContainer,
} from "./styled";
import Circle from "@uiw/react-color-circle";

const ColorToPainting = () => {
  const [data, setData] = useState([]);
  const [colorHex, setColorHex] = useState("");

  const colorArray = [
    "#737C84",
    "#FBF6E1",
    "#2F4F4F",
    "#E0CC91",
    "#000000",
    "#B5BFCC",
    "#B35A1F",
    "#F6ECF3",
    "#981313",
    "#F49B7A",
    "#E09714",
    "#367614",
    "#4019B1",
    "#4279DB",
    "#DE4153",
    "#62AD77",
    "#8268DC",
    "#850085",
    "#DDA5AA",
    "#DF4C93",
    "#FFEB00",
  ];

  const fetchColorFilteredPaintingsData = async () => {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_RIJKS_API_KEY}&ps=100&f.normalized32Colors.hex=%23${colorHex.toUpperCase().replace('#', '')}&st=Objects`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data?.artObjects);
    console.log(url)
  };
  console.log(data);

  useEffect(() => {
    fetchColorFilteredPaintingsData();
  }, [colorHex]);

  return (
    <>
      <Navbar />
      <MainPageContainer>
        <ColorContainer>
          <ColorHeading>Search Collection Items By Color</ColorHeading>
          <CircleColors
            colors={colorArray}
            color={colorHex}
            onChange={(color) => {
              setColorHex(color.hex);
            }}
          />
        </ColorContainer>
        {data.length > 1 && <ResultsContainer>
          <FilterResults />
          {data.map((painting, id) => {
            return <ResultCard key={id} data={painting} />;
          })}
        </ResultsContainer>}
          
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default ColorToPainting;
