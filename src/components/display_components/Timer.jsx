import React, { useState, useEffect } from 'react';


export default function Timer(props) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(5)
  const { isTimerActive, setIsTimerActive, setShow, handleClear, refreshPage } = props;

  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsTimerActive(false);
            setShow('block');
            handleClear();
          } else {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000)
    } else if (!isTimerActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [isTimerActive, seconds])

  const resetTimer = () => {
    setMinutes(5);
    setSeconds(0);
  }

  return (
    <div className="timer">
      <h5 className="time-remaining"> Time Remaining:&nbsp; &nbsp;  <span className="clock">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span></h5>
      {isTimerActive ?
        <button className="timer-btn"
          onClick={() => {
            handleClear();
            resetTimer();
            refreshPage();
          }}> New Game</button>
        :
        <button className="timer-btn"
          onClick={() => {
            handleClear();
            setIsTimerActive(true)
          }}>Start Timer</button>
      }
    </div>
  )
}
