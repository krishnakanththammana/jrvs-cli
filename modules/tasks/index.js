var fs = require('fs');
const filePath = "./tasks.json";
exports.addTask = function (tsk) {
    // add task
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
            data = JSON.parse(data);
            data.push(tsk)
            data = JSON.stringify(data);
            fs.writeFile(filePath, data, 'utf8', function (err) {
               if (err) return console.log(err);
               console.log("added task...: " + tsk);
            });
        });
    });
};

exports.deleteTask = function (index) {
    // delete task
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        data = JSON.parse(data);
        data.splice(index, 1)
        data = JSON.stringify(data);
        fs.writeFile(filePath, data, 'utf8', function (err) {
           if (err) return console.log(err);
            console.log("deleting task...")
        });
    });
};

exports.listTask = function () {
    // list task
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
          return console.log(err);
        }
        data = JSON.parse(data);
        data.forEach((item, index) => console.log(`${index}. ${item}`))
    });
};

exports.timer = function (sec) {
    tick(sec)
}

function tick(seconds) {
    if(seconds) {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(seconds.toString());
        seconds--;
        setTimeout(() => {
            tick(seconds);
        }, 1000);
    } else {
        process.stdout.clearLine();
        console.log("\x1b[32m\x1b[40m", "Huston, we have a lift off !!");
    }
}