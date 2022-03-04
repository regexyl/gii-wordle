import React from 'react';
import Cell from './Cell';
import { CellType } from './types';

interface Props {
  guessArr: string[];
  rowCellTypes: CellType[];
}

const GuessRow: React.FC<Props> = ({ guessArr, rowCellTypes }) => {
  return (
    <div className="flex mb-1 gap-1">
      {Array(5)
        .fill(undefined)
        .map((_, i) => (
          <Cell key={i} type={rowCellTypes[i]} char={guessArr[i]} />
        ))}
    </div>
  );
};

export default GuessRow;
