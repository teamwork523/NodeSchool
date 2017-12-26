var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function (req, res, next) {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err;
        var content = JSON.parse(data);
        res.json(content);
    });
})

app.listen(process.argv[2])
