module.exports = function (app) {

//https://community.qlik.com/thread/160788
var qlikauth = require('qlik-auth');

app.get('/', function(req, res, next) {
	res.render('login/login.html');
});

app.get('/ticket', function(req, res, next) {
    console.log(req.session);
	res.json(req.session);
});


app.get('/loginapi', function(req, res, next) {

  console.log(req.headers.origin);
	var result=
	{ "name" : "mohit",
	"password" : "password4",
	"profession" : "teacher",
	"id": 4
    }

res.json(result);
});

app.post('/loginapi', function(req, res, next) {


  console.log(req.body);
  if(req.body.username=='qlikdeveloper5' && req.body.password=='123'){

	var result=  {  
		 			"message" : "success",
					"username" : "qlikdeveloper5",
					"id": 4123
				 }

	res.json(result);
	console.log('nice bro');



	}else{

	 var result={
					"message" : "reject",
					"username" : "qlikdeveloper5",
					"id": 4123
				}

	res.json(result);
	console.log('bad bro');
	}

});



app.get('/authenticate', function(req, res, next) {
	
	var profile = {
		'UserDirectory': 'ASSOCIATES', 
		'UserId': 'qlikdeveloper5'
		// ,
		// 'Attributes': [{'Group': 'ExampleGroup'}]
	 }
    console.log('coming to authenticate');

    //Make call for ticket request
	qlikauth.requestTicket(req, res, profile);
	res.render('index.html');
  });


app.get('/page', function(req, res, next) {
	
	
	res.render('index.html');
  });
};

