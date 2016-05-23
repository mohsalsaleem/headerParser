var headerParser = require('../controller/headerParser')

module.exports = function(app) {
	app.get('/api/whoami', function(req, res) {
		headerParser(req, res);
	})
}