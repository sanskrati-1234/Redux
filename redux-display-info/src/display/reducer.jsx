const initState = {
  name: "Sanskrati",
  age: 23,
};

const displayReducer = (state = initState, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: state.name };
    case "AGE":
      return { ...state, age: state.age };
    default:
      return { ...state };
  }
};

export default displayReducer;
