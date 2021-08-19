import React from 'react'


export default function Info(props) {
  const { score } = props;

  return (
    <div className="info-container">
      <p className="score">{`Score: ${score}` }</p>
    </div>
  )
}
