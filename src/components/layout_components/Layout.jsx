import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Timer from '../display_components/Timer'

export default function Layout(props) {
  return (
    <div className="layout-parent">
      <Header />
      <Timer />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
