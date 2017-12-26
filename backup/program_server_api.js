const http = require('http');
const urlParser = require('url');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const request = urlParser.parse(req.url, true);
    var inTime = new Date(request.query.iso);
    if (req.url.indexOf('parsetime') !== -1) {
      res.write(JSON.stringify({
        "hour": inTime.getHours(),
        "minute": inTime.getMinutes(),
        "second": inTime.getSeconds()
      }));
    } else if (req.url.indexOf('unixtime') !== -1) {
      res.write(JSON.stringify({
        "unixtime": inTime.getTime()
      }));
    }
    res.end();
})
server.listen(process.argv[2])
