import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'
import generateToken from '../utils/generateToken.js';

// @desc auth user & GET Toen
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({email: email});
    console.log(user);

    // 
    if(user && (await user.matchPassword(password))) {
        generateToken(res,user._id)
        //So, if we already have a registered user, and they try to login, this is the response that is sent back. An this is the same as the data we have created in users.js. We will store users each quiz info here in the respective language quiz.
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            javascript: user.javascript,
            python: user.python,
            react: user.react
        });
    }else{
        res.status(401); //unauthorized
        throw new Error("Invalid Email or Password");
    }
})

// @desc register user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400) //client error
        throw new Error('User already exists!')
    }

    //if the user doesn't exist, we create it:
    //Now we have to pass the email and password and name because they are required feilds as described in the user model.
    const user = await User.create({
        name,
        email,
        password
    })

    console.log(user);

    if(user){
        generateToken(res,user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            javascript: user.javascript,
            python: user.python,
            react: user.react
        });
    }else{
        res.status(401); //unauthorized
        throw new Error("Invalid Email or Password");
    }
})

// @desc logout user & clear cookie
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async(req,res) => {
    res.cookie('jwt','',{
        httpOnly: true,
        expiresIn: new Date(0)
    })

    res.status(200).json({message: 'Logged Out Successfully!'})
})

// @desc GET user profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            javascript: user.javascript,
            python: user.python,
            react: user.react
        });
    } else{
        res.status(404)
        throw new Error("User not found!")
    }
})

// @desc update user profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user)
    {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.javascript = req.body.javascript || user.javascript
        user.react = req.body.react || user.react
        user.python = req.body.python || user.python

        if(req.body.password)
        {
            user.password = req.body.password
        }

        const updatedUser = await user.save()
        
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                javascript: updatedUser.javascript,
                python: updatedUser.python,
                react: updatedUser.react
            })   
    }
    else{
        res.status(404)
        throw new Error("User not found!")
    }
})

// @desc Get users
// @route GET /api/users/
// @access private/admin
const getUsers = asyncHandler(async(req,res) => {
    res.send("get users")
})

// @desc Get users by id
// @route GET /api/users/:id
// @access private/admin
const getUserById = asyncHandler(async(req,res) => {
    res.send("get user by Id")
})

// @desc delete users
// @route DELETE /api/users/:id 
// @access private/admin
const deleteUser = asyncHandler(async(req,res) => {
    res.send("delete user")
})

// @desc update user
// @route PUT /api/users/:id 
// @access private/admin
const updateUser = asyncHandler(async(req,res) => {
    res.send("update user")
})

export {loginUser, registerUser, logoutUser, getUserProfile, getUserById, deleteUser, updateUser, getUsers, updateUserProfile}