"use strict";

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;

if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}


a = 0;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


a = -3;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;

if (time >= 0 && time < 15) {
    console.log('Перша черга');
} else if (time >= 15 && time < 30) {
    console.log('Друга черга');
} else if (time >= 30 && time < 45) {
    console.log('Третя черга');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта черга');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 22;

if (day > 0 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада');
}


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let i = +prompt('Please enter the day number:');

switch (i) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error')
}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Enter the first number:');
let number2 = +prompt('Enter the second number:');

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log(number1);
    console.log(number2);
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = prompt() || 'default';
console.log(x);




