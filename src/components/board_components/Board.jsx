import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import RandomLetterRow from './RandomLetterRow';

export default function Board(props) {
  const { currentWord, setCurrentWord, activeSquares, setActiveSquares, isBoardActive,
    setIsBoardActive, inProp, setInProp } = props;
  useEffect(() => {
  setInProp(true)
}, [])

  const handleClick = (letter, setIsActive) => {
 
    if (currentWord.length) {
      if (activeSquares.find((obj) => (
        obj.x === letter.x && obj.y === letter.y
      ))) {
        if (activeSquares[activeSquares.length - 1].x === letter.x &&
          activeSquares[activeSquares.length - 1].y === letter.y) {
          activeSquares.splice(activeSquares.length - 1, 1)
          setActiveSquares([...activeSquares])
          currentWord.splice(currentWord.length - 1, 1);
          setCurrentWord([...currentWord])
          setIsActive(false);
          return true;  // detect Change
        } else {
          return false;  // detect Change
        }
      }
      if ((Math.abs(letter.x - activeSquares[activeSquares.length - 1].x) < 2 &&
        Math.abs(letter.y - activeSquares[activeSquares.length - 1].y) < 2)) {
        setActiveSquares([...activeSquares, letter])
        setCurrentWord([...currentWord, letter.value])
        setIsActive(true);
        return true
      }
    } else {
      setActiveSquares([letter])
      setCurrentWord([letter.value])
      setIsActive(true)
      return true;
    }
  }



  return (
    <div>
      <CSSTransition in={inProp} timeout={2000} classNames="fade" unmountOnExit>
      <div className="board">
        <RandomLetterRow handleClick={handleClick} row={0} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
        <RandomLetterRow handleClick={handleClick} row={1} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
        <RandomLetterRow handleClick={handleClick} row={2} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
        <RandomLetterRow handleClick={handleClick} row={3} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
        <RandomLetterRow handleClick={handleClick} row={4} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
        <RandomLetterRow handleClick={handleClick} row={5} isBoardActive={isBoardActive}
          setIsBoardActive={setIsBoardActive} />
      </div>
      </CSSTransition>
    </div>
  )
}
