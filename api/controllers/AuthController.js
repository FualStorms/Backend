const {User} = require("../models/UserModel");

exports.registerUser = (req,res) => {
    const user = new User(req.body);

    user.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                sucess:false,
                message:"Registration faild,check the validation errors",
                data:err
            
            });
        }else{
            return res.status(200).json({
            sucess:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
} 

exports.loginUser = (req,res) => {
    User.findOne({email:req.body.email},(err,user) =>{
        if(!user){
            return res.status(404).json({
                sucess:false,
                message:"User email not found!"
            });
        }

        user.comparePassword(req.body.password,(err,isMatch) =>{
            if(!isMatch){
                return res.status(400).json({
                    sucess:false,
                    message:"Password is incorrect!"
                });
            }

            user.generateToken((err,token)=>{
                if (err){
                    return res.status(400).json({
                        sucess:false,
                        message:"unable to generate jwt key",
                        data:err
                    });
                }

                return res.status(200).json({
                    sucess:true,
                    meassage:"succcessfully Logged in!",
                    data:{
                        "token":token
                    }
                  });
            });
        });
    });
} 

exports.getUserDetails =async (_req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }

}     
