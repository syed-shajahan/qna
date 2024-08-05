import { Box } from '@mui/material';
import React, { useState } from 'react';
import ScoreBord from './ScoreBord';
import CardFooter from './CardFooter';
import CardHead from './CardHead';
import ListButton from './ListButton';

export interface ItestProps {
  question: string;
  options: string[];
  answer: string;
}

export interface QuestionProps {
  questions: ItestProps[];
}

const Test: React.FC<QuestionProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAns, setCurrentAns] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [score, setScore] = useState<number>(0);

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
    <Box className={`main_card quiz-card ${shake ? 'shake' : ''}`}>
      <CardHead
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
      />

      <Box>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <ListButton
            key={index}
            index={index}
            option={option}
            handleOptions={() => handleOptions(option, index)}
            currentAns={currentAns}
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
          />
        ))}
      </Box>
      <CardFooter currentAns={currentAns} handleNext={handleNext} />
    </Box>
  ) : (
    <ScoreBord score={score} />
  );
};

export default Test;
