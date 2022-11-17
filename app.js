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

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
// Результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours)); 
console.log('Стоимость работ: ' + projectHours * payRateUSD);
