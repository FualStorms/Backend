const {User} = require("../models/UserModel");
const{Station} =require("../models/StationModel");

//user registration

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

//user login

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

//station registration

exports.registerStation = (req,res) => {
    const station = new Station(req.body);

    station.save((err,doc) =>{
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

//station login

exports.loginStation = (req,res) => {
    Station.findOne({email:req.body.email},(err,station) =>{
        if(!station){
            return res.status(404).json({
                sucess:false,
                message:"User email not found!"
            });
        }

        station.comparePassword(req.body.password,(err,isMatch) =>{
            if(!isMatch){
                return res.status(400).json({
                    sucess:false,
                    message:"Password is incorrect!"
                });
            }

            station.generateToken((err,token)=>{
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
