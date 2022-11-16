import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  CardDescription,
  DescriptionButton,
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
  const [isOpen, setIsOpen] = useState(false)

  const { userLanguage, dictionary } = useContext(LanguageContext);
  const fetchDetailsData = async () => {
    const url = `/${userLanguage === "en" ? "en" : "nl"
    }/collection/${data?.objectNumber}?key=${process.env.REACT_APP_RIJKS_API_KEY}&ps=1`;
    const res = await fetch(url,{
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    const dataDetails = await res.json()
    setDetails(dataDetails?.artObject)
  }

  const { dating, productionPlaces } = details;
  const { links, webImage, principalOrFirstMaker } = data;

  useEffect(() => {
    fetchDetailsData();
  }, [isOpen, data?.objectNumber]); // eslint-disable-line 

  return (
    <>
      {
        <ResultCardContainer>
          <ResultUpperContainer>
            <ResultImage loading={'lazy'} src={webImage?.url} alt="" />
          </ResultUpperContainer>
          <ResultLowerContainer>
            <TitleYearContainer>
              <ResultTitle>{data?.title}</ResultTitle>
              <div style={{textAlign: 'center'}}>
              <YearBadge>{dating?.sortingDate}</YearBadge>
              <Place>{productionPlaces ? productionPlaces[0] : 'No data'}</Place>
              </div>
            </TitleYearContainer>
            <PrincipalMaker>{principalOrFirstMaker}</PrincipalMaker>
            <DescriptionButton onClick={() => setIsOpen(current => !current)}>{!isOpen ? dictionary.descriptionButtonClose : dictionary.descriptionButtonOpen}</DescriptionButton>
            {isOpen ? <CardDescription>{details?.label?.description ? details?.label?.description : <Loader/>}</CardDescription> : null}
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
