import { ResultCardContainer } from "./styled"

const ResultCard = ({data}) => {
  
  return (
    <ResultCardContainer>
      <img width={'100px'} src={data?.webImage?.url} alt="" />
        <h2>{data?.title}</h2>
    </ResultCardContainer>
  )
}

export default ResultCard