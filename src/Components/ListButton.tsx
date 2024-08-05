import React from 'react';
import { ItestProps } from './Test';

interface ListButtonProps {
  index: number;
  option: string;
  handleOptions: (option: string, index: number) => void;
  currentQuestionIndex: number;
  questions: ItestProps[];
  currentAns: string | null;
}
const ListButton: React.FC<ListButtonProps> = ({
  index,
  option,
  handleOptions,
  currentQuestionIndex,
  questions,
  currentAns,
}) => {
  return (
    <>
      <button
        key={index}
        className={`btn ${
          currentAns
            ? option === questions[currentQuestionIndex].answer
              ? 'btn grn'
              : 'btn red'
            : ''
        }`}
        onClick={() => handleOptions(option, index)}
        disabled={currentAns !== null}
      >
        {option}
      </button>
    </>
  );
};

export default ListButton;
