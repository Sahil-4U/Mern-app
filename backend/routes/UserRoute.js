
const express = require("express");
// here i am importing User form usermodel.js
const User = require("../Models/usermodel");
// here i am importing router from express
const router = express.Router();




// create a user
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age
        })

        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
})


// get all the users
router.get("/", async (req, res) => {
    try {
        const showData = await User.find();
        res.status(200).json(showData);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

// get a single user with the help of id

router.get("/:id", async (req, res) => {

    // Note:-if we get id from url we use req.params else if we get data from input field we use req.body;

    const { id } = req.params;

    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

// delete a single user
router.delete("/:id", async (req, res) => {
    // Note:-if we get id from url we use req.params else if we get data from input field we use req.body;

    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(deleteUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});

// Update User with the help of Id
router.patch("/:id",async (req,res)=>{
     // Note:-if we get id from url we use req.params else if we get data from input field we use req.body;

     const { id } = req.params;
     const {name,email,age}=req.body;

     try {
         const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
         res.status(200).json(updateUser);
     } catch (error) {
         console.log(error);
         res.status(500).json({ message: error.message });
     }
})

module.exports = router;