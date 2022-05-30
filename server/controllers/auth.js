import model from '../model/userInfo.js'

export var currentUser=null;
export var curUserName=null;

export const login = async (req,res) => {
    try{
        const user= await model.find({username:req.body.username,password:req.body.password});
        currentUser=user[0];
        curUserName=user[0]["username"];        
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const logout = (req,res) => {
    currentUser=null;
    curUserName=null;
    res.status(200).json({msg:'Logged out successfully'})
}

export const signup = async (req,res) => {
    const { username, password, phone, regno}=req.body;

    const user=new model({ username, password, phone, regno});
    try{
        await user.save();
        currentUser=user;
        curUserName=user["username"];
 
        res.status(201).json(user);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}