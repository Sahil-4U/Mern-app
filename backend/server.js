// first import express package
const express = require("express");
const mongoose = require("mongoose");
const clc = require("cli-color");
const dotenv = require('dotenv').config();
const cors=require('cors');
// here i am importing User form usermodel.js
const User=require("./Models/usermodel");
const UserRoute=require("./routes/UserRoute");



const app = express();

// To access req.body
app.use(express.json());
// this middle ware is used for access cross-origin apis
app.use(cors());
// here i am adding router to my apis
app.use(UserRoute);
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

