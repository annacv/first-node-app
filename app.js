'use strict'
/* packages */
const chalk = require('chalk');

/* own */
const getNames = require('./myModule');

/* in ES6 ---> 
import chalk from 'chalk';
import getNames from './myModule';
*/

const students = [
  {
    name: 'anna',
    age: 28,
  },
  {
    name: 'paolo',
    age: 27,
  }
]

console.log(chalk.blue(getNames(students)));