var mongoose = require('mongoose');

// Create the Schemas

// CompanyTx Schema
var CompanyTxSchema = new mongoose.Schema({
	cotId: {
		type: String,
		required: true
	},
	cotpId: {
		type:String,
		required: true
	},
	cotrule: {
		minAdv: {type: Number},
		maxAdv: {type: Number},
		dealAdv: {type: Number},
		dropPrice : {type: Number},
		dropPrc : {type: Number}
	},
	cotOrderAdv: {
		type: Number,
		required: true
	},
	cotTotAmt: {
		type: Number,
	}
});

// Export it for outsiders
module.exports = CompanyTxSchema;
