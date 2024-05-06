import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function MyApp() {
  const [advice,setAdvice]=useState("");
  const fetchAdvice=()=>{
    axios.get('	https://api.adviceslip.com/advice').then((response)=>{
    setAdvice(response.data.slip.advice);
    
    }).catch((error)=>{
        console.log(error);
    })
  }
  fetchAdvice();
  console.log(advice);
  return (
    <div className='app'>
        <div className="card">
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={fetchAdvice}><span>Give me Advice</span></button>
        </div>
    </div>
  )
}

export default MyApp
