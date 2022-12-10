'use strict';

// // function calculateVolumeAndArea(a) {
//   if (Number.isInteger(a)) {
//     const v = a * a * a,
//       s = 6 * a * a;
//     return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
//   } else {
//     return 'При вычислении произошла ошибка';
//   }
// // }
// //console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seatNumber) {
//   if (!Number.isInteger(seatNumber) || seatNumber < 1) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   } else if (seatNumber > 36) {
//     return 'Таких мест в вагоне не существует';
//   } else return Math.ceil(seatNumber / 4);
// }
// console.log(getCoupeNumber(5.2));

// function getTimeFromMinutes(totalMinutes) {
//   if (
//     !Number.isInteger(totalMinutes) ||
//     totalMinutes < 0 ||
//     totalMinutes > 600
//   ) {
//     return ('Ошибка, проверьте данные');
//   } else {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     let hoursStr = '';
//     switch (hours) {
//       case 1:
//         hoursStr = 'час';
//         break;
//       case 2:
//       case 3:
//       case 4:
//         hoursStr = 'часа';
//         break;
//       default:
//         hoursStr = 'часов';
//         break;
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
//     //   //console.log(hoursStringsArray);
//   }
// }
// console.log(getTimeFromMinutes(50.2));

function fib(n) {
  let result = '';
  if (!Number.isInteger(n) || n < 2) {
    return '';
  } else {
    let a = 0,
      b = 1,
      c = a + b;
    result = '' + a + ' ' + b;
    for (let i = 3; i <= n; i++) {
      a = b;
      b = c;
      c = a + b;
      result = `${result} ${b}`;
    }
  }
  //console.log(result);
  return result;
}

 