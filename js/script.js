"use strict";

let numberOfFilms=null;
let tempName;
let tempScore;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //
    actors: {},
    genres: [],
    privat: false
};

function start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "0");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms  = +prompt("Сколько фильмов вы уже просмотрели? Пожалуйста, введите число", "0");
    }
}
function rememberMyFilms(params) { //Запись в personalMovieDB элемента по названию фильма
    for (let i = 0; i < 2; i++) {
        do {
            tempName=prompt('Один из последних фильмов?', '');
        } while (tempName == null || tempName == '' || tempName.length > 50);
        do {
            tempScore=prompt('На сколько вы его оцените?', '');
        } while (tempScore == null || tempScore == '');
        personalMovieDB.movies[tempName]=tempScore;
    }
    tempScore=null;
    tempName=null;
}
function detectPersonalLevel(params) { // Определение уровня киномана
    if (personalMovieDB.count<10)
        console.log ("Просмотрено довольно мало фильмов");
    else if (personalMovieDB.count>10 && personalMovieDB.count<30) 
        console.log ("Вы классический зритель");
    else if (personalMovieDB.count>30) 
        console.log ("Вы киноман");
    else console.log ("ошибка");
}
function showMyDb(){ // Вывод объекта personalMovieDB, если параметр равен Ложь
    if (personalMovieDB.privat == false)
        console.log(personalMovieDB);
    else 
        console.log("Информация приватная и не доступна для вывода.");
}
function writeYourGenres(num) { //
    for (let i = 1; i <= num; i++) 
        personalMovieDB.genres[i]=prompt(`Ваш любимый жанр №${i+1}?`);
}

//Main
//Заполнение названий и оценок
start();
writeYourGenres(3);
showMyDb(false);

