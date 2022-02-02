
//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

/*let val = 10;
let num = (Math.floor(Math.random()* val));
console.log(num);
// 3, 3, 1, 8, 9, 1, 5, 9, 9, 4
let arr = [3, 3, 1, 8, 9, 1, 5, 9, 9, 4];
let result = 3 + 3 + 1 + 8 + 9 + 1 + 5 + 9 + 9 + 4;
console.log(result);*/


//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    title: 'LOTR',
    numOfPages: 2650,
    genre: 'Fantasy',
}
//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

/*let book2 = {
    title: 'David Copperfield',
    numOfPages: 1350,
    genre: 'novel',
    author: 'Charles Dickens',
}
//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
 let books = [book1, book2];
console.log(books[1]);
console.log(books[0]);*/


//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значення площі зберігати в змінній s.
/*let height = 23;
let width = 10;
s = width * height;
console.log(s);*/


//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//результат помістіть у змінну v.
/*let heightC = 10;
let dC = 4;
let rC = dC / 2;
const PI = 3.14;
let v = PI * rC**2 * heightC;
console.log(v);*/


//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).


/*let n = 3;
let m = 4;
let k2 = (Math.pow(3, 2) + Math.pow(4, 2));
let k = Math.sqrt(k2);
console.log(k);*/