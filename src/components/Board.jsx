import React, { useState } from 'react'

import RandomLetterRow from './RandomLetterRow'

export default function Board(props) {

  const { currentWord, setCurrentWord } = props;
  const [activeSquares, setActiveSquares] = useState([]);
  // const [indices, setIndices] = useState([]);  // x value
  // const [lettersRows, setLettersRows] = useState([]);  // y value

  const handleClick = (letter, setIsActive) => {
    console.log(`Value: ${letter.value}
    X: ${letter.x}
    Y: ${letter.y}`)

    //check if the square is already included in the word
    //if it's the last letter, remove it from teh word, remove coordinates and deactivate
    //if it is not, no change
    // else if the square isn't in the word
    // if it's adjacent, add it to the word, add coordinates and activate the square
    // if it isn;t adjacent, no change 
    //if there are no letters
    //add the first letter, add coordinates, activate the square
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
    console.log(activeSquares)
    // if are any letters
    // if (currentWord.length) {
    //   const lastRow = lettersRows.length - 1
    //   const lastIndex = indices.length - 1
    //   if (lettersRows.includes(row) && indices.includes(index)) {
    //     if (lettersRows[lastRow] === row && indices[lastIndex] === index) {
    //       currentWord.splice(currentWord.length - 1, 1);
    //       indices.splice(lastIndex, 1);
    //       lettersRows.splice(lastRow, 1);
    //       setCurrentWord([...currentWord])
    //       setIndices([...indices])
    //       setLettersRows([...lettersRows])
    //       setIsActive(false);
    //       return true;  // Change
    //     } else {
    //       return false;  // Change
    //     }
    //   } else {
    //     if ((Math.abs(row - lettersRows[lastRow]) < 2 &&
    //       Math.abs(index - indices[lastIndex]) < 2)) {  //adjacent?
    //       setCurrentWord([...currentWord, letter])
    //       setIndices([...indices, index])
    //       setLettersRows([...lettersRows, row])
    //       setIsActive(true);
    //       return true; //Change
    //     } else {
    //       return false; //change
    //     }
    //   }
    // } else {
    //   setCurrentWord([letter])
    //   setIndices([index])
    //   setLettersRows([row])
    //   setIsActive(true)
    //   return true
    // }
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
