import './App.css';
import Board from './components/Board';

import Display from './components/Display';
import { useState } from 'react'
import Layout from './components/Layout';


function App() {

  const [currentWord, setCurrentWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [activeSquares, setActiveSquares] = useState([]);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <Layout>
        <div className="board-container">
          <Board
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            activeSquares={activeSquares}
            setActiveSquares={setActiveSquares}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <div className="game-details-container">
          <Display
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            wordList={wordList}
            setWordList={setWordList}
            activeSquares={activeSquares}
            setActiveSquares={setActiveSquares}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
