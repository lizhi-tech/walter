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
  var express    = require('express')
  var serveIndex = require('serve-index')

  var app = express()

  // Serve URLs like /ftp/thing as public/ftp/thing
  // The express.static serves the file contents
  // The serveIndex is this module serving the directory
  app.use('/job', express.static('files'), serveIndex('public/ftp', {'icons': true}))

  // Listen
  app.listen(3000)
})()
