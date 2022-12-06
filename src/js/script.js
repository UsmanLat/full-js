'use strict';
let numberOfFilms;
do {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms === 0);
//alert(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', '');
  if (
    a != '' &&
    a != undefined &&
    a.length < 50 &&
    b != '' &&
    b != undefined &&
    b.length < 50
  ) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
// c = prompt('Один из последних просмотренных фильмов?', ''),
// d = prompt('На сколько оцените его?', '');

//personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
const watchedMovieCount = personalMovieDB.count;
if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}
