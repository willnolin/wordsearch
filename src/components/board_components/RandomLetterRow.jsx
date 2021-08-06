import React, { useState, useEffect } from 'react'
import Square from './Square';

export default function RandomLetterRow(props) {
  const [randomLetterRow, setRandomLetterRow] = useState([]);

  const { handleClick, row, isBoardActive,
    setIsBoardActive } = props;
  const rows = 9;

  // generates a random letter
  const generateRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVUXYZ'
    return letters[Math.floor(Math.random() * letters.length)]
  }

  //generate random letter row when component renders
  useEffect(() => {
    const generateLetterRow = (rowLength) => {
      const rowArray = [];
      let i = 0
      while (rowArray.length < rowLength) {
        rowArray.push({
          value: generateRandomLetter(),
          x: i,
          y: row,
          bg: 'white'
        })
        i += 1;
      }
      setRandomLetterRow(rowArray)
    }
    generateLetterRow(rows)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className="row">
        {randomLetterRow.map((letter, index) => (
          <Square
            letter={letter}
            index={index}
            handleClick={handleClick}
            isBoardActive={isBoardActive}
            setIsBoardActive={setIsBoardActive} />
        ))}
      </div>
    </div>
  )
}
