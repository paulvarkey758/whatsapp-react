import React from 'react'
import '../../App.css'
import './MenuButton.css'

function MenuButton(props) {
  var name=props.name;
  const handleMenu=()=>{
    props.setState(name);
    props.setMenu(name);
  }
  return (
    <div>
      <div className="menu-button"  onClick={()=>handleMenu()}>
        <h3 className='menu-text'>{name}</h3>
        { props.state===name ? <div className='menu-button-bar'></div> :""}
      </div>
    </div>
  )
}

export default MenuButton
