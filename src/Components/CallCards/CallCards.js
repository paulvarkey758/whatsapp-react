import React from 'react'
import '../../App.css'
import './CallCards.css'

function CallCards(props) {
  return (
    <div>
      <div className="call-cards">
        <div className="call-outer">
            <div className="call-container">
                <img src="./images/avatar.png" alt="" className="call" />
            </div>
        </div>
        <div className="call-name">
            <h4>{props.name}</h4>
        </div>
        <div className="call-i-container">
            <div className="i-wrapper">
                <img src="./images/call.png" alt="" className="icon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CallCards
