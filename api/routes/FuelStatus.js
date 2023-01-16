module.exports = function(app){
   
 
    const FuelStatusController = require("../controllers/FuelStatus");
    
    
        //create
       app.post("/fuelstatus",FuelStatusController.createfuelstatus);
    
        //update
        app.put("/fuelstatus/:id",FuelStatusController.fuelstatusUpdated);
}