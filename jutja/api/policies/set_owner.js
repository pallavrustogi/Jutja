module.exports = function(req, res, next) {
    if (req.session.authenticated) {
      var action = req.param('action');
      if (action == 'create') {
	//req.body.owner = [req.session.User];
	  }	
    next();
    } else {
      res.send("Ops something went wrong");
    }
}
