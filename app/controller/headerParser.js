module.exports = function(req, res) {
	var ip = req.ip.split(':')[3];

	var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
	var language = req.headers["accept-language"].split(',')[0];

	var resObj = Object();

	resObj.ip = ip;
	resObj.software = software;
	resObj.language = language;

	res.end(JSON.stringify(resObj));
}