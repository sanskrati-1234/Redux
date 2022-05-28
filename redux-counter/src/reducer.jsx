const initState = {
  count: 0,
};

const CountReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      console.log("LINE8", state.count);
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      console.log("LINE11", state.count);
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
};

export default CountReducer;
