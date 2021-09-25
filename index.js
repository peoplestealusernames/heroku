const express = require("express");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) =>
{
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    res.json(req.headers);
});

app.listen(PORT, () =>
{
    console.log("Listening on port " + PORT)
});
