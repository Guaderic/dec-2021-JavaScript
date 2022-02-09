//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*
function doubleArg (argum){
    let arg = arguments[0];
    let arg2 = arguments[1];
    if (argum === arg && arg2){
        console.log(arg+arg2)
    }else{
        console.log(arg);
    }

}
doubleArg('hello', 'world')*/


/*
- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/



/*
let num1 =  [1,2,3,4];
let num2 = [2,3,4,5];
function AddingArrays(arr1, arr2){
    let arr3 = [];
    for (i = 0; i < arr1.length; i++){
        console.log(arr3 = (arr1[i] + arr2[i]));

    }

}


console.log(AddingArrays(num1,num2));*/


//Не розумію чому не виходить


/*
- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/



let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];



/*function Keys(arr){
    let arrays = []
    for (i=0; i<arr.length; i++){
        let result = Object.keys(arr[i])
        return result
    }
}

console.log(Keys(array))*/


/*
// function Keys(arr){
//     let arrays = []
//     for (i=0; i<arr.length; i++){
//         let result = Object.values(arr[i])
//         return result
//     }
// }
//
// console.log(Keys(array))*/
