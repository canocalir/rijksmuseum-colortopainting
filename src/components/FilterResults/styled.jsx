import styled from "styled-components";

const SelectBoxArtist = styled.select`
    font-size: 1rem;
    width: 9rem;
    height: 2.5rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-left: 0.5rem;
    background-color: #C8102E;
    color: #fff;
    font-weight: 600;
`

const EmptyWhiteSpace = styled.div`
    width: 3rem;
    height: 2.5rem;
    background-color: #fff;
`

const SelectBoxPlace = styled.select`
    font-size: 1rem;
    width: 9rem;
    height: 2.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding-left: 0.5rem;
    background-color:#003DA5 ;
    color: #fff;
    font-weight: 600;
`

const FilterAreaContainer = styled.div`
    display: flex;
    width: fit-content;
`

export {SelectBoxArtist, SelectBoxPlace, EmptyWhiteSpace, FilterAreaContainer}