import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FooterContainer, FooterLink } from "./styled";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <FooterContainer>
      <p>{dictionary.footerText} <FooterLink href="https://www.rijksmuseum.nl/" rel="noreferrer" target={'_blank'}>RijksMuseum</FooterLink></p>
    </FooterContainer>
  );
};

export default Footer;
