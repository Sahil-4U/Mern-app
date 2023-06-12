// first import express package
const express = require("express");
const mongoose = require("mongoose");
const clc = require("cli-color");
const dotenv = require('dotenv').config();



const app = express();

// mongodb connection

mongoose.connect(process.env.URI)
    .then(() => {
        console.log(clc.yellow('mongodb is connected'))

        // here we set our port to listen
        app.listen(process.env.PORT || 8000, () => {
            console.log(clc.yellow("server is started at"));
            console.log(clc.cyan.underline(`http://localhost:${process.env.PORT}/`));
        });

    })
    .catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    return res.send('our first api');
});

