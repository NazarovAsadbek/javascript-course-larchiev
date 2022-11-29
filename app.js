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

// Chapter 8. Arrays
/*
const roles = ['admin', 'user', 'superuser']
const userInfo = ['Anna', 25]
console.log(roles.at(-1))

const userNames = new Array('Asadbek', 'Artur', 'Kamil')
console.log(userNames)

function square(el) {
    return el * el;
}
*/

// const users = ['Asadbek', 'Artur', 'Kamil', 'Rishan']
// users[2] = 'Kiril'
// users[5] = 'Shahzod'
// users.unshift('Roma')
// users.pop()

// const roles = ['user', 'admin', 'manager']
// console.log(roles.join('/'))
// console.log(roles.indexOf('admin'))
// console.log(roles.includes('admin'))
// console.log(roles.slice(1, 2))
// console.log(roles.splice(0))
// console.log(roles.reverse())
// console.log(roles.concat(['sysadmin', 'developer']))

// const url = 'auth/user/login'
// const res = url.split('/')
// console.log(res)

/*
const tasks = ['Task 1']
console.log(tasks)

function Add(task) {
    tasks.push(task)
}

function Remove(task) {
    const index = tasks.indexOf(task)
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1)
}

function Prioritize(task) {
    const result = Remove(task)
    if (result) {
        tasks.unshift(result[0])
    }
}


Add('Task 2')
Add('Task 3')
console.log(tasks)
Remove('Task 2')
console.log(tasks)
Prioritize('Task 3')
console.log(tasks)
*/

/* const url = 'https://purpleschool.ru/course/javascript'
function getUrlParse(url) {
    const [protocol, _, host, ...path] = url.split('/')
    console.log(protocol, host, path)
}

getUrlParse(url)
*/


// let arr = ['1', '2', '3', '4'];
// console.log(arr.slice(2, -1));

/* for (let i = 1; i < 10; i++) {
    console.log(`Current balance ${i}$`)
}
*/
/*
const tasks = ['Task 1', 'Task 2', 'Task 3']

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Task 2') {
        continue;
    }
    console.log(tasks[i])
}
console.log('------')
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Task 2') {
        break;
    }
    console.log(tasks[i])
}
*/
/*
const arr = ['!', 'JS', 'love', 'i']
const res = []
for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
}

console.log(res.join(' '))
*/

// for (let i = 1; i < 5; i++) {
//     console.log(`While 1 - ${i}`)
//     for (let j = 1; j < 5; j++) {
//         console.log(`While 2 - ${i}`)
//     }
// }
//
// const score = [5, 10, 0, 15]
// for (const [i, el] of score.entries()) {
//     console.log(i + 1, el)
// }

// const score = [5, 10, 0, 15]
// score.forEach((el, i, item) => {
//     console.log(el, i, item)
// })

// const transactionInUSD = [10, -7, 50, -10, 100]
//
// console.log(transactionInUSD.map((el, i, arr) => {
//     return el * 11050
// }))

// const prices = [[100, 200], [120, 100], [200, 350]]
//
// const deltaCPrices = prices
//     .filter(i => i[1] > i[0])
//     .map(i => i[1] - i[0])
// console.log(deltaCPrices)

// const operations = [100, -20, 7, -30, 50]
//
// const res = operations.reduce((acc, val) => acc + val, 0)
//
// console.log(res)

// const users = ['Asad', 'Kamil', 'Ara', 'Rishan']
// const transactions = [50, 50, -75, 24]
//
// console.log(users.sort())
// console.log(transactions.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1
//     }
// }))
// console.log(transactions.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1
//     }
// }))

// const arr = [1, 2, 3, 4, 5];
//
// console.log(arr)
// console.log(new Array(1, 2, 3, 4, 5))
// console.log(new Array(5))
// console.time('time')
// const arr = Array.from({length: 1000000}, (cur, i) => i + Math.random() * 100000)
// for (let i in arr) {
//     console.log(i)
// }
// console.timeEnd('time')
//
// const arr3 = Array.from({length: 5}, (cur, i) => i + 1)
// console.log(arr3)


// const test = 'test1234567'
//
// console.log(test.slice(0, -5))



