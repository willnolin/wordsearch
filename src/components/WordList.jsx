import React from 'react'

export default function WordList(props) {
  const { wordList, setWordList } = props;
  return (
    <div>
      {wordList.map(word => {
        return <p>{word}</p>
      })}
    </div>
  )
}
