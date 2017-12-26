const http = require('http');
const bl = require('bl');

var result = [];
var count = 0;

function print() {
  result.forEach(function(data) {
    console.log(data);
  });
}

function httpGet(index) {
  http.get(process.argv[2+index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err);
      result[index] = data.toString();
      count++;
      if (count === 3) print();
    }))
  }).on('error', console.error)
}

[0,1,2].forEach((index) => httpGet(index)); 
