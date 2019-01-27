module.exports = function() {
  var fs = require("fs"),
      path = require("path");

  var fileContent = fs.readFileSync(path.resolve("../walter.json"));
  return JSON.parse(fileContent);
}
