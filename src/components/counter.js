import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/ducks/counter";

function Counter(props) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setCount(count - 1);
  };

  return (
    <div
      style={{ backgroundColor: "lightgrey", margin: "10px", padding: "10px" }}
    >
      <h3>
        {props.name} vote: {count}
      </h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default Counter;
