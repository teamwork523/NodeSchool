var mymodule = require('./mymodule');

function print(err, data){
  if (err) throw err;
  data.forEach((ele) => console.log(ele));
}
mymodule(process.argv[2], process.argv[3], print);
