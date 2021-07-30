import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div className="layout-parent">
      <Header />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
