import './App.css';
import Board from './components/Board';
import WordForm from './components/WordForm';
import { useState } from 'react'


function App() {

  const words = require('an-array-of-english-words')
  const [currentWord, setCurrentWord] = useState([])

  return (
    <div className="App">

      <Board currentWord={currentWord}
        setCurrentWord={setCurrentWord} />
      <WordForm currentWord={currentWord} />

    </div>
  );
}

export default App;
