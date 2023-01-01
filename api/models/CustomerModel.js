var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");


var schema = mongoose.Schema;

var CamperModelShema = new Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User field is required!'],
        
    },
    
Address:{
    type:String,
    required:[true,'Address field is required!'],
    unique:true
},

create_date:{
    type:Date,
    default:Date.now
}

});

const Camper =mongoose.model('Camper',CamperModelSchema);
module.exports = {Camper}