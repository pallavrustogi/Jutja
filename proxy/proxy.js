var http = require('http'),
    httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
    hostnameOnly: true,
    router: {
	'jutja.com': 'localhost:8000'//,
//	'dev.jutja.com': '192.241.167.176:9001',
//	'alpha.jutja.com': '192.241.167.176:9002'
    }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);