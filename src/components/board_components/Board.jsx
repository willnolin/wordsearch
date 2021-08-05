import React from 'react'

import RandomLetterRow from './RandomLetterRow'

export default function Board(props) {

  const { currentWord, setCurrentWord, activeSquares, setActiveSquares, isBoardActive,
  setIsBoardActive} = props;

  
  const handleClick = (letter, setIsActive) => {
    // setIsBoardActive(true);

    if (currentWord.length) {
      if (activeSquares.find((obj, index) => (
        obj.x === letter.x && obj.y === letter.y
      ))) {
        if (activeSquares[activeSquares.length - 1].x === letter.x && activeSquares[activeSquares.length - 1].y === letter.y) {
          activeSquares.splice(activeSquares.length - 1, 1)
          setActiveSquares([...activeSquares])
          currentWord.splice(currentWord.length - 1, 1);
          setCurrentWord([...currentWord])
          setIsActive(false);
          return true;  // Change
        } else {
          return false;  // Change
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
      // setIsBoardActive(true);
      setActiveSquares([letter])
      setCurrentWord([letter.value])
      setIsActive(true)
      return true;
    }
  }



  return (
    <div>
      <div className="board">
        <RandomLetterRow handleClick={handleClick} row={0} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={1} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={2} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={3} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={4} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={5} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={6} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={7} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
        <RandomLetterRow handleClick={handleClick} row={8} isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive}/>
      </div>
    </div>
  )
}
