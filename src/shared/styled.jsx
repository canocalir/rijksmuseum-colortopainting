import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    color: #fff;
    text-decoration: #fff;
`

const LangSelect = styled.select`
    width: 5rem;
    height: 2.2rem;
    border-radius: 0.5rem;
    font-weight: 600;
`

const MainContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`

export {LinkStyled, LangSelect, MainContainer}