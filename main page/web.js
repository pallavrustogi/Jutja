var minify = require('express-minify');
var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 80;
    
app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.compress());
  app.use(minify()); 
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);
