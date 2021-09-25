const express = require("express");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) =>
{
    res.json(req.connection.remoteAddress);
});

app.listen(PORT, () =>
{
    console.log("Listening on port " + PORT)
});
