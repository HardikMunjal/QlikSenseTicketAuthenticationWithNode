module.exports = function (app) {

//https://community.qlik.com/thread/160788

 app.get('/', function(req, res, next) {
			    res.render('login/login.html');
			  });
  app.get('/authenticate', function(req, res, next) {
			    res.render('login/login.html');
			  });
};