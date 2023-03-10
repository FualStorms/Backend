const express =require("express");
var app = express();
const cors = require('cors');
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

app.use(cors());

var port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    //useCreateIndex:true
   
});


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

var v2 = require('./api/routes');

app.use('/api/v2', v2.router);


app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+" not found"});
});

app.listen(port, () => {
    console.log(`API server is started on: ${port}`);
});