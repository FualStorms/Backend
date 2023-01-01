var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserROle = require("../enums/UserRole");


var schema = mongoose.Schema;

var CampsiteModelShema = new Schema({
    Campsite_id:{
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

const Campsite =mongoose.model('CampSite',CampSiteModelSchema);
module.exports = {Campsite}