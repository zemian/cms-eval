// node.js, the same, but with sugar:
var fs = require("fs");
var md = require('markdown-it')();

var text = fs.readFileSync("sample.md", "utf8");
var result = md.render(text);
console.log(result);
