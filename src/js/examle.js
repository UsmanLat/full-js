'use strict';
const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$',
    },
    {
      name: 'Pizza Diavola',
      price: '9$',
    },
    {
      name: 'Beefsteak',
      price: '17$',
    },
    {
      name: 'Napoleon',
      price: '7$',
    },
  ],
  waitors: [
    { name: 'Alice', age: 22 },
    { name: 'John', age: 24 },
  ],
  averageLunchPrice: '20$',
  openNow: true,
};

function isOpen(prop) {
  let answer = '';
  !prop ? (answer = 'Закрыто') : (answer = 'Открыто');

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + parseInt(sDish.price) < parseInt(average)) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = {};
  for (const key in data) {
    if (!Array.isArray(data[key])) {
      copy[key] = data[key];
    } else {
      
      copy[key] = [...data[key]];
    }
  }

  copy.waitors[0] = { name: 'Mike', age: 32 };
  return copy;
}

console.log(transferWaitors(restorantData));
//restorantData.isOpen()
