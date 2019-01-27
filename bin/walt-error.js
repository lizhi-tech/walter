var chalk = require("chalk");

module.exports = function(type, text) {
  "use strict";

  if(type == "error") {
    console.log("WALTER " + chalk.red("!ERR") + " " + text);
  } else if(type == "warning") {
    console.log("WALTER " + chalk.yellow("!WARN") + " " + text);
  } else if(type == "note") {
    console.log("WALTER " + chalk.green("!NOTE") + " " + text);
  }
}
