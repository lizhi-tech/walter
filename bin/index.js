var wconfig = require("./walt-config.js"),
    glob = require("glob"),
    fs = require("fs"),
    path = require("path"),
    express = require("express"),
    werror = require("./walt-error.js");

/*
有关此脚本的完整文档，请参阅GitHub wiki。
运行脚本来托管您的包管理器Walter。


For complete documentation on this script, see the GitHub wiki.
Run the script to host your package manager Walter.
*/

(function() {
  var filesPath = wconfig.filesPath;

  var app = express();
  app.all('*', function(req, res) {
    var args = req.url.split("/");
    if(!args[0] == "job") {
      if(!typeof wconfig.reroute == "undefined") {
        require(path.join("../"), wconfig.callback)(req, res);
      } else {
        werror("error", "ReRoute not called, showing default page.")
      }
    } else {
      var page = "<h1>Walter</h1>";
      if(!typeof args[1] == "undefined") {
        res.send(page);
        if(fs.existsSync(path.resolve(path.join("../", filesPath, args.slice(1))))) {
          res.send(fs.readFileSync(path.resolve(path.join("../", filesPath, args.slice(1)))));
        } else {
          fs.readDirSync(path.resolve(path.join("../", filesPath))).forEach(function(fileName) {
            res.send("<a href=\"" + "job/" + path.join("../", filesPath) + "\"" + fileName + "</a>")
          })
        }
      }
    }
  })

  app.listen(8080)
})()
