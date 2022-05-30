import express from "express";
import { curUserName } from "../controllers/auth.js";
import model from '../model/rideInfo.js'

export const bookRide = async (req,res) => {
    if(curUserName==null)
        res.json({msg:"Please Log in to book your ride."})
    else{
        try{
            const {pickup, type} = req.body
            const username=curUserName;
            const ride=new model({ pickup,type,username});
            await ride.save()
            res.json(ride)
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }
}

export const cancelRide = async(req,res) => {
    try{
        const out=await model.findByIdAndRemove(req.body._id)
        res.status(200).json({ success: out })
    }catch(err){
        res.status(404).json({message: err.message})

    }
}

export const rides = async (req,res) => {
    if(curUserName==null)
        res.json({msg:"Please Log in to check booked rides."})
    else{
        const rides= await model.find({username:curUserName});
        res.json(rides)
    }
}