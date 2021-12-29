import mongoose from "mongoose"
const userSChema = mongoose.Schema({
    fullname: String,
    email:String,
    password:String,
     status:{
         type:Boolean,
         default:false,
         required:true
     },
    createdAt:{
        type: Date,
        required: true,
        default: new Date()
    }
   
})
const User = mongoose.model('User', userSChema)
export default User;