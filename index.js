const httpProxy = require('http-proxy');
const settings = require('./settings.json')

httpProxy.createProxyServer({
    target: settings.url, 
    auth: settings.auth
}).listen(settings.listenPort);