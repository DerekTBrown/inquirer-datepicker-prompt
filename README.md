# inquirer-datepicker-prompt
Datepicker plugin for [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

![Datetime prompt](example/datetime-prompt.png)

## Getting started
__install plugin__
```javascript
npm i inquirer-datepicker-prompt
```

__register prompt__
```javascript
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
```

## Options
__message__

Inherited from inquirer, message to be displayed while retrieving response.

__format__

An array of format specifiers for printing the date to the console.  Uses
the [dateformat](https://www.npmjs.com/package/dateformat) mask options.
For example:

```Javascript
// 1/1/17 5:00 PM
{
  type: 'datetime',
  name: 'dt',
  message: 'When would you like a table?',
  format: ['m', '/', 'd', '/', 'yy', ' ', 'h', ':', 'MM', ' ', 'TT']
}

// 01/01/2017 05:00 PM
{
  type: 'datetime',
  name: 'dt',
  message: 'When would you like a table?',
  format: ['mm', '/', 'dd', '/', 'yyyy', ' ', 'hh', ':', 'MM', ' ', 'TT']
}
```

__initial__

Initial value for datepicker, must be a Date object. If not specified current date and time will be used.
Example:
```javascript
{
  type: 'datetime',
  name: 'dt',
  message: 'When would you like a table?',
  initial: new Date('2017-01-01 12:30'),
}
```

__{date,time}.{min,max}__

These specify a range of valid dates/time for entry.  Users will be
prohibited from entering a value higher.

```Javascript
{
  type: 'datetime',
  name: 'dt',
  message: 'When would you like a table?',

  // Enter only 1/1 to 3/1
  date: {
    min: "1/1/2017",
    max: "3/1/2017"
  },

  // Enter only 9:00AM to 5:00PM
  time: {
    min: "9:00AM",
    max: "5:00PM"
  }
}
```

__time.{seconds, minutes, hours}.interval__

These specify the allowed interval (modulo).  For instance:

```Javascript

// Minutes can only be entered in intervals of 15 minutes
{
  type: 'datetime',
  name: 'dt',
  message: 'When would you like a table?',
  time: {
    minutes: {
      interval: 15
    }
  }
}
```
