'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (!arr.length) {
    return 'Семья пуста';
  }
  return `Семья состоит из: ${arr.join(' ')}`;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  if (!arr.length) {
    return '';
  }
  return arr.map((element) => element.toLowerCase()).join('\n');
}
console.log(standardizeStrings(favoriteCities));
