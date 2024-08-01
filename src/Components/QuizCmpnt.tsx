/* eslint-disable no-unreachable */
import React, { useState } from "react";
import questions from "./mockupData.json";


const QuizCmpnt = () => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

  return;
  <>
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "10px",
        border: "1px solid #EEE",
        borderRadius: "20px",
        background:"pink"
      }}
    ></div>
  </>;
};

export default QuizCmpnt;
