import { Typography } from '@mui/material';
import React from 'react';
// import { ItestProps, QuestionProps } from './Test';

interface ICardHeadProps {
    questions: any;
    currentQuestionIndex: any;
  }
  
const CardHead:React.FC<ICardHeadProps>  = ({ currentQuestionIndex, questions }: any) => {
  return (
    <>
      <p>
        {currentQuestionIndex + 1} of {questions.length} quiz Questions, let's
        do it! 🔥
      </p>
      <Typography variant="h3" my={3}>
        {questions[currentQuestionIndex].question}
      </Typography>
    </>
  );
};

export default CardHead;
