var fs = require('fs');
//var contents = fs.readFileSync ('/Applications/MAMP/htdocs/AD320_NodeJS_webpage/AD320-IA6-Yoon/learnyounode/helloworld.js');
//var buf = buf.from(contents);
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;

console.log(lines);

