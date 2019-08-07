var fs = require('fs');
const moment = require('moment')

const filePath = "./tasks.json";
const timerPath = "./timer.json";
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

exports.logTime = function(type) {
    if (type === "start") {
        fs.exists(timerPath, function (exists) {
            if (!exists) {
                fs.appendFile(timerPath, '[]', function (err) {
                    if (err) throw err;
                });
            }
            fs.readFile(timerPath, 'utf8', function (err, data) {
                if (err) {
                  return console.log(err);
                }
                data = JSON.parse(data);
                data.push({
                    "date": moment().format('LL'),
                    "start": moment().format(),
                    "stop": "",
                    "localSum": 0
                })
                data = JSON.stringify(data);
                fs.writeFile(timerPath, data, 'utf8', function (err) {
                   if (err) return console.log(err);
                   console.log("\x1b[32m\x1b[40m", "Started logging time");
                });
            });
        });
    }
    if (type === "stop") {
        fs.readFile(timerPath, 'utf8', function (err, data) {
            if (err) {
              return console.log(err);
            }
            data = JSON.parse(data);
            data[data.length - 1].stop = moment().format();
            const {start, stop} = data[data.length - 1]
            const localSum = moment(stop).diff(moment(start), 'seconds');
            data[data.length - 1].localSum = localSum;
            data = JSON.stringify(data);
            fs.writeFile(timerPath, data, 'utf8', function (err) {
                if (err) return console.log(err);
                let timeToday = 0;
                JSON.parse(data).filter(item => item.date === moment().format('LL')).forEach(item => timeToday += item.localSum)
                console.log("\x1b[32m\x1b[40m", `You've worked for ${parseFloat(localSum/60).toFixed(2)} minutes in this session and ${parseFloat(timeToday/60).toFixed(2)} minutes so far today!`);
            });
        });
    }
    if (type === "view") {

    }
};