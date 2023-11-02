import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="left">
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="right">
        <h1>DICE GAME</h1>
        <Button onClick={ toggle }>Play Now</Button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .right {
    text-align: end;
    h1 
    {
      font-size: 60px;
    }
  }
`;

export default StartGame;
