
# jrvs-cli

jrvs-cli is a tool to help devs get common info, and add/remove/list tasks, setup a timer in terminal/cmd, and more...

### Installation
```sh
$ npm i jrvs-cli -g
```

If you face asny issue due to Chromedriver while installing, please use the following commmand to bypass the error:
```sh
$ npm i jrvs-cli -g --unsafe-perm=true
```

# New Features!


### Add terminal/cmd aliases using jrvs !!
One of the most useful tools for a developer !!<br />

To add an alias:
```sh
$ jrvs alias list "ls"
```
To run an existing alias:
```sh
$ jrvs run list
```
To list all existing:
```sh
$ jrvs listAliases
```

### Trigger a Google or Youtube search directly from jrvs !!
More options coming soon...<br />

To trigger a google search:
```sh
$ jrvs search -g iron man / jrvs search --google iron man
```
To trigger a youtube search:
```sh
$ jrvs search -y iron man / jrvs search --youtube iron man
```

### Log and check you coding time on session/day basis.
More coding time stats coming soon.<br />

To start/resume logging coding time:
```sh
$ jrvs logtime start
```
To pause/end logging coding time:
```sh
$ jrvs logtime stop
```

Output: <br />
<img src="https://raw.githubusercontent.com/krishnakanththammana/mediaContent/master/jrvs-cli/assets/jrvs_logtime_stop.png" width="512">
 <br />
To view coding time done so far:
```sh
$ jrvs logtime view
```

Output: <br />
<img src="https://raw.githubusercontent.com/krishnakanththammana/mediaContent/master/jrvs-cli/assets/jrvs_logtime_view.png" width="512">
 <br />

### Timer in terminal/CMD
Have a timer in terminal/cmd:
```sh
$ jrvs tick 10
```

### View date and time in command line
Date:
```sh
$ jrvs date
```
Time:
```sh
$ jrvs time
```

### TODO list in your terminal/CMD
Add, Remove and list tasks in terminal !

Add:
```sh
$ jrvs task --add "my task 1"` or `$ jrvs task -a "my task 1"
```

Remove:
```sh
$ jrvs task --delete 2
```
or
```sh
$ jrvs task -d 2
```

List tasks:
```sh
$ jrvs task --list
```
or
```sh
$ jrvs task -l
```
