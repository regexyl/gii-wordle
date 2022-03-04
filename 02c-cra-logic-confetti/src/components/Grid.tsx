import confetti from 'canvas-confetti';
import React, { useContext, useState } from 'react';
import { AnswerContext } from './App';
import GuessRow from './GuessRow';
import Input from './Input';
import { CellType } from './types';

const end = Date.now() + 1 * 1000;
const colors = ['#16a34a', '#ca8a04'];

function shootConfetti() {
  confetti({
    particleCount: 50,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 50,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(shootConfetti);
  }
}

const Grid: React.FC = () => {
  const { answer, setSolved } = useContext(AnswerContext)!;
  const [guesses, setGuesses] = useState([] as string[]);
  const [numOfSubmitted, setNumOfSubmitted] = useState<number>(0);

  const updateGuess = (newGuess: string) => {
    setGuesses([...guesses?.slice(0, numOfSubmitted), newGuess]);
  };

  const submitGuess = (currGuess: string) => {
    console.log('submitGuess1');
    console.log({ answer });
    if (currGuess === answer && numOfSubmitted + 1 === guesses.length) {
      console.log('submitGuess2');
      shootConfetti();
      setSolved(true);
    }
    setNumOfSubmitted(numOfSubmitted + 1);
  };

  const getRowCellTypes = (i: number, guessArr: string[]) => {
    let rowCellTypes = Array(5).fill(CellType.UNANSWERED) as CellType[];
    if (!numOfSubmitted || numOfSubmitted <= i) return rowCellTypes;

    const answerArr = Array.from(answer);
    let totalCorrect = 0;

    for (let i = 0; i < guessArr.length; i++) {
      if (guessArr[i] === answerArr[i]) {
        rowCellTypes.splice(i, 1, CellType.CORRECT);
        answerArr[i] = '';
        totalCorrect++;
      }
    }

    if (totalCorrect !== 5) {
      for (let i = 0; i < guessArr.length; i++) {
        if (rowCellTypes[i] !== CellType.UNANSWERED) continue;
        const index = answerArr.indexOf(guessArr[i]);
        if (index !== -1) {
          answerArr[index] = '';
          rowCellTypes.splice(i, 1, CellType.INCORRECT_LOCATION);
        } else {
          rowCellTypes.splice(i, 1, CellType.INCORRECT);
        }
      }
    }

    return rowCellTypes;
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {Array(6)
          .fill(undefined)
          .map((_, i) => {
            return (
              <GuessRow
                key={i}
                guessArr={guesses[i] ? guesses[i].split('') : []}
                rowCellTypes={getRowCellTypes(
                  i,
                  guesses[i] ? guesses[i].split('') : []
                )}
              />
            );
          })}
        <div className="h-10"></div>
        <Input submitGuess={submitGuess} updateGuess={updateGuess} />
      </div>
    </div>
  );
};

export default Grid;
