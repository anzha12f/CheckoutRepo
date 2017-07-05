var mongoose = require('mongoose');
//Get dependency of node-restful to create REST API for Report
// Model.
var restful = require('node-restful');

module.exports = function(app, route) {

// Here setting up the controller for REST
var rest = restful.model(
	'Report',
	app.models.Report
	).methods(['get', 'put', 'post', 'delete'])
     .before('get', getBalance);

//Aggregation function
var getBalance = function() {
var ComtxModel = mongoose.model('comtx', CompanyTxSchema, 'companytxes');
    ComtxModel.aggregate([
       { $group: {
           		  _id: "$cotId",
               	  balance: { $sum: "$cotTotAmt"  }
        		}}
    						], function (err, result) {
        						if (err) {
            						console.log(err);
            						return;
        						}
        						//insertAgg(result, function(aggId){
        						console.log(result);
        	
        //});
      });
}
 
// Register injection with rest object
rest.register(app, route);

// Inject Aggregate function

// return it 
return function(req, res, next){
	next();
  };
};