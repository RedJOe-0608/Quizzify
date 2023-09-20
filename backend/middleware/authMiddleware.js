import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

//Protect routes
//with any middleware function we have access to the req and res objects
const protect = asyncHandler(async(req,res,next)=> {
    let token;

    //read the jwt from the cookie. we are able to access this cookie from req object because of the package cookie-parser
    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //attaching the logged in user to the req object
            req.user = await User.findById(decoded.userId).select("-password") // without the password
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
        throw new Error("Not authorized, token failed!")
        }

    }else{
        res.status(401)
        throw new Error("Not authorized, no token!")
    }
})

//Admin middleware function
const admin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        res.status(401)
        throw new Error("Not authorized as admin")
    }
}
export {protect,admin}