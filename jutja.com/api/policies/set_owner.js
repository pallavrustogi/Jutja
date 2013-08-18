module.exports = function(req, res, next) {
    if (req.session.user) {
      var action = req.param('action');
	var cuser = req.user.username ;// cuser is the loggedin user
      if (action == 'create') {
	req.body.owner.push (cuser);
	  }	
    next();
    } else {
      res.send("Ops something went wrong");
    }
}
