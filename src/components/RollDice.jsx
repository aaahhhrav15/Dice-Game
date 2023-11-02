import styled from "styled-components";

const RollDice = ({currentDice,rollDice}) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={()=>rollDice()}>
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on the Dice to Roll</p>
        </DiceContainer>
    );
};
const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    .dice{
        cursor: pointer;
    }
    img{
        scale: 0.9;
    }
    p{
        font-size: 17px;
    }
`;
export default RollDice;