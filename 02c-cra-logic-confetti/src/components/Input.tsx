import React, { useContext, useState } from 'react';
import { AnswerContext } from './App';
import Keyboard from './Keyboard';

interface Props {
  updateGuess: (currGuess: string) => void;
  submitGuess: (currGuess: string) => void;
}

const Input: React.FC<Props> = ({ submitGuess, updateGuess }) => {
  const { solved } = useContext(AnswerContext)!;
  const [currGuess, setCurrGuess] = useState('');

  const onSubmit = () => {
    console.log({ currGuess });
    // Check if input is a 5-letter alphabetic word
    if (
      currGuess.length !== 5 ||
      currGuess.match(/[a-z]+/i)![0] !== currGuess
    ) {
      return;
    }

    updateGuess(currGuess);
    submitGuess(currGuess);
    setCurrGuess('');
  };

  const onUpdateGuess = (newChar: string) => {
    if (newChar.length <= 5) {
      const newGuessValue = currGuess + newChar;
      setCurrGuess(newGuessValue);
      updateGuess(newGuessValue);
    }
  };

  const onDelete = () => {
    const newGuessValue = currGuess.split('').slice(0, -1).join('');
    setCurrGuess(currGuess.slice(0, -1));
    updateGuess(newGuessValue);
  };

  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.getAttribute('data-key') && currGuess.length < 5) {
      onUpdateGuess(e.currentTarget.innerText);
      return;
    }

    if (e.currentTarget.getAttribute('data-delete')) {
      onDelete();
      return;
    }

    if (e.currentTarget.getAttribute('data-enter')) {
      onSubmit();
      return;
    }
  };

  const noop = () => {};

  return (
    <div className="w-full flex flex-col items-center">
      <Keyboard onClick={solved ? noop : onClick} />
    </div>
  );
};

export default Input;
