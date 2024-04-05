import React, { useState } from "react";
import "./popup.css";

function Popup(props) {
  const [isOpen, setIsOpen] = useState(true);

  const popupClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen ?  (
        <div className="popup">
          <div className="offers">
            <h4>Limited time only</h4>
            <h1>🔥Hurry up before ther offer ends🎉</h1>
            <h3>
              Get exclusive offers, new product offers and other good stuff.
            </h3>
            <button className="close-btn" onClick={popupClose}>X</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
