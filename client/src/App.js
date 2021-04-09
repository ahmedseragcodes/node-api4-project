import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";



function App() {
const [message, setMessage]=useState("Hello Web 40");



//LOGIC FOR POPULATING STATE WITH API DATA FROM ENDPOINT CREATED ON BACKEND

//METHOD 1 - SUCCESSFUL 

useEffect(()=>{
  fetch("http://localhost:5000/api/hello")
  .then((res)=>{
    return res.json();
  })
  .then((resBody)=>{
    setMessage(resBody.message);
  })
  .catch((err)=>{
    console.log("UNABLE TO GET MESSAGE", err);
  })
},[])

//METHOD 2 - SUCCESSFUL 

// function getURL(path){
//   if (process.env.NODE_ENV==="development"){
//     return "http://localhost:5000" + path
//   } else {
//     return path
//   }
// }

// useEffect(()=>{
//   fetch(getURL("/api/hello"))
//   .then(res=> res.json())
//   .then(resBody=>setMessage(resBody.message))
//   .catch(err=>{
//     console.log("UNABLE TO GET MESSAGE", err);
//   })
// },[])

//METHOD 3 - SUCCESSFUL 

// useEffect(()=>{
//   axios.get("http://localhost:5000/api/hello")
//   .then((res)=>{
//     console.log("THIS IS WHAT THE API DATA LOOKS LIKE", res);
//     setMessage(res.data.message);
//   })
//   .catch((err)=>{
//     console.log("FAILED TO GET API DATA", err);
//   })
// },[])


//END LOGIC FOR POPULATING STATE WITH BACKEND API DATA


//BEGIN FUNCTION COMPONENT RETURN 

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
