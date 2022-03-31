'use strict';


alert("Угадай число от 1 до 100");


function newNum(){
  let enterNum = prompt("Введите число");

  function bot(num){

    if (enterNum > num ){
        alert("Загаданное число меньше");
        newNum();
    } else if (isNaN(enterNum) == true ){
        alert("Вы ввели не число");
        newNum();
    } else if (enterNum === null ){
        alert("Игра окончена");
    } else if (enterNum < num ){
        alert("Загаданное число больше");
        newNum();
    } else if (enterNum == num ){
        alert("Поздравляю, Вы угадали!!!");
    } 
  }

  bot(50);
}

newNum();
  

