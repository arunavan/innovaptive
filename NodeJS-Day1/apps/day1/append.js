var fs = require('fs');

///append content in existing file
fs.appendFile('input.txt', 'Chennai-Hyderabad-Pune', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


//delete a file

fs.unlink('app1.js', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
