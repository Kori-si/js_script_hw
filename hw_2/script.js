// задание 1
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
if (num1 <= 1 && num2 >= 3) {
    alert(`${num1} меньше или равно 1, ${num2} больше или равна 3`);
} else {
    alert('нет');
}

// задание 2
let test = true;
(test === true) ? console.log('+++') : console.log('---');

// задание 3
let day = Number(prompt('Введите число от 1 до 31'));
if (1 <= day && day <= 10) {
    alert('first');
} else if (11 <= day && day <= 20) {
    alert('second');
} else if (21 <= day && day <= 31) {
    alert('third');
} else {
    alert('введите верное число');
}

// задание 4
let number = Number(prompt('Введите число'));
let hundreds = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let units = number % 10;
alert(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`)