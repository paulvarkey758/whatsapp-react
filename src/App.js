import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ChatCard from './Components/ChatCard/ChatCard';
import {useState} from 'react'
import StatusCard from './Components/StatusCard/StatusCard';
import CallCards from './Components/CallCards/CallCards';

function App() {
  let names=["abc","def","ghi","jkl","mno","pqr","stu","vwx","yza"]
  let status=[{'name':"abcd"},{'name':"efgh"},{'name':"ijkl"}]
  var [menu,setMenu]=useState("chat");
  console.log(status);
  return (
    <div className="App">
      <Header setMenu={setMenu} />
      { menu==="chat" && 
      <div className="chat-base">
        {names.map((obj,index)=>{
          return(
            <ChatCard name={obj} />
          )
        })}
  
      </div>
      }
      { menu==="status" && 
      <div className="chat-base">
        {status.map((st,index)=>{
          return(
            <StatusCard name={st.name} />
          )
        })}
  
      </div>
      }
      { menu==="calls" && 
      <div className="chat-base">
        {names.map((cal,index)=>{
          return(
            <CallCards name={cal} />
          )
        })}
  
      </div>
      }
      
    </div>
  );
}

export default App;
