import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  CardDescription,
  ResultCardButton,
  ResultCardContainer,
  ResultImage,
  ResultLeftContainer,
  ResultRightContainer,
  ResultTitle,
  TitleYearContainer,
  YearBadge,
} from "./styled";

const ResultCard = ({ data }) => {
  const [details, setDetails] = useState([]);
  

  const { userLanguage, dictionary } = useContext(LanguageContext);
  const fetchDetailsData = async () => {
    const url = `https://www.rijksmuseum.nl/api/${
      userLanguage === "en" ? "en" : "nl"
    }/collection/${data?.objectNumber}?key=${
      process.env.REACT_APP_RIJKS_API_KEY
    }`;
    const res = await fetch(url);
    const dataDetails = await res.json();
    setDetails(dataDetails?.artObject);
    
  };

  const { dating, description } = details;
  const { title, links, webImage } = data;
  useEffect(() => {
    fetchDetailsData();
  }, [userLanguage]);

  return (
    <>
      {
        <ResultCardContainer>
          <ResultLeftContainer>
            <ResultImage loading={"lazy"} src={webImage?.url} alt="" />
          </ResultLeftContainer>
          <ResultRightContainer>
            <TitleYearContainer>
              <ResultTitle>{title}</ResultTitle>
              <YearBadge>{dating?.sortingDate}</YearBadge>
            </TitleYearContainer>
            <CardDescription>{description}</CardDescription>
            <a href={links?.web}>
              <ResultCardButton>{dictionary.moreDetailsButton}</ResultCardButton>
            </a>
          </ResultRightContainer>
        </ResultCardContainer>
      }
    </>
  );
};

export default ResultCard;
