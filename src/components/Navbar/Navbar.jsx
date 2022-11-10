import { LinkStyled } from "../../shared/styled"
import LangChanger from "../LangChanger/LangChanger"
import { ColorGeneratorButton, LinkLogo, LinksContainer, Logo, LogoContainer, NavbarContainer } from "./styled"

const Navbar = () => {
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
        Color To Art Generator
        </ColorGeneratorButton>
      </LinkStyled>
      <LangChanger/>
      </LinksContainer>
    </NavbarContainer>
  )
}

export default Navbar