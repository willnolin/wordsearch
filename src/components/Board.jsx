import React, { useState } from 'react'

import RandomLetterRow from './RandomLetterRow'

export default function Board(props) {

  const { currentWord, setCurrentWord, activeSquares, setActiveSquares } = props;

  const handleClick = (letter, setIsActive) => {

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
      setActiveSquares([letter])
      setCurrentWord([letter.value])
      setIsActive(true)
      return true;
    }
  }



  return (
    <div>
      <div className="board">
        <RandomLetterRow handleClick={handleClick} row={0} />
        <RandomLetterRow handleClick={handleClick} row={1} />
        <RandomLetterRow handleClick={handleClick} row={2} />
        <RandomLetterRow handleClick={handleClick} row={3} />
        <RandomLetterRow handleClick={handleClick} row={4} />
        <RandomLetterRow handleClick={handleClick} row={5} />
        <RandomLetterRow handleClick={handleClick} row={6} />
        <RandomLetterRow handleClick={handleClick} row={7} />
        <RandomLetterRow handleClick={handleClick} row={8} />
      </div>
    </div>
  )
}
