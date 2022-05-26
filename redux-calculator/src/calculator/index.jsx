import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  return (
    <>
      <h1>CalculatorReducer Result:{result}</h1>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button
        onClick={() => dispatch({ type: "ADD", payload: { input1, input2 } })}
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch({ type: "SUBSTRACT", payload: { input1, input2 } })
        }
      >
        substract
      </button>
      <button
        onClick={() =>
          dispatch({ type: "DIVIDE", payload: { input1, input2 } })
        }
      >
        divide
      </button>
      <button
        onClick={() =>
          dispatch({ type: "MULTIPLY", payload: { input1, input2 } })
        }
      >
        multiply
      </button>
    </>
  );
};

export default Calculator;
