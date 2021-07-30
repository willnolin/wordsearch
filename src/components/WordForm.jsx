import React, { useState } from 'react'

export default function WordForm(props) {
  const { currentWord,
    setCurrentWord,
    wordList,
    setWordList,
    activeSquares,
    setActiveSquares,
    isBoardActive,
    setIsBoardActive } = props;
  
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
      console.log('The word exists')
    }
    else {

      console.log('The word aint here')
    }
  }
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
    <div className="word-form">
      <form onSubmit={(e) => handleGuess(e)} id="word-form">
        {/* <button type="submit">Submit</button> */}
        <input className="textbox" type="text" id="word" value={currentWordStr} readOnly />
      </form>
    </div>
  )
}
