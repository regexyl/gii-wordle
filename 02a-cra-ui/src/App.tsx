import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App bg-stone-900 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-gray-200 text-3xl font-bold">Wordle</h1>
      <div className="h-10"></div>
      <Grid />
    </div>
  );
}

export default App;
