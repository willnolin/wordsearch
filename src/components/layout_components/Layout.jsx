import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Timer from '../display_components/Timer'

export default function Layout(props) {
  const [show, setShow] = useState('none')
  const { isTimerActive, setIsTimerActive } = props;
  return (
    <div className="layout-parent">
      <Header />
      <Timer isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} setShow={setShow}/>
      <div className="modal" style={{ display: show }}>
        <div className="message" >
        <span className="close" onClick={() => {
              setShow('none')
            }}>{`close (x)`}</span>
        <p>Congrats on completing the game!</p>
        </div>
        </div>
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
