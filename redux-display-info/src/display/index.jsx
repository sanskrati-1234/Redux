import { useDispatch, useSelector } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.displayReducer);
  return (
    <>
      <h1>name:{display.name}</h1>
      <h1>age:{display.age}</h1>
      <button onClick={() => dispatch({ type: "NAME" })}>DisplayName</button>
      <button onClick={() => dispatch({ type: "AGE" })}>DisplayAge</button>
    </>
  );
};

export default Display;
