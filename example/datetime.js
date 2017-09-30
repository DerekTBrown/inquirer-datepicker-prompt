/**
 * Datetime prompt example
 */

'use strict';

var inquirer = require('inquirer');

// In your code, this will be:
// inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
inquirer.registerPrompt('datetime', require('..'));


var questions = [
  {
    type: 'datetime',
    name: 'dt',
    message: 'When would you like a table?',
    initial: Date.parse('01/03/2017'),
    date: {
      min: "1/1/2017",
      max: "3/1/2017"
    },
    time: {
      min: '5:00 PM',
      max: '10:00 PM',
      minutes: {
        interval: 15
      }
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});
