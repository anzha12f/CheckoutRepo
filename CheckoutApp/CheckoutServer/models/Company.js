var mongoose = require('mongoose');

// Create the Schemas
// Company Schema
var CompanySchema = new mongoose.Schema({
	coId: {
		type: String,
		required: true
	},
	coName: {
		type:String,
		required: true
	}
});

// Export it for outsiders
module.exports = CompanySchema;