module.exports = function (app) {


 app.get('/', function(req, res, next) {
			    res.render('login/login.html');
			  });
  app.get('/authenticate', function(req, res, next) {
			    res.render('login/login.html');
			  });
};