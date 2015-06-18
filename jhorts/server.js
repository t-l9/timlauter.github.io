var express    = require('express');
var app        = express();
var path       = require('path');
var port       = process.env.PORT || 8000;

//---------------------------------------
//  basic route
//---------------------------------------
app.use(express.static(__dirname + '/public'));

//---------------------------------------
//  catchall requests not handled by node
//---------------------------------------
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

//---------------------------------------
//  start server
//---------------------------------------
app.listen(port);
console.log('---------------------------------');
console.log('...Started on port ' + port);
