module.exports = function(req, res, next) {
    //if (req.session.user) {
      var action = req.param('action');
      if (action == 'create') {
	req.body.Createdby = req.user.username;
	  }	
    next();
   // } else {
      //res.send("Ops something went wrong");
    //}
}