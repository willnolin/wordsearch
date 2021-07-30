import React, { useState } from 'react'
import Info from './Info';
import WordForm from './WordForm';
import WordList from './WordList';


export default function Display(props) {

  const { currentWord, setCurrentWord, wordList, setWordList, activeSquares,
    setActiveSquares, isActive, setIsActive, isBoardActive, setIsBoardActive } = props;
  
  const [score, setScore] = useState(0)
  
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

  return (
    <div className="display-section">
      <div className="submit-button-container">
        <button className = "submit-button" form="word-form">Submit</button>
        <br />
        <br />
        <button className="reset-button" onClick={handleClear}>Reset</button>
      </div>

      <div className="display-details-column">
      <WordForm
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        wordList={wordList}
        setWordList={setWordList}
        activeSquares={activeSquares}
        setActiveSquares={setActiveSquares}
        isActive={isActive}
        setIsActive={setIsActive}
        isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive}
          setScore={setScore}
          handleClear={handleClear}
        />
        
      <WordList
        wordList={wordList}
        setWordList={setWordList}
        />
        
        <Info score={score}/>
      </div>
    </div>
  )
}
