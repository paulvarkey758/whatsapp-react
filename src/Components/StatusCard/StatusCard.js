import React from 'react'
import '../../App.css'
import './StatusCard.css'

function StatusCard(props) {
  return (
    <div>
      <div className="status-card">
        <div className="status-outer">
            <div className="status-container">
                <img src="./whatsapp-react/images/avatar.png" alt="" className="status" />
            </div>
        </div>
        <div className="status-details">
            <div className="details-wrapper">
                <h4>{props.name}</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
