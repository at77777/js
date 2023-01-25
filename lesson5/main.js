'use strict';

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b) {
    return a * b;
}

console.log(rectangleArea(20, 20));



// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
   return Math.PI * Math.pow(r, 2);
}

console.log(circleArea(4));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(r1, h) {
    return 2 * Math.PI * r1 * (r1 + h);
}

console.log(cylinderArea(4, 4));



// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4, 5];

function array(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}

array(arr);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Lorem ipsum.');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listMaker(text1) {
    document.write(`
        <ul>
          <li>${text1}</li>
          <li>${text1}</li>
          <li>${text1}</li>
        </ul>
    `);
}

listMaker('Lorem ipsum.');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listMaker2(text2, num2)  {
    document.write(`<ul>`)
        for (let i = 0; i < num2; i++) {
            document.write(`<li>${text2}</li>`);
        }
    document.write(`</ul>`)
}

listMaker2('Lorem ipsum.', 5);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr3 = [1, 2, 3, 'Lorem ipsum dolor.', true, false];

function listMaker3(arr3) {
    document.write(`<ul>`)
    for (let arr3Element of arr3) {
        document.write(`<li>${arr3Element}</li>`);
    }
    document.write(`</ul>`)
}

listMaker3(arr3);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array1 = [
    {
        name: 'Valentine',
        age: 22
    },
    {
        name: 'Gnat',
        age: 19
    },
    {
        name: 'Jonh',
        age: 25
    },
];

function users(array1) {
    for (let arrayElement of array1) {
        document.write(`<div>${arrayElement.name}, ${arrayElement.age}</div>`)

    }
}

users(array1);


// - створити функцію яка повертає найменьше число з масиву
let array2 = [10, 20, 100, -10, 0];

function getMinNum(array2) {
    let min = array2[0];
    for (let minElement of array2) {
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;
}

console.log(getMinNum(array2));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array3 = [-3, 1, 5]

function getSum(array3) {
    let sum = 0;
    for (let array3Element of array3) {
        sum += array3Element;
    }
    return sum;
}

console.log(getSum(array3));