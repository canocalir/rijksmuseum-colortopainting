import { ResultCardContainer } from "./styled"

const ResultCard = ({data}) => {
  
  return (
    <ResultCardContainer>
      <h3>{data?.title}</h3>
      <img src={data?.webImage?.url} alt="" />
    </ResultCardContainer>
  )
}

export default ResultCard