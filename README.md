
# jrvs-cli

jrvs-cli is a tool to help devs get common info, and add/remove/list tasks, setup a timer in terminal/cmd, and more...

### Installation
`$ npm i jrvs-cli -g`


# New Features!


### Log and check you coding time on session/day basis.
More coding time stats coming soon.

To start/resume logging coding time: `$ jrvs logtime start`
To pause/end logging coding time: `$ jrvs logtime stop`

Output:
`You have worked for 0.37 minutes in this session and 9.70 minutes so far today!`

To view coding time so far: `$ jrvs logtime view`
Output:
`You have worked for 0.37 minutes so far in this session and 9.70 minutes so far today!`

### Timer in terminal/CMD
Have a timer in terminal/cmd: `$ jrvs tick 10`

### View date and time in command line
Date: `$ jrvs date`
Time: `$ jrvs time`

### TODO list in your terminal/CMD
Add, Remove and list tasks in terminal !

Add: `$ jrvs task --add "my task 1"` or `$ jrvs task -a "my task 1"`

Remove: `$ jrvs task --remove 2` or `$ jrvs task -r 2`

List tasks: `$ jrvs task --list` or `$ jrvs task -l`
