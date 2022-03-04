import React from 'react';
import Cell from './Cell';

const GuessRow = () => {
  return (
    <div className="flex mb-1 gap-1">
      {Array(5)
        .fill(undefined)
        .map((_, i) => (
          <Cell key={i} />
        ))}
    </div>
  );
};

export default GuessRow;
