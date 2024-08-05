import React from 'react';
import { TESTPAGE } from '../types/enum';

const ScoreBord = ({ score }: { score: number }) => {
  return (
    <div
      style={{
        maxWidth: '800px',
        width: '90%',
        margin: '100px auto 40px',
        padding: '16px',
        border: '1px solid #EEE',
        borderRadius: '10px',
        background: '#fff',
        boxShadow: '0px 10px 25px #ccc',
      }}
    >
      <p style={{ textAlign: 'center', marginBottom: '10px' }}>
        {TESTPAGE.WELL_PLAYED}
      </p>

      <h3 style={{ textAlign: 'center' }}>
        {TESTPAGE.YOUR_SCORE}
        <strong style={{ fontSize: '40px', color: 'rgb(69 146 208)' }}>
          {score}
        </strong>
        {TESTPAGE.NOT_BAD}
      </h3>
    </div>
  );
};

export default ScoreBord;
