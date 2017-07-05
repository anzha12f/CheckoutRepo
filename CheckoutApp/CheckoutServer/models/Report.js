var mongoose = require('mongoose');

// Create the Schemas
// Report Schema
var ReportSchema = new mongoose.Schema({
	rptId: {
		type: String,
	},
	rptBal: {
		type:String,
			}
});

// Export it for outsiders
module.exports = ReportSchema;