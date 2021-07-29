import React, { useState } from 'react'

export default function Square(props) {
  // const { letter, index, row, handleClick } = props;
  const { letter, index, handleClick } = props;
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('white')

  // if the square is a valid choice, change background color
  const handleSquare = () => {
    // setIsClicked(true);

    const change = handleClick(letter, setIsActive)
    if (isActive) {
      if (change) {
        setColor('white')
      }
      else {
        setColor('red')
      }
    }
    else {
      if (change) {
        setColor('red')
      }
      else {
        setColor('white')
      }
    }
  }

  return (
    <div className="square" key={index}
      style={{ backgroundColor: color }}
      onClick={() => handleSquare()}>
      <p className="letter">{`${letter.x}, ${letter.y}`}</p>
    </div>
  )
}
