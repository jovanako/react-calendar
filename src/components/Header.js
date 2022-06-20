import React from "react";
import './Header.css'

function Header() {
  return (
    <div>
      <div id="monthDisplay"><h1>June 2022</h1></div>
      <div>
        <button id="backButton"></button>
        <button id="nextButton"></button>
      </div>
    </div>
  )
}

export default Header