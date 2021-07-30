import React from 'react';
import Countdown from 'react-countdown';

export default function Timer() {
  
  const Completionist = () => <span>Times up!</span>;

  // Renderer callback with condition
const renderer = ({minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{minutes}:{seconds}</span>;
  }
};

  
  return (
    <div className="timer">
      <Countdown
        date={Date.now() + (60000 * 2)}
        zeroPadTime={2}
        renderer = {renderer}
      >
        <Completionist />
      </Countdown>
    </div>
  )
}
