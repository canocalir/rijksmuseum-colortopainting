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

const CardDescription = styled.div`
  font-size: 0.8rem;
  padding: 1rem;
  font-family: Inter, system-ui, sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.4px;
  overflow: hidden;
  height: 30rem;
  overflow: auto;
  margin: 0;
`;

const Place = styled.h4`
  margin:0;
  margin-top:0.5rem;
`

const TitleYearContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 5rem;
`;

const ResultCardButton = styled.button`
  width: 100%;
  background-color: #f8a62c;
  color: #fff;
  height: 2.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.4rem;
  font-weight: 600;
  &:hover {
    transition: 200ms ease-in;
    background-color: #fff;
    outline: 1px solid #d68f24;
    color: #d68f24;
    cursor: pointer;
  }
`;

const ResultTitle = styled.h3`
  font-size: 1rem;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  font-family: "Roboto Mono", system-ui, sans-serif;
  word-spacing: -5px;
  text-transform: none;
  margin: 0;
`;

const YearBadge = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  color: #cfa83a;
`;

const ResultLowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  background-color: #fff;
`;

const ResultImage = styled.img`
  border-radius: 1rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ResultUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 20rem;
  overflow: hidden;
  border-radius: 1rem;
`;

const PrincipalMaker = styled.h3`
  font-family: "Roboto Mono", system-ui, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1px;
  padding-left: 1rem;
  margin: 0;
  color: #3a3d42;
`;
export {
  ResultCardContainer,
  ResultCardButton,
  ResultLowerContainer,
  ResultUpperContainer,
  YearBadge,
  CardDescription,
  TitleYearContainer,
  ResultTitle,
  ResultImage,
  PrincipalMaker,
  Place
};
