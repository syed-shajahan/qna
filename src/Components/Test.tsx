import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

interface ItestProps {
  question: string;
  options: string[];
  answer: string;
}

interface QuestionProps {
  questions: ItestProps[];
}

const Test: React.FC<QuestionProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAns, setCurrentAns] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setCurrentAns(null);
    setShake(false);
  };

  const handleOptions = (opt: string, ind: number) => {
    setCurrentAns(opt);
    if (opt !== questions[currentQuestionIndex].answer) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setScore((prev) => prev + 1);
    }
  };

  return currentQuestionIndex < questions.length ? (
    <div
      style={{
        maxWidth: "800px",
        width: "90%",
        margin: "100px auto 40px",
        padding: "16px",
        border: "1px solid #EEE",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0px 10px 25px #ccc",
      }}
      className={`quiz-card ${shake ? "shake" : ""}`}
    >
      <p>
        {currentQuestionIndex + 1} of {questions.length} quiz Questions, let's
        do it! 🔥
      </p>
      <Typography variant="h3" my={3}>
        {questions[currentQuestionIndex].question}
      </Typography>

      <Box>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className={`btn ${
              currentAns
                ? option === questions[currentQuestionIndex].answer
                  ? "btn grn"
                  : "btn red"
                : ""
            }`}
            onClick={() => handleOptions(option, index)}
            disabled={currentAns !== null}
          >
            {option}
          </button>
        ))}
      </Box>
      <button
        disabled={currentAns === null}
        className={`btn btn-g  ${
          currentAns === null ? "btn btn-g  btndisable" : "btn btn-g"
        }`}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  ) : (
    <div
      style={{
        maxWidth: "800px",
        width: "90%",
        margin: "100px auto 40px",
        padding: "16px",
        border: "1px solid #EEE",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0px 10px 25px #ccc",
      }}
    >
      <p style={{ textAlign: "center", marginBottom:"10px" }}>Well played! 🥳 🎉 </p>

      <h3 style={{ textAlign: "center" }}>
        Here is your score buddy :{" "}
        <strong style={{ fontSize: "40px", color: "rgb(69 146 208)" }}>
          {score}
        </strong>{" "}
        not bad 👍{" "}
      </h3>
    </div>
  );
};

export default Test;
