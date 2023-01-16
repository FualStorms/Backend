var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

var schema = mongoose.Schema;

var FuelStatusModelSchema = new schema({

    stationid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'STATION',
        required: [true, 'Station id field is required!'],
       
      },

    arrivalDate:{
        type:String,
        required:[true,'date is required'],
    },
     
    arrivalTime:{
        type:String,
        required:[true,'time is required']
    },




Petrol:{
    type:String,
    required: [true, 'location field is required!'],
   
    
},
Desel:{
    type:String,
    required: [true, 'location field is required!'],
},
role:{
    type:String,
    enum:UserRole,
    default:UserRole.STATION
   
},


create_date:{
    type:Date,
    default:Date.now
}

});




const FuelStatus =mongoose.model('FuelStatus',FuelStatusModelSchema);
module.exports = {FuelStatus}