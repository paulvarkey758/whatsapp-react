import React from 'react'
import './ChatCard.css'
import '../../App.css'

function ChatCard(props) {
  return (
    <div>
      <div className="chat-card">
        <div className="dp-outer">
          <div className="dp-container">
              <img src="./whatsapp-react/images/avatar.png" alt="" className="dp" />
          </div>
        </div>
        <div className="details-container">
            <div className="name-box">
                <h3>{props.name}</h3>
            </div>
            <div className="message">
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatCard
