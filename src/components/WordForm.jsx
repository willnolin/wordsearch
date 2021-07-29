import React from 'react'

export default function WordForm(props) {
  const { currentWord } = props;
  const currentWordStr = currentWord.join(' ')
  return (
    <div className="word-form">
      <form >
        <input type="text" id="word" value={currentWordStr} readOnly />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
