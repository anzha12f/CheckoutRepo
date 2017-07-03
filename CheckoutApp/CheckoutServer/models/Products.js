var mongoose = require('mongoose');

// Create the Schemas
// ProductSchema
var ProductSchema = new mongoose.Schema({
	prdId: {
		type: String,
		required: true
	},
	name: {
		type:String,
		required: true
	},
	price:{
		type: Number,
		required: true
	}

});

// Export it for outsiders
module.exports = ProductSchema;

