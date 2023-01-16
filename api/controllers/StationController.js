const {Station} = require("..//models/StationModel");



//UPDATE
exports.UpdateStation = async (req,res) => {

    try {
        const updatedStation = await Station.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res.status(200).json(updatedStation);
    } catch (error) {
        res.status(500).json(error);
    }
}

//DELETE

exports.DeleteStation = async (req,res) => {

    try {
        await Station.findByIdAndDelete(req.params.id)
        return res.status(200).json("Station Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET
exports.StationID = async (req,res) => {


  try {
      const station = await Station.findById(req.params.id)
      return res.status(200).json(station)
  } catch (error) {
      res.status(500).json(error)
  }
}

//GET ALL

exports.Stations = async (req,res) => {


    try {
        const stations = await Station.find()
        return res.status(200).json(stations)
    } catch (error) {
        res.status(500).json(error)
    }
}


