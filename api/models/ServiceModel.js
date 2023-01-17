//const {User} = require('../models/UserModel')
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var UserQueueModelSchema = new schema({
    // in_queue:{
    //     type: Boolean,
    //     required: true
    // },
    in_queue_time:{
        type: Date
    },
    // out_queue:{
    //     type: Boolean,
    //     required: true
    // },
    out_queue_time:{
        type: Date
    },
    /*userid: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User id field is required!']
    } */  
});

const UserQueue = mongoose.model('UserQueue', UserQueueModelSchema);
module.exports = {UserQueue};