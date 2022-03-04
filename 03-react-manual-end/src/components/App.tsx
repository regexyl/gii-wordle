import React, { createContext, useEffect, useState } from 'react';
import { randomFromList } from '../utils';
import targetWords from '../utils/targetWords';
import Grid from './Grid';

interface AnswerContextInterface {
  answer: string;
  solved: boolean;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnswerContext = createContext<AnswerContextInterface | null>(null);

export default function App() {
  const [word, setWord] = useState('');
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const chosenWord = randomFromList(targetWords).toUpperCase();

    console.log(chosenWord);
    setWord(chosenWord);
  }, []);

  const initialAnswerContext: AnswerContextInterface = {
    answer: word,
    solved: solved,
    setSolved: setSolved,
  };

  return (
    <AnswerContext.Provider value={initialAnswerContext}>
      <div className="App flex flex-col items-center justify-center min-h-screen bg-stone-900">
        <h1 className="text-gray-200 text-3xl font-bold">Wordle</h1>
        <div className="h-6"></div>
        <Grid />
      </div>
    </AnswerContext.Provider>
  );
}
