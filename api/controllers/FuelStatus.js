const {FuelStatus}= require("../models/FuelStatus.js")

//CREATE

exports.createfuelstatus =  (req,res) => {
    const fuelstatuscreate = new FuelStatus(req.body)

    fuelstatuscreate.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                sucess:false,
                message:"Registration faild,check the validation errors",
                data:err
            
            });
        }else{
            return res.status(200).json({
            success:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
}

//UPDATE
exports.fuelstatusUpdated = async (req,res) => {

    try {
        const updatedfuelstatus = await FuelStatus.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res.status(200).json(updatedfuelstatus);
    } catch (error) {
        res.status(500).json(error);
    }
}