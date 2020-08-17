var hljs = require('highlight.js'); // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

// Render sample.md file
var fs = require("fs");
var text = fs.readFileSync("sample.md", "utf8");
var result = md.render(text);
console.log(result);
