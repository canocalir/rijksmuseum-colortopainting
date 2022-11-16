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
import Loader from "../Loader/Loader";

const ResultCard = ({ data }) => {
  const [details, setDetails] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { userLanguage, dictionary } = useContext(LanguageContext);

  const fetchDetailsData = async () => {
    try {
      const url = `https://www.rijksmuseum.nl/api/${
        userLanguage === "en" ? "en" : "nl"
      }/collection/${data?.objectNumber}?key=${
        process.env.REACT_APP_RIJKS_API_KEY
      }&ps=1`;
      const res = await fetch(url);
      const dataDetails = await res.json();
      setDetails(dataDetails?.artObject);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDetailsHandler = () => {
    setIsOpen((current) => !current);
    fetchDetailsData();
  };

  const { dating, productionPlaces } = details;
  const { links, webImage, principalOrFirstMaker } = data;

  useEffect(() => {
    fetchDetailsData();
  }, []);
  return (
    <>
      {
        <ResultCardContainer>
          <ResultUpperContainer>
            <ResultImage loading={"lazy"} src={webImage?.url} alt="" />
          </ResultUpperContainer>
          <ResultLowerContainer>
            <TitleYearContainer>
              <ResultTitle>{data?.title}</ResultTitle>
              <div style={{ textAlign: "center" }}>
                <YearBadge>{dating?.sortingDate}</YearBadge>
                <Place>
                  {productionPlaces ? productionPlaces[0] : dictionary.noData}
                </Place>
              </div>
            </TitleYearContainer>
            <PrincipalMaker>{principalOrFirstMaker}</PrincipalMaker>
            <DescriptionButton onClick={fetchDetailsHandler}>
              {!isOpen
                ? dictionary.descriptionButtonClose
                : dictionary.descriptionButtonOpen}
            </DescriptionButton>
            {isOpen ? (
              <CardDescription>
                {!details?.label?.description ? dictionary.noData : details?.label?.description}
              </CardDescription>
            ) : null}
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
