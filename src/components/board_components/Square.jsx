import React, { useEffect, useState } from 'react'

export default function Square(props) {
  // const { letter, index, row, handleClick } = props;
  const { letter, index, handleClick, isBoardActive, setIsBoardActive } = props;
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('white')

  //when global state isBoardActive changes, update all the colors based on theier bg property
  // deactivate 
  useEffect(() => {
    const changeColor = () => {
      setColor(letter.bg);
      setIsActive(false);
    }
    changeColor();
  }, [isBoardActive])

  // if the square is a valid choice, change background color
  const handleSquare = () => {
    // setIsClicked(true);
    const change = handleClick(letter, setIsActive)
    if (isActive) {
      if (change) {
        letter.bg = 'white'
        setColor(letter.bg)

      }
      else {
        letter.bg = 'red'
        setColor(letter.bg)

      }
    }
    else {
      if (change) {
        letter.bg = 'red'
        setColor(letter.bg)

      }
      else {
        letter.bg = 'white'
        setColor('white')

      }
    }
  }

  return (
    <div className="square" key={index}
      style={{ backgroundColor: color }}
      onClick={() => handleSquare()}>
      <p className="letter">{`${letter.value}`}</p>
    </div>
  )
}
