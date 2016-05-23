var express = require('express');
var app = express();
var router = require('./app/routes/router');

app.set('port', (process.env.PORT || 8080));
app.set('views', './app/views')

app.use('/public', express.static(process.cwd() + '/public'));

router(app);

app.listen(app.get('port'), function() {
	console.log('Node server listening on', app.get('port'));
})
