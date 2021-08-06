import React from 'react'
import gh from "../../images/github_thumb.png"
import linked from "../../images/linkedin-icon.png"

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/willnolin"><img src={gh} alt="github" className="icons" /></a>
      <p className="willnolin">Will Nolin Metivier</p>
      <a href="https://www.linkedin.com/in/willnolinmetivier/"><img src={linked} alt="linkedin" className="icons" /></a>
    </div>
  )
}
