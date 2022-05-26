const intiState = {
  result: 0,
};

const calculatorReducer = (state = intiState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("ADD");
      return {
        ...state,
        result: +action.payload.input1 + +action.payload.input2,
      };
    }
    case "SUBSTRACT": {
      console.log("SUBSTRACT");
      return {
        ...state,
        result: +action.payload.input1 - +action.payload.input2,
      };
    }

    case "DIVIDE": {
      console.log("divide");
      return {
        ...state,
        result: +action.payload.input1 / +action.payload.input2,
      };
    }

    case "MULTIPLY":
      return {
        ...state,
        result: +action.payload.input1 * +action.payload.input2,
      };
    default:
      return { ...state };
  }
};

export default calculatorReducer;
