import React from 'react';
import { TESTPAGE } from '../types/enum';

interface ICardFooterProps {
  currentAns: string | null;
  handleNext: () => void;
}

const CardFooter: React.FC<ICardFooterProps> = ({ currentAns, handleNext }) => {
  return (
    <div>
      {' '}
      <button
        disabled={currentAns === null}
        className={`btn btn-g  ${
          currentAns === null ? 'btn btn-g  btndisable' : 'btn btn-g'
        }`}
        onClick={handleNext}
      >
        {TESTPAGE.NEXT}
      </button>
    </div>
  );
};

export default CardFooter;
