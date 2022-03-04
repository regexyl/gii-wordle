import React from 'react';

const Cell = () => {
  const border = () => {
    return 'border border-gray-400 text-white'
  }

  return (
    <div className={`w-16 h-16 flex items-center justify-center text-xl ${border()}`}></div>
  )
}

export default Cell;