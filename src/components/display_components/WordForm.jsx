import React, { useState } from 'react'

export default function WordForm(props) {
  const { currentWord,
    setCurrentWord,
    wordList,
    setWordList,
    activeSquares,
    setActiveSquares,
    isBoardActive,
    setIsBoardActive,
    setScore,
  handleClear } = props;
  
  const currentWordStr = currentWord.join('')
  const words = require('an-array-of-english-words')

  const checkIfValid = (word) => {
    const w = word.toLowerCase()
    if (words.filter(d => d === w).length)
      return true
    else
      return false
  }

  const handleGuess = (e) => {
    e.preventDefault();
    const exists = checkIfValid(currentWordStr)
    if (exists) {
      setWordList([...wordList, currentWordStr])
      handleClear();
      handleScore();
      console.log('The word exists')
    }
    else {

      console.log('The word aint here')
    }
  }

  const handleScore = () => {
    let points = 0;
    if (currentWordStr.length < 6) {
      points = currentWordStr.length
    } else {
      points = currentWordStr.length + 3
    }
    setScore(prevState => prevState + points)
  }

  return (
    <div className="word-form">
      <form onSubmit={(e) => handleGuess(e)} id="word-form">
        {/* <button type="submit">Submit</button> */}
        <input className="textbox" type="text" id="word" value={currentWordStr} readOnly />
      </form>
    </div>
  )
}
