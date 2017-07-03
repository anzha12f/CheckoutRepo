//Assigning routes
module.exports = {
	'/products' : require('./controllers/ProductsController'),
	'/company'  : require('./controllers/CompanyController'),
	'/companytx': require('./controllers/CompanyTxController')
};

