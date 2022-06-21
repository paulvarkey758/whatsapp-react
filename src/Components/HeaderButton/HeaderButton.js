import React from 'react'
import '../../App.css'
import './HeaderButton.css'

function HeaderButton(props) {
  return (
    <div>
      <div className="h-button">
        <img src={`/images/${props.name}`} alt="" className="button-image" />
      </div>
    </div>
  )
}

export default HeaderButton
