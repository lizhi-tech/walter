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
  var express = require('express');
  var serveIndex = require('serve-index');
  var app = express();

  app.use('/public', serveIndex('files')); // shows you the file list
  app.use('/public', express.static('files')); // serve the actual files

  app.listen(3000)
})()
