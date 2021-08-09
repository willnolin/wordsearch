import React, { useState } from 'react'

export default function WordForm(props) {
  const { currentWord,
    wordList,
    setWordList,
    setScore,
    handleClear } = props;

  const currentWordStr = currentWord.join('');
  const [message, setMessage] = useState('');
  const words = require('an-array-of-english-words');

  const checkIfValid = (word) => {
    const w = word.toLowerCase()
    if (words.filter(d => d === w).length && !wordList.includes(w.toUpperCase()) && w.length > 4) {
      setMessage('Long Word Bonus +3 !')
      return true
    } else if (words.filter(d => d === w).length && !wordList.includes(w.toUpperCase())) {
      return true
    } else if (wordList.includes(w.toUpperCase())) {
      setMessage('Already found that word!')
      return false
    } else {
      setMessage('Word not in database!')
      return false
    }
  }
  // this is where you need to handle if the word already exists in wordList
  const handleGuess = (e) => {
    e.preventDefault();
    const exists = checkIfValid(currentWordStr)
    if (exists) {
      setWordList([...wordList, currentWordStr])
      handleClear();
      handleScore();
      handleMessage();
      console.log('The word exists')
    }
    else {
      handleMessage()
      handleClear();
      console.log('The word aint here')
    }
  }

  const handleMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000)
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
        <input className="textbox" type="text" id="word" value={message.length ? message : currentWordStr} readOnly />
      </form>
    </div>
  )
}
