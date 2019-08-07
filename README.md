# jrvs-cli

jrvs-cli is a tool to help devs get common info, and add/remove/list tasks, setup a timer in terminal/cmd

### Installation

```sh
$ npm i jrvs-cli -g
```

# New Features!

 Now, you can log and check you coding time on session/day basis.
 More coding time stats coming soon.

 To start/resume logging work time:
```sh
$ jrvs logtime start
```
 To pause/end logging work time:
```sh
$ jrvs logtime stop
```
 Output:
```sh
You've worked for 0.37 minutes in this session and 9.70 minutes so far today!
```
 Have a timer in terminal/cmd !!
```sh
$ jrvs tick 10
```

 Get date and time in command line
```sh
$ jrvs date
$ jrvs time
```

 Add, Remove and list tasks in terminal !
 Add
```sh
$ jrvs task --add "my task 1"
$ jrvs task -a "my task 1"
```

 Remove
```sh
$ jrvs task --remove 2
$ jrvs task -r 2
```

 List
```sh
$ jrvs task --list
$ jrvs task -l
```