const express = require("express");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) =>
{
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    res.json({
        head: req.headers, RA: req.connection.remoteAddress,
        RP: req.connection.remotePort,
        LA: req.connection.localAddress,
        LP: req.connection.localPort
    });
});

app.listen(PORT, () =>
{
    console.log("Listening on port " + PORT)
});
