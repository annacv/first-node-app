'use strict';

/* const getNames = (studentsList) => {
  const names = studentsList.map((student) => {
    return student.name;
  });
  return names;
} */

const getNames = studentsList => studentsList.map(student => student.name);

module.exports = getNames;

/* in ES6 --> export default getNames; */
