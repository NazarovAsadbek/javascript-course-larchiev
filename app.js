/*
	let name1 = 'Asadbek';
	let lastName1 = 'Nazarov';
	const name2 = 'Artur';
	const lastname2 = 'Pirojkov';

console.log('Hello world!', lastName1, name1, name2, lastname2);
*/

/*
Операторы
  
Оператор - это внутренняя функция в JavaScript
 
Операторы бывают:
   1. Операторы присваивания
   2. Операторы сравнения
   3. Арифметические Операторы
   4. Битовые Операторы
   5. Логические Операторы
   6. Строковые Операторы
   7. Тернарный Оператор
   8. Оператор запятая
   9. Унарные Операторы
   10. Операторы отношения

*/

/*3.Арифметические операторы
	const [width, height] = [10, 5];
	const space = width * height;
	const volume = 2 ** 3; // Степень
*/

/*6.Арифметические операторы
	const city = 'Tashkent';
	const street = 'Chilanzar';
	const home = 5;
*/

/*6. Оператор присваивания
	let age = 22;
	age += 1; // Это короткая agge = age + 1;
	age *= 2; // Это короткая agge = age * 2;
	age /= 2; // Это короткая agge = age / 2;

	age++ // age = age + 1
	age-- // age = age - 1
*/

/*6. Операторы сравнения
	const vasya = 20;

	console.log(23 > vasya);
	console.log(23 >= vasya);
	console.log(23 < vasya);
	console.log(23 <= vasya);
	console.log(23 == vasya);
	console.log(23 === vasya);
*/


/*10. Операторы отношения
	let a;
	let b;
	c = b = 41 + 1;
	console.log(c);
	console.log(b);
*/


// Типы данных

// const age = 22; // Примитив === Не мутабелен. При изменение, предыдущее значение очищатся и записывается новое
// const user = {name: 'Asadbek', age: '22'} // Объекты == Мутабельны 

/* 
	// Примитивные типы:
	const age = 22; // Числа
	const surname = 'Назаров'; // Строки 
	const isAdmin = true; // Булево значения
	const phone = undefined; let data; // Не заданное значение
	const result = null; // Пустое значение
	const admin = Symbol('Admin'); // Уникальное неизменное значение
	const big = BigInt(99999999999999999n) // Работа с большими числами
	console.log(typeof big, typeof admin);
*/

// const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;
// // Результат
// console.log('Смогу ли я работать? ' + (availableHours > projectHours));
// console.log('Стоимость работ: ' + projectHours * payRateUSD);


// const role = 'manager';
//
// if (role === 'manager') {
//     console.log('Менеджер')
// } else if (role === 'admin') {
//     console.log("Админ")
// } else if (role === 'ceo') {
//     console.log('CEO')
// } else {
//     console.log('Мы тебя не знаем!')
// }

// switch (role) {
//     case "manager":
//     case "admin":
//         console.log('Админ')
//         break
//     case "ceo":
//         console.log('CEO')
//         break
//     default:
//         console.log('Мы тебя не знаем!')
// }

// const bmwX3Price = 100000;
// const fordFocusPrice = 10000;
// const budget = 20000;
// console.log(`Я хочу купить ${ budget > bmwX3Price ? 'БМВ' : 'ФОРД ФОКУС' }`)


// const question = 'Сколько будет 7 + или - 15';
// const request = prompt(question, 0)

// 1 вариант
// Number(request) === 22 || Number(request) === -8 ? console.log('Успех') : console.log('Провал')
// 2 вариант
// switch (true) {
//     case request === 'Я не робот':
//     case Number(request) === 22:
//     case Number(request) === -8:
//         console.log('Успех')
//         break;
//     default:
//         console.log('Вы робот')
// }

//
// let username = '';
// console.log(username || 'Default username');
// console.log(true && 'd' ?? '');

// function logName(name) {
//     console.log(`Моё имя ${name}`)
// }
// logName('Asadbek')

// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month;
// }
//
// const dep1 = countDepositSum(534, 12, 0.20)
// console.log(dep1)
// const poft = function (num) {
//     return num * num
// }
// console.log(poft(2))
// const powerOfTwo = num => num * num
// console.log(powerOfTwo(35))



































