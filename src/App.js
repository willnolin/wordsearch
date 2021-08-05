import './App.css';
import Board from './components/board_components/Board';

import Display from './components/display_components/Display';
import { useState, useEffect } from 'react'
import Layout from './components/layout_components/Layout';


function App() {

  const [currentWord, setCurrentWord] = useState([]);
  const [wordList, setWordList] = useState([]);
  const [activeSquares, setActiveSquares] = useState([]);
  const [isBoardActive, setIsBoardActive] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);


  const handleClear = () => {
    // clear current word state
    setCurrentWord([])
    // for each active square, change bg property to white, set global Active Board toggle (triggers useEffect in Square)
    activeSquares.forEach(square => {
      const obj = { bg: 'white' }
      const newObj = Object.assign(square, obj)
      square = { ...newObj }

    })
    setIsBoardActive(prevState => !prevState)
    setActiveSquares([])
  }
  //   useEffect(() => {
  //     setIsTimerActive(prevState => !prevState)
  // }, [])
  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className="App">
      <Layout isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        handleClear={handleClear}
        refreshPage={refreshPage}>
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
        <div className="submit-button-container">
          <button className="submit-button" form="word-form">Submit</button>

          <button className="reset-button" onClick={handleClear}>Reset</button>
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
            handleClear={handleClear}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
