'use strict';



exports = module.exports = function(app, passport) {
	
	app.get("/dashboard", function(req, res) {
	//if(req.isAuthenticated()) { res.render('dashboard') }
	//else {  res.set('X-Auth-Required', 'true');
  //res.redirect('/login/?returnUrl='+ encodeURIComponent(req.originalUrl));
res.render('dashboard');
});


app.get('/login', function(req, res){
	res.render('login');
});
app.get('/', function(req, res){
	res.render('index');
});
  //route not found
  app.all('*', function(req, res){
	res.render('404');
});


};

