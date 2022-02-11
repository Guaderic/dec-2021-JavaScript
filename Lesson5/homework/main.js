// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let RectangleSquare = (a,b) => a*b;
// console.log(RectangleSquare(3, 4));
//
//
// - створити функцію яка обчислює та повертає площу кола
 const Pi = 3.14;
// let CircleSquare = (r) => Pi*r**2;
//
// console.log(CircleSquare(6));



//- створити функцію яка обчислює та повертає площу циліндру

/*
let CylinderSquare = (r,h) => 2*Pi*r*(r+h);

console.log(CylinderSquare(4,5));*/


//- створити функцію яка приймає масив та виводить кожен його елемент
/*
let array1 = [1, 2, 'hello', 465]
let Arrays = (arr) =>{
    for (const element of arr) {
        console.log(element);
    }
}
Arrays(array1)*/


//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
/*

let Paragraph = (text) => `<p>${text}</p>`
document.write(Paragraph('hello world'))*/


//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


/*let ListCreator = (text) => {
        let LC = `<ul>
         <li>${text}</li>
         <li>${text}</li>
         <li>${text}</li>
         </ul>`
    return LC
}

document.write(ListCreator("Lorem ipsum dolor sit amet"));*/

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


/*
let ListCreator = (text, amount) =>{
    document.write(`<ul>`);
    for (i=0; i<amount; i++){
     document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ListCreator('Lorem ipsum dolor sit amet, consectetur adipisicing.',5);*/


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*
let Array = [1, 2, true, 'hello', false, 'world'];

let ListCreator = (arr) =>{
    for(i = 0; i< arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
}
ListCreator(Array);*/


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*
let arraysObj = [{id:5768765,name: 'Nikita', age: 23}, {id:6875765, name: 'Andrey', age: 25}, {id:8567789, name: 'Katya', age: 27}];

let ObjArray = (arr) =>{
    for (const element of arr) {
        document.write(`<div>ID - ${element.id}; Name - ${element.name}; age - ${element.age}</div>`);

    }
}
ObjArray(arraysObj);*/
