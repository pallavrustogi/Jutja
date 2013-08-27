var http = require('http'),
    httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
    hostnameOnly: true,
    router: {
	'jutja.com': 'localhost:8000',
	'www.jutja.com': '192.241.167.176:8000',
	'dev.jutja.com': '192.241.167.176:5000',
	'www.dev.jutja.com': '192.241.167.176:5000',
	'alpha.jutja.com': '192.241.167.176:4000'

    }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);