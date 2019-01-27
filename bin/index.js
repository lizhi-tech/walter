var wconfig = require("walt-config.js"),
    glob = require("glob"),
    fs = require("fs"),
    path = require("path"),
    express = require("express");

/*
有关此脚本的完整文档，请参阅GitHub wiki。
运行脚本来托管您的包管理器Walter。


For complete documentation on this script, see the GitHub wiki.
Run the script to host your package manager Walter.
*/

(function() {
  var filesPath = wconfig.filesPath;

  var app = express();
  app.get('*', function(req, res) {
    var arguments = req.url.split("/");
  })
})()
