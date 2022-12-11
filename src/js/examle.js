'use strict';
const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  'Takesi',
  'Sam',
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const newArr = [];

  for (let i = 0; i < 3; i++) {
    const [a, b, c] = arr;
    const team = [a, b, c];
    newArr.push(team);
    const rest = arr.slice(3);
    arr = rest;
  }
  //console.log(newArr);

  let str = arr.length
    ? `Оставшиеся студенты: ${arr.join(', ')}`
    : 'Оставшиеся студенты: -';
  newArr.push(str);
  return newArr;
}
console.log(sortStudentsByGroups(students));
