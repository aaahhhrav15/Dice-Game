import styled from "styled-components";

const TotalScore = ({score}) => {
    
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  );
};
const ScoreContainer=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 200px;
    padding-left: 70px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
    }
`;
export default TotalScore;