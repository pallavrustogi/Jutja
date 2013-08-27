module.exports = function(req, res, next) {
    if (req.session.authenticated
) {
      var action = req.param('action');
	var cuser = req.session.User ;// cuser is the loggedin user
      if (action == 'create') {
	req.body.owner.push (cuser);
	  }	
    next();
    } else {
      res.send("Ops something went wrong");
    }
}
