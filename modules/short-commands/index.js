const { spawn } = require('child_process')
const commons = require('../commons');

const filePath = __dirname + "/cmds.json";

exports.addCommand = function(alias, originalCMD) {
  function parseData(fileData) {
    fileData = JSON.parse(fileData);
    fileData.push({alias, originalCMD})
    return JSON.stringify(fileData);
  }
  commons.addDataToFile(filePath, parseData);
}

exports.runCommand = function(cmd) {
  function callback(data) {
    data = JSON.parse(data);
    const command = data.filter(item => item.alias === cmd)[0]
    if(command) spawn(command.originalCMD).stdout.pipe(process.stdout);
    else console.log("command not found.. please add the command using `jrvs aliad <alias> <command>");
  }
  commons.readFile(filePath, callback);
}

exports.listCommands = function() {
  function callback(data) {
    data = JSON.parse(data);
    data.forEach((item, index) => {
      console.log(`${index}. ${item.alias} = ${item.originalCMD}`)
    })
  }
  commons.readFile(filePath, callback);
}