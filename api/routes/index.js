var express = require('express');


var router = express.Router();

router.get('/',function(req,res){
    res.send('welcome to API');
});


require('./AuthRoutes')(router);
require('./UserRoutes')(router);
require('./StationRoutes')(router);
require('./FuelStatus')(router);




//require('./CustomerRoutes')(router);
//require('./CampsiteOwnerRoutes')(router);

module.exports.router = router;
