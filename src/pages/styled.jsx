import Circle from "@uiw/react-color-circle";
import styled from "styled-components";

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    width: 40%;
`

const CircleColors = styled(Circle)`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    width: 100%;
`

const ColorHeading = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: #f8c476;
    text-align: center;
`

const ResultsContainer = styled.div`
    background-color: #eee;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height:40rem;
    width: 40%;
    padding: 3rem;
    border-radius: 1rem;
    overflow: scroll;
    @media (max-width: 968px){
        width: 90%;
    }

`

const MainPageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`

export {ColorContainer, ColorHeading, MainPageContainer, ResultsContainer, CircleColors}