// first import express package
const express = require("express");
const mongoose = require("mongoose");
const clc = require("cli-color");
const dotenv = require('dotenv').config();
// here i am importing User form usermodel.js
const User=require("./Models/usermodel");




const app = express();
// To access req.body
app.use(express.json());
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



// our first api to handle post request when user singup
app.post("/",async (req,res)=>{
    const {name,email,age}=req.body;

    try {
        const userAdded=await User.create({
            name:name,
            email:email,
            age:age
        })

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message});
    }
})







// our first get request
app.get("/", (req, res) => {
    return res.send('our first api');
});

