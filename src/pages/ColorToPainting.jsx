import EditableInputHSLA from "@uiw/react-color-editable-input-hsla";
import Wheel from "@uiw/react-color-wheel";
import React, { useState } from "react";
import FilterResults from "../components/FilterResults/FilterResults";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ResultCard from "../components/ResultCard/ResultCard";
import { ColorContainer, ColorHeading, MainPageContainer, ResultsContainer } from "./styled";

const ColorToPainting = () => {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  
  return (
    <>
      <Navbar />
      <MainPageContainer>
      <ColorContainer>
      <ColorHeading>Select a Color</ColorHeading>
      <Wheel
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
      <h2 style={{color: '#f8c476'}}>OR</h2>
      <ColorHeading>Enter a Color</ColorHeading>
      <EditableInputHSLA
        hsva={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva });
        }}
      />
      </ColorContainer>
      <ResultsContainer>
        <FilterResults/>
        <ResultCard/>
      </ResultsContainer>
      </MainPageContainer>
      <Footer />
    </>
  );
};

export default ColorToPainting;
