
# jrvs-cli

jrvs-cli is a tool to help devs get common info, and add/remove/list tasks, setup a timer in terminal/cmd, and more...

### Installation
```sh
$ npm i jrvs-cli -g
```


# New Features!


### Log and check you coding time on session/day basis.
More coding time stats coming soon.<br />

To start/resume logging coding time:
```sh
$ jrvs logtime start
```
To pause/end logging coding time:
```sh
$ jrvs logtime stop
`

Output:
```sh
$ You have worked for 0.37 minutes in this session and 9.70 minutes so far today!
```

To view logging coding time done so far:
```sh
$ jrvs logtime view
`

Output:
```sh
$ You have worked for 0.37 minutes so far in this session and 9.70 minutes so far today!
```

To view coding time so far:
```sh
$ jrvs logtime view
```
Output:
```sh
You have worked for 0.37 minutes so far in this session and 9.70 minutes so far today!
```

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
$ jrvs task --remove 2
```
or
```sh
$ jrvs task -r 2
```

List tasks:
```sh
$ jrvs task --list
```
or
```sh
$ jrvs task -l
```
