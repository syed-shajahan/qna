import React from 'react';

const ScoreBord = ({ score }: {score:number}) => {
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
        Well played! 🥳 🎉
      </p>

      <h3 style={{ textAlign: 'center' }}>
        Here is your score buddy :{' '}
        <strong style={{ fontSize: '40px', color: 'rgb(69 146 208)' }}>
          {score}
        </strong>
        not bad 👍
      </h3>
    </div>
  );
};

export default ScoreBord;
