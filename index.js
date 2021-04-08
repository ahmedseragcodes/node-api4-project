//SANITY TEST
console.log("WEB 40 RULES");

//IMPORTS
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

//INSTANCE OF THE SERVER
const server = express();

//GLOBAL MIDDLEWARE

server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")))

if (process.env.NODE_ENV === "development"){
    server.use(cors());
}

//our API comes earlier in the pipeline
server.get("/api/hello", (req, res)=>{
    res.json({message: "hello"});
})

//catch-all sends back index.html
server.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
})


const PORT = process.env.PORT || 1234

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})