import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";



function App() {
const [message, setMessage]=useState("Hello Web 40");


// useEffect(()=>{
//   fetch("http://localhost:5000/api/hello")
//   .then(res=>
//     res.json())
//   .then(resBody=>
//     setMessage(resBody.message))
//   .catch(err=>{
//     console.log("UNABLE TO GET MESSAGE", err);
//   })
// },[])

//OR WRITE THAT USE EFFECT LIKE THIS

function getURL(path){
  if (process.env.NODE_ENV==="development"){
    return "http://localhost:5000" + path
  } else {
    return path
  }
}

useEffect(()=>{
  fetch(getURL("/api/hello"))
  .then(res=>
    res.json())
  .then(resBody=>
    setMessage(resBody.message))
  .catch(err=>{
    console.log("UNABLE TO GET MESSAGE", err);
  })
},[])

//END OR 

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
