
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from './CollectionSlider.module.scss'

import { CollectionSliderContainer } from "./styled";

const CollectionSlider = () => {
  return (
    <CollectionSliderContainer>
    <AwesomeSlider cssModule={AwesomeSliderStyles}></AwesomeSlider>
    </CollectionSliderContainer>
  );
};

export default CollectionSlider;
