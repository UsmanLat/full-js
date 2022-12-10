'use strict';
// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== 'string') {
//     return 'Ошибка!';
//   }
//   return str.split('').reverse().join('');
// }
// console.log(reverse(someString));
// console.log(reverse([]));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  // if (!arr.length) {
  //   return 'Нет доступных валют';
  // }
  // let str = 'Доступные валюты:\n';

  // arr
  //   .filter((item) => item !== missingCurr)
  //   .forEach((element) => {
  //     str = `${str} ${element}\n`;
  //   });
  // return str;

  let str = arr.length ? 'Доступные валюты:\n' : 'Нет доступных валют';
  arr.forEach(
    (element) => (str += element === missingCurr ? '' : `${element}\n`)
  );
  return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'));
console.log(availableCurr([], 'EUR'));
