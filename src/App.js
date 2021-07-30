import './App.css';
import Board from './components/board_components/Board';

import Display from './components/display_components/Display';
import { useState } from 'react'
import Layout from './components/layout_components/Layout';


function App() {

  const [currentWord, setCurrentWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [activeSquares, setActiveSquares] = useState([]);
  const [isBoardActive, setIsBoardActive] = useState(false);
  return (
    <div className="App">
      <Layout>
        <div className="board-container">
          <Board
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            activeSquares={activeSquares}
            setActiveSquares={setActiveSquares}
            isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}
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
            isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
