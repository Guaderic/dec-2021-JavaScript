/*
--створити масив з:
    - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
//let arrNum = [0, 1, 2, 4, 6];
//let arrStr = ['lion', 'rhinoceros', 'giraffe', 'hyena'];
//let arr = [0, 1, 2, 4, 6,'lion', 'rhinoceros', 'giraffe', 'hyena', true, false];
//console.log(arrNum);
//console.log(arrStr);
//console.log(arr);


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*
let arr = [];
arr[0] = 'apple';
arr[1] = 'book';
arr[2] = 1;
arr[3] = 2;
arr[4] = true;
arr[5] = false;
console.log(arr);*/


/*
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/


/*
for (let i = 0; i < 10; i++){
    document.write(`<div>Loop</div>`)
}*/
/*
for (let i = 0; i < 10; i++){
    document.write(`<div>${i}Loop</div>`)
}
*/
/*
let i =0;
while( i<20 ){
    document.write(`<h1>hello</h1>`)
    i++
}
*/



/*let i = 0;
while(i<20){
    document.write(`<h1>hello ${i}</h1>`)
    i++
}*/



/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

/*

let nums = [1,2,5,6,7,8,3,456,235,856];
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}*/


/*
let arrStr = ['shrimp','salmon','rice','wasabi','ginger','tuna', 'nori', 'cheese', 'soy', 'cucumber'];
for (let i =0; i < arrStr.length; i++){
    console.log(arrStr[i]);
}*/

/*
let arr = [ true, 'king', false, 9, 8 ,8, 'lord', 1347, 'sword', 'name'];
for (let i=0; i < arr.length; i++){
    console.log(arr[i]);
}*/

/*
let arr = [ true, 'king', false, 9, 8 ,8, 'lord', 1347, true, 'name'];
for (i = 0; i < arr.length; i++){
    if( typeof arr[i] === "boolean" ){
        console.log(arr[i]);
    }
}*/



/*
let arr = [134, 687, 987, true, true, 'Peter', 'Jacob', 'John', 13];
for (i=0; i<arr.length; i++){
    if (typeof arr[i] === 'number'){
        console.log(arr[i]);
    }
}*/

/*
let arr = [123, 758, true, 'Matthew', 'Philip', 'Tomas', 'Andrew', false, 5788, 2000];
for (i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
        console.log(arr[i]);
    }
}*/



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write



/*
let arr = [];
arr[0] = 'hello';
arr[1] = 122;
arr[2] = 6876;
arr[3] = true;
arr[4] = 'loop';
arr[5] = false;
arr[6] = 'planet';
arr[7] = 3333;
arr[8] = false;
arr[9] = 'bye';

for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/

// for (i = 0; i < 10; i++){
//     document.write(`${i}`+' ');
//     console.log([i]);
//
// }


/*
for (i = 0; i < 100; i++){
    document.write(`${i}`+' ');
    console.log([i]);

}*/


/*
for (i = 0; i < 100; i+=2){
    document.write(`${i}`+' ');
    console.log([i]);

}

*/


/*
for (i = 0; i < 100; i++){
    if (i % 2 === 0) {
        document.write(`${i}` + ' ');
        console.log([i]);
    }
}
*/


/*
for (i = 0; i < 100; i++){
    if (i % 2 !== 0) {
        document.write(`${i}` + ' ');
        console.log([i]);
    }
}*/
