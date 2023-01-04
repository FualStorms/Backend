const { verifyToken1 } = require("../utils/verifyToken");

module.exports = function(app){
const StationController = require("../controllers/StationController");

    // app.get("/checkauthentication",verifyToken1,(_req,res)=>{
    //     res.send("Hello user,you are loggedin ")
    // });

    app.put("/station/:id",StationController.UpdateStation);
    app.delete("/station/:id",StationController.DeleteStation);
    app.get("/station/:id",StationController.StationID);
    app.get("/stations",StationController.Stations);
    

}