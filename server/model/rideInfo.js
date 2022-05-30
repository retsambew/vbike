import mongoose from "mongoose";

var val = Math.floor(1000 + Math.random() * 9000);

const rideSchema = mongoose.Schema({
    pickup: String,
    type: String,
    username: String,
    otp: {
        type: Number,
        default: val
    },
    time: String,
    date: {
        type: Date,
        default: Date.now
    }
})

var rideInfo = mongoose.model('rideInfo',rideSchema);

export default rideInfo;