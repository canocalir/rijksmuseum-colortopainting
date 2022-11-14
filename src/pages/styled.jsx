import Circle from "@uiw/react-color-circle";
import styled from "styled-components";

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 50%;
`;

const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
`

const CircleColors = styled(Circle)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const ColorHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #f8c476;
  text-align: center;
`;

const ResultsContainer = styled.div`
  
  display: flex;
  gap: 2rem;
  width: 90%;
  padding: 1rem;
  border-radius: 1rem;
  flex-wrap:wrap;
  justify-content: center;
  @media (max-width: 968px) {
    width: 90%;
  }
`;
const MainPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
`;

export {
  ColorContainer,
  ColorHeading,
  MainPageContainer,
  ResultsContainer,
  CircleColors,
  UpperContainer
};
