import React from 'react';
import GuessRow from './GuessRow';
import Input from './Input';

const Grid = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {Array(6) // [undefined, undefined, undefined,]
        .fill(undefined)
        .map((_, i) => {
          return <GuessRow key={i} />;
        })}
      <div className="h-10"></div>
      <Input />
    </div>
  );
};

export default Grid;
