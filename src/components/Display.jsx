import React from 'react'
import WordForm from './WordForm';
import WordList from './WordList';

export default function Display(props) {

  const { currentWord, setCurrentWord, wordList, setWordList, activeSquares,
    setActiveSquares, isActive, setIsActive } = props;

  return (
    <div className="display-section">
      <WordForm
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        wordList={wordList}
        setWordList={setWordList}
        activeSquares={activeSquares}
        setActiveSquares={setActiveSquares}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <WordList
        wordList={wordList}
        setWordList={setWordList}
      />
    </div>
  )
}
