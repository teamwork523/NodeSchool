var fs = require('fs');

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);
    var filteredList = list.filter(function(filename){
      return (filename.length > extension.length &&
        filename.slice(filename.length - extension.length) === extension);
    });
    return callback(null, filteredList);
  });
}
