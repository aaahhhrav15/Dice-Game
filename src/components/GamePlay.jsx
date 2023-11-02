import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  
  const [score, setScore]=useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber = () => {
    return (Math.floor(Math.random() * 6 + 1));
  };

  const rollDice = () => {
    if(!selectedNumber)
    {
      setError("Please select a number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber();
    setCurrentDice((prev) => randomNumber);
    if(selectedNumber=== randomNumber)
    {
      setScore((prev)=>prev+randomNumber);
    }
    else
    {
      setScore((prev)=>prev-randomNumber)
    }
    setSelectedNumber(undefined);
  }
  const resetScore=()=>{
    setScore(0);
  };
  
  return (
    <MainContainer>
      <div className="top">

        <TotalScore score={score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />

      </div>

      <RollDice
        currentDice={currentDice}
        rollDice={rollDice}
      />
      <div className="buttons">
        <Button onClick={ resetScore }>Reset Score</Button>
        <Button onClick={()=> setShowRules((prev)=>!prev) }>
          {showRules? "Hide" : "Show"} Rules
          </Button>
      </div>

      {showRules && <Rules />}
      
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer = styled.div`
  .top{
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    align-items:end;
  }
  .buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    margin: 20px;
    gap: 15px;
    
  }
`;
