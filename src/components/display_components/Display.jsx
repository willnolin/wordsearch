import React from 'react'
import Info from './Info';
import WordForm from './WordForm';
import WordList from './WordList';


export default function Display(props) {

  const {
    currentWord,
    setCurrentWord,
    wordList,
    setWordList,
    activeSquares,
    setActiveSquares,
    isActive,
    setIsActive,
    isBoardActive,
    setIsBoardActive,
    handleClear,
    score,
    setScore
  } = props;

  return (
    <div className="display-section">

      <div className="container m-0 display-details-column">
        <div className="content m-2 has-text-centered">
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
          <Info score={score} />
        </div>
        <WordList
          wordList={wordList}
          setWordList={setWordList}
        />


      </div>
    </div>
  )
}
