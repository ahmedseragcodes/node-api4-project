//SANITY TEST
console.log("WEB 40 RULES");

//IMPORTS
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//INSTANCE OF THE SERVER
const server = express();

//GLOBAL MIDDLEWARE

if (process.env.NODE_ENV === "development"){
    server.use(express.json());
    server.use(cors());
}


server.use("*", (req, res)=>{
    res.send("<h1>Success</h1>")
})


const PORT = process.env.PORT || 1234

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})