import React, { useState, useEffect } from 'react';


export default function Timer(props) {
  const [seconds, setSeconds] = useState(10)
  const [minutes, setMinutes] = useState(0)
  // const [isTimerActive, setIsTimerActive] = useState(false);
  const { isTimerActive, setIsTimerActive, setShow } = props;
 
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
            setShow('block')
          } else {
            setMinutes(minutes => minutes - 1)
            setSeconds(59)
          }
        }
      }, 1000)
    } else if (!isTimerActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  
  }, [isTimerActive, seconds])

  // const runTimer = () => {
  //   const newTimer = setInterval(() => {
  //     console.log(seconds)
  //     console.log(minutes)
  //     if (seconds > 0) {
  //       setSeconds(seconds => seconds - 1)
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         clearInterval(newTimer);
  //       } else {
  //         setMinutes(minutes => minutes - 1)
  //         setSeconds(59)
  //       }
  //     }
  //   }, 1000);
  // }

  
  return (
    <div className="timer">
      <h5> Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h5>
    </div>
  )
}
