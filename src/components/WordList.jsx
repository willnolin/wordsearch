import React from 'react'

export default function WordList(props) {
  const { wordList, setWordList } = props;
  return (
    <div className="display-words">
      {wordList.map(word => {
        return <p className="word">{word}</p>
      })}
    </div>
  )
}
