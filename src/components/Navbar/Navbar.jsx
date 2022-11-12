import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { LinkStyled } from "../../shared/styled"
import LangChanger from "../LangChanger/LangChanger"
import { ColorGeneratorButton, LinkLogo, LinksContainer, Logo, LogoContainer, NavbarContainer } from "./styled"

const Navbar = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <NavbarContainer>
      <LogoContainer>
        <LinkLogo to={'/'}>
          <Logo>RijksMuseum</Logo>
        </LinkLogo>
      </LogoContainer>
      <LinksContainer>
      <LinkStyled to={'/'}>Home</LinkStyled>
      <LinkStyled to={'/color-to-painting'}>
        <ColorGeneratorButton>
        {dictionary.navbarColorButton}
        </ColorGeneratorButton>
      </LinkStyled>
      <LangChanger/>
      </LinksContainer>
    </NavbarContainer>
  )
}

export default Navbar