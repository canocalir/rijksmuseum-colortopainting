import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  CardDescription,
  Place,
  PrincipalMaker,
  ResultCardButton,
  ResultCardContainer,
  ResultImage,
  ResultLowerContainer,
  ResultTitle,
  ResultUpperContainer,
  TitleYearContainer,
  YearBadge,
} from "./styled";
import Loader from '../Loader/Loader'

const ResultCard = ({ data }) => {
  const [details, setDetails] = useState([]);

  const { userLanguage, dictionary } = useContext(LanguageContext);
  const fetchDetailsData = async () => {
    const url = `${process.env.REACT_APP_RIJKS_BASE_URL}/${userLanguage === "en" ? "en" : "nl"
    }/collection/${data?.objectNumber}?key=${
      process.env.REACT_APP_RIJKS_API_KEY
    }`;
    const res = await fetch(url);
    const dataDetails = await res.json();
    setDetails(dataDetails?.artObject);
  };

  const { dating, productionPlaces } = details;
  const { links, webImage, principalOrFirstMaker } = data;
  useEffect(() => {
    fetchDetailsData();
  }, [userLanguage]); // eslint-disable-line 

  return (
    <>
      {
        <ResultCardContainer>
          <ResultUpperContainer>
            <ResultImage loading={'lazy'} src={webImage?.url} alt="" />
          </ResultUpperContainer>
          <ResultLowerContainer>
            <TitleYearContainer>
              <ResultTitle>{details?.label?.title}</ResultTitle>
              <div style={{textAlign: 'center'}}>
              <YearBadge>{dating?.sortingDate}</YearBadge>
              <Place>{productionPlaces ? productionPlaces[0] : 'No data'}</Place>
              </div>
            </TitleYearContainer>
            <PrincipalMaker>{principalOrFirstMaker}</PrincipalMaker>
            <CardDescription>{!details?.label?.description ? <Loader/> : details?.label?.description}</CardDescription>
            <a href={links?.web}>
              <ResultCardButton>
                {dictionary.moreDetailsButton}
              </ResultCardButton>
            </a>
          </ResultLowerContainer>
        </ResultCardContainer>
      }
    </>
  );
};

export default ResultCard;
