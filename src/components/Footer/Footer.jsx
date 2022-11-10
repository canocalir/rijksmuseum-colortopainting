import { FooterContainer, FooterLink } from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Made with ❤️ by Can Ocalir | All Data Belongs to <FooterLink href="https://www.rijksmuseum.nl/" rel="noreferrer" target={'_blank'}>RijksMuseum</FooterLink></p>
    </FooterContainer>
  );
};

export default Footer;
