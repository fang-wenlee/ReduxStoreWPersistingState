import "./styles.css";
import Counter from "./components/counter";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Fang-wen",
    "Hsi-Wen",
    "Bob Smith",
    "Stephanie Foo",
    "Pohan Lin",
    "John Ho"
  ];
  return (
    <div className="App">
      <h1>Total votes: {count}</h1>
      {voters.map((voter, i) => (
        <Counter key={i} name={voter} />
      ))}
    </div>
  );
}
export default App;
