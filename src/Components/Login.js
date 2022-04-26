import React, { useState } from 'react'
import LoginForm from './LoginForm'

import '../Css/Login.css';
import LoginExitoso from './LoginExitoso';

export default function Login() {
  
  const[data,setData]=useState({});
  const [logeo,setLogeo]=useState("false");

  const isLogged=()=>{
    setLogeo("true");
  }

  return (
    <> 
      {
        logeo==="false" ? <LoginForm data={data} setData={setData} isLogged={isLogged}/> : <LoginExitoso data={data}/>
      } 
          
    </>
  )
}
