import React, { useState } from 'react'
import './popup.css'

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const popupClose = () => {
    setIsOpen(false);
  }
  return (
    <div className='popup'>
      <div className='offers'>
        <h4>Limited time only</h4>
        <h1>🔥Hurry up before ther offer ends🎉</h1>
        <h3>Get exclusive offers, new product offers and other good stuff.</h3>
        <button onClick={popupClose}>X</button>
      </div>
            </div>
  )
}

export default Popup