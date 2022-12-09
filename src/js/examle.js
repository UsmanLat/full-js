'use strict';

// function calculateVolumeAndArea(a) {
  if (Number.isInteger(a)) {
    const v = a * a * a,
      s = 6 * a * a;
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
  } else {
    return 'При вычислении произошла ошибка';
  }
// }
//console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
  if (!Number.isInteger(seatNumber) || seatNumber < 1) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (seatNumber > 36) {
    return 'Таких мест в вагоне не существует';
  } else return Math.ceil(seatNumber / 4);
}
console.log(getCoupeNumber(5.2));
