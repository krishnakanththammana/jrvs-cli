var fs = require('fs');

exports.addDataToFile = function (filePath, callback) {
  // add data to file
  fs.exists(filePath, function (exists) {
      if (!exists) {
          fs.appendFile(filePath, '[]', function (err) {
              if (err) throw err;
          });
      }
      fs.readFile(filePath, 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }
          const dataToWrite = callback(data);
          fs.writeFile(filePath, dataToWrite, 'utf8', function (err) {
             if (err) return console.log(err);
          });
      });
  });
};

exports.readFile = function (filePath, callback) {
  // list task
  fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      callback(data);;
  });
};