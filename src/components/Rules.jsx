import styled from "styled-components";
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play the dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on the dice</p>
                <p>If the selected number is equal to the number on the dice{" "}</p>
                <p>
                    If you get a wrong guess then the number on the dice will be deducted
                    from your score
                </p>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer=styled.div`
  background-color  : #fbf1f1;
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  p{
    font-size: 15px;
  }
`;
