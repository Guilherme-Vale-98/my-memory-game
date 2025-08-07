import React from 'react'
import './Menu.styles.css'
const Menu = ({setIsMenu}) => {


return (
<div className="menu-card">
      <h2>Menu</h2>
      <div className="menu-options">
        <div className="menu-option" onClick={() => setIsMenu(false)}>
          Play
        </div>
        <div className="menu-option disabled" >
          How to play
        </div>
      </div>
    </div>
  )
}

export default Menu