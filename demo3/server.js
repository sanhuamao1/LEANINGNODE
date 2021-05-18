const http = require('http');
const route= require('./module/route');

http.createServer(function (req, res) {
    route.static(req, res,'static')
}).listen(3000);