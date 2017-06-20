# inquirer-datepicker-prompt
Datepicker plugin for [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

![Datetime prompt](example/datetime-prompt.png)

## Options
__message__

Inherited from inquirer, message to be displayed while retrieving response.

__format__

An array of format specifiers for printing the date to the console.  Uses
the [dateformat](https://www.npmjs.com/package/dateformat) mask options.
For example:

```Javascript
// 1/1/17 5:00 PM
['m', '/', 'd', '/', 'yy', ' ', 'h', ':', 'MM', ' ', 'TT']

// 01/01/2017 05:00 PM
['mm', '/', 'dd', '/', 'yyyy', ' ', 'hh', ':', 'MM', ' ', 'TT']
```

__{date,time}.{min,max}__

These specify a range of valid dates/time for entry.  Users will be
prohibited from entering a value higher.

```Javascript

// Enter only 9:00AM to 5:00PM
time{
  min: "9:00AM",
  max: "5:00PM"
}

// Enter only 1/1 to 3/1
date{
  min: "1/1/2017",
  max: "3/1/2017"
}

```

__time.{seconds, minutes, hours}.interval__

These specify the allowed interval (modulo).  For instance:

```Javascript

// Minutes can only be entered in intervals of 15 minutes
time{
  minutes: {
    interval: 15
  }
}

```
