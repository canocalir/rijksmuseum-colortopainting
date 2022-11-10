import styled from "styled-components";

const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:33rem;
    gap: 2rem;
    padding: 1rem;
`

const ColorHeading = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    color: #f8c476;
`

const ResultsContainer = styled.div`
    background-color: #eee;
    width: 33rem;
    border-radius: 0.5rem;
`

const MainPageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2rem;
`

export {ColorContainer, ColorHeading, MainPageContainer, ResultsContainer}