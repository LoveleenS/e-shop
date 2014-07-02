var express = require('express'),
	stylus = require('stylus');

var env=process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

function compile(str,path){
	return stylus(str).set('filename',path);
}

app.configure(function(){
	app.set('views',__dirname+'/server/views');
	app.set('view engine','jade');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(stylus.middleware(
	{
		src: __dirname+'/public',
		compile:compile
	}
	));
	app.use(express.static(__dirname+'/public'));
});

app.get('/partials/:partialPath',function(req,res){
	res.render('partials/'+req.params.partialPath);
});

app.get('*',function(req,res){
	res.render('index');
});

var port = 8005;
<<<<<<< HEAD
app.listen(process.env.PORT || port);
=======
app.listen(port);
>>>>>>> 35e8bc66f719876cd6bf97c45f0597ddb3a8bf06
