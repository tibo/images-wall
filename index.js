var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/new-image', function(req, res){

	img = req.query['img'];

	if (img)
	{
		io.emit('new image', img);
	}

	res.send();
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});