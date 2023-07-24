//Задание 1
function cube(num) {
    return num ** 3;
}

console.log(cube(2) + cube(3));

//Задание 2

function salary() {
    let num1 = prompt('Введите размер Вашей зароботной платы: ');

    if (isNaN(num1)) {
        alert('Вы ввели не число! Попробуйте еще раз!');
        return 0;
    } else {
        let result = num1 - (num1 * 0.13);
        return result;
    }
}

let res = salary();
console.log(`Размер заработной платы за вычетом налогов равен ${res}`);

//Задание 3
let num2 = prompt('Введите 1 число: ');
let num3 = prompt('Введите 2 число: ');
let num4 = prompt('Введите 3 число: ');

function max(num2, num3, num4) {
    if (num2 > num3 && num2 > num4) {
        console.log(`максимальное первое чило ${num2}`);
    } else if (num3 > num2 && num3 > num4) {
        console.log(`максимальное второе чило ${num3}`);
    } else {
        console.log(`максимальное третье чило ${num4}`);
    }
}

max(num2, num3, num4);

//Задание 4
let number1 = Number(prompt('1. Введите число: '));
let number2 = Number(prompt('2. Введите число: '));


function addition(number1, number2) {
    let sum = number1 + number2;
    console.log(`Сумма ${sum}`);
}

function difference(number1, number2) {
    (number1 > number2) ? console.log(`Разность ${number1 - number2}`) : console.log(`Разность ${number2 - number1}`);
}

function multiplication(number1, number2) {
    let mult = number1 * number2;
    console.log(`Умножение ${mult}`);
}

function division(number1, number2) {
    let div = number1 / number2;
    console.log(`Деление ${div}`);
}

addition(number1, number2);
difference(number1, number2);
multiplication(number1, number2);
division(number1, number2);