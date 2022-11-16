import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #40474f;
  padding: 1.5rem 0 1.5rem 0;
  gap: 2rem;
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #f8c476;
`;

const LinkLogo = styled(Link)`
    color: #f8c476;
    text-decoration: none;
`

const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ColorGeneratorButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  border-radius: 1rem;
  background-color: #d68f24;
  color: #fff;
  font-weight: 600;
  border: none;
  font-size:0.9rem;
  &:hover {
    cursor: pointer;
    background-color: #f8a62c;
    transition: 200ms ease-in;
  }
  @media (max-width: 968px) {
    width: 7rem;
  }
`;

export {
  NavbarContainer,
  Logo,
  LogoContainer,
  LinksContainer,
  ColorGeneratorButton,
  LinkLogo
};
