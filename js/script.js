"use strict";


const personalMovieDB = {
    count: +prompt("Сколько фильмов вы уже просмотрели?", "0"),
    movies: {}, //
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;


console.log(personalMovieDB);

