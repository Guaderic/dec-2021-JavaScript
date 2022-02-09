//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*
function squareRectangle(a, b){
    square = a * b;
    return square;
}


console.log(squareRectangle(4,6));*/

//- створити функцію яка обчислює та повертає площу кола з радіусом r

/*
const PI = 3.14;
function circleSquare(r){
    S = PI * r**2;
    return S;
}

console.log(circleSquare(8));*/

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// const PI = 3.14;
// function cylinderSquare(r, h){
//     S = 2*PI*r* (r + h);
//     return S;
// }
// console.log(cylinderSquare(4,9));

//Створити функцію яка приймає масив та виводить кожен його елемент
/*

let arrNames =['Vasya', 'Kolya', 'Nikita', 'Olya', 'Katya'];
function arrayIterator(arr){
    for (const i of arr) {
        console.log(i);
    }
}

arrayIterator(arrNames);*/


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*
function paragraphCreator(text){
    p = `<p>${text}</p>`
    document.write(p);
}

paragraphCreator('«It doesn’t matter how slow you go, so long as you do not stop»');
*/

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function listCreator (text){
//     LC =`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//          </ul>`
//     document.write(LC);
// }
// listCreator('Hello Okten');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*

function ListLoop(text,amount){
    document.write(`<ul>`)
      for (i=0; i < amount; i++){
          document.write(`<li>${text}</li>`);
      }
    document.write(`</ul`)
}

ListLoop('Hello Okten',7)*/

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


//let ListArray=[false, 'Vasya', 'Kolya',56, 'Nikita', 809, true, 'Olya', 'Katya'];

/*
function ListCreatorForArr (arrs){
   document.write(`<ul>`)
   for (i=0; i< arrs.length; i++){
      document.write(`<li>${arrs[i]}</li>`)
   }
   document.write(`</ul>`)

}



ListCreatorForArr(ListArray);*/


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arraysObj = [{id:5768765,name: 'Nikita', age: 23}, {id:6875765, name: 'Andrey', age: 25}, {id:8567789, name: 'Katya', age: 27}];
//
//
// function Objects(arrs){
//    for (const ar of arrs) {
//
//       document.write(`<div>id - ${ar.id}; name- ${ar.name}; age- ${ar.age}</div>`)
//
//    }
// }



//Objects(arraysObj)