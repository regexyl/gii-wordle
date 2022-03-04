import React, { useEffect } from 'react';
import { CellType } from './types';

interface Props {
  type: CellType;
  char: string;
}

const Cell: React.FC<Props> = ({ type, char }) => {
  const checkCellStyle = () => {
    return type === CellType.UNANSWERED
      ? 'border border-gray-400 text-white'
      : type === CellType.CORRECT
      ? 'bg-green-600 text-white'
      : type === CellType.INCORRECT
      ? 'bg-gray-600 text-white'
      : type === CellType.INCORRECT_LOCATION
      ? 'bg-yellow-600 text-white'
      : '';
  };

  useEffect(() => {
    // console.log({char}, {type})
  })

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center text-xl ${checkCellStyle()}`}
    >
      {char}
    </div>
  );
};

export default Cell;
