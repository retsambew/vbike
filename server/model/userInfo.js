import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type:String,
        unique:true
    },
    password: String,
    phone: Number,
    regno: String,   //Registeration number
})

var userInfo = mongoose.model('userInfo',userSchema);

export default userInfo;