var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

const SALT = 10;

var schema = mongoose.Schema;
var StationSchema = new schema({
    username:{
        type:String,
        required:[true,'Username field is required!'],
       
    },
    
email:{
    type:String,
    required:[true,'Email field is required!'],
    unique:true
},

password:{
    type:String,
    required:[true,'password field is required!'],
    minlength:5
},

location: {
    type: String,
    required: [true, 'location field is required!'],
    minlength: 5
},


create_date:{
    type:Date,
    default:Date.now
}

});

//saving user data

StationSchema.pre('save',function(next){
    var station = this;
    if(station.isModified('password')){
        //checking if password field is available and modified
        bcrypt.genSalt(SALT,function(err,salt){
            if(err) return next(err)

            bcrypt.hash(station.password,salt,function(err,hash){
                if (err) return next(err)
                station.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

//For comparing the users entered password with database during login
StationSchema.methods.comparePassword = function (candidatePassword,callBack){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return callBack(err);
        callBack(null,isMatch);
    });

    };


//For generating token when loggedin
StationSchema.methods.generateToken = function(callBack){
    var station =this;
    var token = jwt.sign(station._id.toHexString(),process.env.SECRETE);
    
    callBack(null,token);
};

//validating token for auth routes middleware
StationSchema.statics.findByToken = function(token,callBack){
    jwt.verify(token, process.env.SECRETE,function(err,decode){
        //this decode must give user_id if token is valid .ie decode = user_id
        Station.findById(decode,function(err,station){
            if(err){
                
                return res.status(404).json({
                    sucess:false,
                    message:"Invalid Station ID!",
                    data:err
                  
                });
            }

            callBack(null,station);
        });
    });
};



const Station =mongoose.model('Station',StationSchema);
module.exports = {Station}