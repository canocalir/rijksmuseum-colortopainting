import styled from "styled-components";

const ResultCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  background-color: #fff;
  width: 30%;
  @media (max-width: 968px) {
    width: 90%;
  }
`;

const CardDescription = styled.p`
    font-size: 0.8rem;
    padding: 1rem;
`

const TitleYearContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

`

const ResultCardButton = styled.button`
  width: 200px;
  height: 2.2rem;
  border: none;
  background-color: #d68f24;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  color: #fff;
  font-weight: 600;
  &:hover {
    background-color: #f8a62c;
    cursor: pointer;
  }
`;

const ResultTitle = styled.h3`
    font-size: 1.2rem;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
`

const YearBadge = styled.div`
  background-color: lightPink;
  font-size: 1.7rem;
  font-weight:600;
`;

const ResultRightContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  background-color: #fff;
`;

const ResultImage = styled.img`
    border-radius:1rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const ResultLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
`;
export {
  ResultCardContainer,
  ResultCardButton,
  ResultRightContainer,
  ResultLeftContainer,
  YearBadge,
  CardDescription,
  TitleYearContainer,
  ResultTitle,
  ResultImage
};
