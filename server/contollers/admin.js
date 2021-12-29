import mongoose from "mongoose"
import bcrypt from "bcrypt"
import User from "../models/User.js"
export const createUser = (async(req, res)=>{
    console.log(req.body)
    const {email, password, fullname} = req.body
    try {
        let hashedPassword = await bcrypt.hash(password, 8)
       let user= User.create({email, password: hashedPassword, fullname})
    } catch (error) {
        
    }
})
