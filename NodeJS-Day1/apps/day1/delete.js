var fs = require('fs');

fs.unlink('app1.js', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
