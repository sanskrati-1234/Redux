import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.CountReducer.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>count{count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
    </>
  );
};

export default Counter;
