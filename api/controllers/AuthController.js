const {User} = require("../models/UserModel");
const{Station} =require("../models/StationModel");
const jwt = require('jsonwebtoken');

//user registration

exports.registerUser =async (req,res) => {
    try{
    const user =await User.create(req.body);
    const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
    res.status(200).json({
        sucess:true,
        meassage:"successfully registered!",
        data:{
            "token":token
        }
    })

    // user.save((err,doc) =>{
    //     if(err){
    //         return res.status(422).json({
    //             sucess:false,
    //             message:"Registration faild,check the validation errors",
    //             data:err
            
    //         });
    //     }else{
    //         return res.status(200).json({
    //         sucess:true,
    //         message:"Successfully Registered"
            
    //         });
}catch (error){
    res.status(400).json({error:error.message})
}      
        }


//user login

exports.loginUser =async (req,res) => {
    try{
        const {username,password} =req.body
        const user = await User.login(username,password)
        const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
        res.status(200).json({
            success:true,
            meassage:"sucessfully logged in!",
            data:{
                "token":token
            }
        })
    }
    catch (error){
        res.status(400).json({error:error.message})
    } 
} 

//station registration

exports.registerStation =async  (req,res) => {

    try{
        let user = await Station.create(req.body)

        const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
        res.status(200).json({
            success:true,
            meassage:"successfuly registered",
            data:{
                "token" :token
            }
        })
    }catch (error){
        res.status(400).json({error:error.message})
    }


} 

//station login

exports.loginStation = async (req,res) => {

    try{
        const{email,password} = req.body

        const user = await Station.login(email,password)

        const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
        res.status(200).json({
            success:true,
            message:"sucessfully logged in",
            data:{
                "token":token
            }
        })

    }catch(error){
        res.status(400).json({error:error.message})
    }}
    