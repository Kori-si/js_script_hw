//задание 1
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 === 0) {
        console.log(i + " - четное число");
    } else {
        console.log(i + " - нечетное число");
    }
}

//задание 2
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 1);
arr.splice(4, 1);
console.log(arr);

//задание 3
var array = [];
for (var i = 0; i < 5; i++) {
    var element = Math.floor(Math.random() * 10);
    array.push(element);
}
var sum = array.reduce(function (a, b) {
    return a + b;
}, 0);
var min = Math.min.apply(null, array);
var hasNumberThree = array.includes(3);
console.log(array);
console.log("Сумма элементов:", sum);
console.log("Минимальное число:", min);
console.log("Есть ли в этом массиве число 3?:", hasNumberThree);

//задание 4
for (let i = 1; i <= 20; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += 'x';
    }
    console.log(row);
}