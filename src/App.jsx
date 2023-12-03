import React, { useState } from "react";
import Counter from "./components/counter/Counter";
import Login from "./components/login/Login";
import Sehifeleme from "./components/sehifeleme/Sehifeleme";

function App() {
  const [task1Visible, setTask1Visible] = useState(false);
  const [task2Visible, setTask2Visible] = useState(false);
  const [task3Visible, setTask3Visible] = useState(false);

  function showTask1() {
    setTask1Visible(true);
    setTask2Visible(false);
    setTask3Visible(false);
  }

  function showTask2() {
    setTask1Visible(false);
    setTask2Visible(true);
    setTask3Visible(false);
  }

  function showTask3() {
    setTask1Visible(false);
    setTask2Visible(false);
    setTask3Visible(true);
  }

  return (
    <div className="container">
      {task1Visible && <Login />}
      {task2Visible && <Counter />}
      {task3Visible && <Sehifeleme />}

      <div className="fixedButton">
        <button onClick={showTask1}>Task 1</button>
        <button onClick={showTask2}>Task 2</button>
        <button onClick={showTask3}>Task 3</button>
      </div>
    </div>
  );
}

export default App;
