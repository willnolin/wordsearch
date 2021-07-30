import React, { useState } from 'react'

export default function WordForm(props) {
  const { currentWord, setCurrentWord, wordList, setWordList, activeSquares, setActiveSquares } = props;
  const currentWordStr = currentWord.join('')
  const words = require('an-array-of-english-words')

  const checkIfValid = (word) => {
    const w = word.toLowerCase()
    console.log(words.filter(d => d === w))
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
    setCurrentWord([])
    activeSquares.map(square => {
      square.bg = 'white'
    })
    setActiveSquares([])
  }

  return (
    <div className="word-form">
      <form onSubmit={(e) => handleGuess(e)}>
        <input type="text" id="word" value={currentWordStr} readOnly />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
