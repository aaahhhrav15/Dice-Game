import styled from "styled-components";

const NumberSelector = ({setError,error, selectedNumber, setSelectedNumber}) => {
    const array = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    };

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {
                    array.map((value, i) => (
                        <Box
                            isSelected={value === selectedNumber}
                            key={i}
                            onClick={() =>numberSelectorHandler(value) }
                        >
                            {value}
                        </Box>
                        
                    ))
                    
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

const NumberSelectorContainer=styled.div`
    padding-right: 30px;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        text-align: end;
        line-height: 50px;
        font-size: 20px;
    }
    .error
    {
        color: red;
    }
`;
const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 2px solid black;
  display: grid;
  font-weight: 600;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
export default NumberSelector;