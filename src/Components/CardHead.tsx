import { Typography } from '@mui/material';
import React from 'react';
import { TESTPAGE } from '../types/enum';
import { ItestProps } from './Test';
// import { ItestProps, QuestionProps } from './Test';

interface ICardHeadProps {
  questions: ItestProps[];
  currentQuestionIndex: number;
}

const CardHead: React.FC<ICardHeadProps> = ({
  currentQuestionIndex,
  questions,
}) => {
  return (
    <>
      <p>
        {currentQuestionIndex + 1} {TESTPAGE.OF}
        {questions.length} {TESTPAGE.HOME_TITLE}
      </p>
      <Typography variant="h3" my={3}>
        {questions[currentQuestionIndex].question}
      </Typography>
    </>
  );
};

export default CardHead;
