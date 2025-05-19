/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: +prompt("Сколько фильмов вы уже просмотрели?", "0"),
    movies: {}, //
    actors: {},
    genres: [],
    privat: false
};

//Заполнение названий и оценок
let tempName;
let tempScore;
for (let i = 0; i < 2; i++) {
    do {
        tempName=prompt('Один из последних фильмов?', '');
    } while (tempName == null || tempName == '' || tempName.length > 50);
    do {
        tempScore=prompt('На сколько вы его оцените?', '');
    } while (tempScore == null || tempScore == '');
    personalMovieDB.movies[tempName]=tempScore;
}
if (personalMovieDB.count<10)
    console.log ("Просмотрено довольно мало фильмов");
else if (personalMovieDB.count>10 && personalMovieDB.count<30) 
    console.log ("Вы классический зритель");
else if (personalMovieDB.count>30) 
    console.log ("Вы киноман");
else console.log ("ошибка");

console.log(personalMovieDB);