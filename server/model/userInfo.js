import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    phone: Number,
    regno: String,   //Registeration number
    history: [String],  // Ride History  
})

var userInfo = mongoose.model('userInfo',userSchema);

export default userInfo;