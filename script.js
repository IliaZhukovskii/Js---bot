'use strict';


alert("Угадай число от 1 до 100. У тебя 10 попыток");

function newNum(count){

  function bot(num){

    let enterNum = prompt("Введите число");

    count--;

    if (enterNum > num ){
        alert("Загаданное число меньше, осталось попыток: " + count);
        bot(num);
    } else if(count == 0){
        let newAttempt = confirm("Попытки закончились, хотите сыграть еще?");

        if (newAttempt == true){
            count = 10;
            bot(Math.floor(Math.random() * (100 - 0 + 1)) + 0);          
        } else {
          alert("Игра окончена");
        }

    } else if (isNaN(enterNum) == true ){
        alert("Вы ввели не число, осталось попыток: " + count);
        bot(num);

    } else if (enterNum === null ){
        alert("Игра окончена");

    } else if (enterNum < num ){
        alert("Загаданное число больше, осталось попыток: " + count);
        bot(num);

    } else if (enterNum == num ){

      let quest = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?");
      
        if (quest == true){
          alert("Теперь предстоит угадать другое число");
          bot(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
        } else {
          alert("Игра окончена");
        }
    } 
  }

  bot(50);
}

newNum(10);
  

