import React, { useState, useEffect } from 'react';


export default function Timer(props) {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(3)
  const { isTimerActive, setIsTimerActive, setShow, handleClear, refreshPage, setInProp } = props;

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
    setMinutes(3);
    setSeconds(0);
    setIsTimerActive(false);
  }

  return (
    <div className="section is-small timer">
      <h5 className="content mt-5 has-text-black time-remaining"> Time Remaining:&nbsp; &nbsp;
        <span className="clock">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </h5>
      {isTimerActive ?
        <button className="button is-outlined is-small timer-btn"
          onClick={() => {
            if (window.confirm("Are you sure you want to quit this game?")) {
              handleClear();
              resetTimer();
              setInProp(false);
              refreshPage();
            }
          }}> New Game</button>
        :
        <button className="button is-outlined is-black is-small timer-btn"
          onClick={() => {
           
              handleClear();
              setIsTimerActive(true)
        
          }}>Start Timer</button>
      }
    </div>
  )
}
