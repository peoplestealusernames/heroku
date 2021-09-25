const express = require("express");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    res.json("Hello");
});

app.get("/hello", (req, res)=>{
    res.json("World!");
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
});
