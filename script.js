// // Задание 1
// let a = 10;
// alert (a);
// a = 20; 
// alert (a);

// // Задание 2
// const dateIphone = 2010; 
// console.log(dateIphone);

// // Задание 3
// const nameCreator = 'Брендан Эйх';
// console.log(nameCreator);

// // Задание 4 
// let x = 10;
// let y = 2; 

// confirm (x + y);
// confirm (x - y); 
// confirm (x / y);
// confirm (x * y);
 
// // Задание 5
//  const result = 2 ** 5;
//  alert (result);
 
// // Задание 6
//  let z = 9;
//  let b = 2; 
//  alert (z % b); 

// //  Задание 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// // //  Задание 8
// let age = prompt (`Сколько вам лет?`);
// alert (age);

// //  Задание 9
// const user = {
//     name: 'Иван',
//     age: 20,
//     isAdmin: false,
// }

// //  Задание 10
// let userName = prompt (`Как тебя зовут?`);
// alert (`Привет, ${userName} !`);

// // Доп. задание
// let number = prompt (`Загадай любое число`)
// let number2 = (number**2)
// alert (number2);
// let number3 = (number2 + 10);
// alert (number3);
// let number4 = (number3 / 2);
// alert (number4);
// let number5 = (number4 - 2); 
// confirm (`Ответ равен ${number5}`);

// Домашнее задание 3
// Задание 1

// let password = 'скрипт'
// let password1 = prompt ('Введите пароль');
//  if (password1 === 'скрипт') { 
//     console.log ('Пароль введен верно');
//  } else {
//     console.log ('Пароль введен неверно');
//  }

//  Задание 2

// let c = 6;

// if (c > 0 && c < 10) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }

// Задание 3

// let d = 522;
// let e = 25;

// if (d >= 100 || e >= 100) {
//     console.log ('Верно');
// } else {
//     console.log ('Неверно');
// }

// // Задание 4
// let a = '2';
// let b = '3';

// alert(Number(a) + Number(b));

// Задание 5
// let monthNumber = 13;

// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         alert ('Зима')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert ('Весна')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert ('Лето')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert ('Осень')
//         break;
//     default:
//         alert ('Неверное значение')
//         break;
// }
// Домашнее задание 4
// Задание 1
// for (let a = 0; a < 2; a++) {
//     console.log ('Привет!');
// }

// Задание 2
// for (let i= 1; i < 6; i++) {
//     console.log (i);
// }

// Задание 3
// for (let i = 7; i < 23; i++) {
//     console.log (i);
// }

// Задание 4
// const obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400'
// }
// for (const key in obj) {
//     console.log (`${key} - зарплата ${obj [key]} доларов`)   
// }

// Задание 5

// let n =1000;
// let num = 0;
// while (n >= 50) {
//     n/=2;
//     console.log(n);
//     num++;
// }
// console.log (`Количество циклов: ${num}`);

// Задание 6

// let friday = 5;

// let dayMonth = 31;

// for (let i = friday; i <= dayMonth; i += 7) {
//     console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
// }