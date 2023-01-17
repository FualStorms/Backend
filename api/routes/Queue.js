module.exports = function(app){
     const QueueController = require('../controllers/QueueController');

     app.post('/queuestatus', QueueController.UpdateQueue);
}