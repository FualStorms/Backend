const {UserQueue} = require('../models/ServiceModel.js');
//const {User} = require('../models/UserModel');

exports.UpdateQueue = async (req, res) => {
    try {
        const waitingTime = await UserQueue.Math.abs(out_queue_time - in_queue_time);
        const hours = Math.ceil(waitingTime / (1000*60*60));
        return res.status(200).json({
            success:true,
            message:"",
            data:{
                "waitingtime": waitingTime,
                "inhours": hours
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
};