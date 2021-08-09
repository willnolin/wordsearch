import React from 'react'
import Info from './Info';
import WordForm from './WordForm';
import WordList from './WordList';


export default function Display(props) {

  const { currentWord, setCurrentWord,
    wordList, setWordList,
    activeSquares, setActiveSquares,
    isActive, setIsActive,
    isBoardActive, setIsBoardActive,
    handleClear, score, setScore } = props;

  // const [score, setScore] = useState(0)

  return (
    <div className="display-section">

      <div className="display-details-column">
        <div className="score-textbox-row">
          <Info score={score} />
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
        </div>
        <WordList
          wordList={wordList}
          setWordList={setWordList}
        />


      </div>
    </div>
  )
}
