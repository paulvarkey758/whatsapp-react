import React from 'react'
import '../../App.css'
import './Header.css'
import HeaderButton from '../HeaderButton/HeaderButton'
import MenuButton from '../MenuButton/MenuButton'
import {useState} from 'react'

function Header(props) {
  const [state,setState]=useState("chat");
  console.log(state);
  
  
  return (
    <div className='header'>
      <div className="header-upper">
        <h3 className="logo-text">WhatsApp</h3>
        <div className="header-buttons-box">
            <HeaderButton name="search.png"/>
            <HeaderButton name="more.png"/>
        </div>
      </div>
      <div className="header-bottom">
          <MenuButton name="chat" state={state} setState={setState} setMenu={props.setMenu} />
          <MenuButton name="status" state={state} setState={setState} setMenu={props.setMenu}    />
          <MenuButton name="calls" state={state} setState={setState} setMenu={props.setMenu} />
      </div>
    </div>
  )
}

export default Header
