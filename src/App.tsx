import React from "react";
import "./App.css";
import Test from "./Components/Test";
import questions from "./Components/mockupData.json";
function App() {
  return (
    <div className="App">
      <Test questions={questions} />
    </div>
  );
}

export default App;
