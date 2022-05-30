import model from '../model/userInfo.js'

export const login = async (req,res) => {
    try{
        const user= await model.find({username:req.body.username,password:req.body.password});
        
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const logout = (req,res) => {

}

export const signup = async (req,res) => {
    const { username, password, phone, regno}=req.body;

    const user=new model({ username, password, phone, regno});
    try{
        await user.save();

        res.status(201).json(user);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}