import styled, { keyframes } from "styled-components";

const rotate = keyframes`
     from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingIcon = styled.div`
    animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
`
export {LoadingIcon}