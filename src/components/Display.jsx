import React from 'react'
import Info from './Info';
import WordForm from './WordForm';
import WordList from './WordList';

export default function Display(props) {

  const { currentWord, setCurrentWord, wordList, setWordList, activeSquares,
    setActiveSquares, isActive, setIsActive, isBoardActive, setIsBoardActive } = props;

  return (
    <div className="display-section">
      <div className="submit-button-container">
        <button className = "submit-button" form="word-form">Submit</button>
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
      />
      <WordList
        wordList={wordList}
        setWordList={setWordList}
      />
        <Info />
      </div>
    </div>
  )
}
