//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
/*

function smallestNumber(num1,num2,num3){
    if (num1 < num2 && num1 < num3){
        console.log(num1);
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else{
        console.log(num3);
    }

}
smallestNumber(3,4,9);*/


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


/*
function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}

largestNumber(657,90,76)*/

//- створити функцію яка повертає найбільше число з масиву


/*
let Arraysnumber =[244, 8736, 6289, 56, 826, 809, 9873, 376, 3789];
function largestNumberOfArray(arr){
    max = arr[0];
    for (const element of arr) {
        if (element > max){
            max = element
        }

    }
    return max
}



console.log(largestNumberOfArray(Arraysnumber));*/

//- створити функцію яка повертає найменьше число з масиву

// let numbers =[244, 8736, 6289, 56, 826, 809, 9873, 376, 3789];
//
// function  minNumbers(arr) {
//     min = arr[0];
//     for (const element of arr) {
//         if (element < min) {
//             min = element;
//         }
//
//     }
//     return min
// }
//
// console.log(minNumbers(numbers));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


/*
let numbers =[244, 8736, 6289, 56, 826, 809, 9873, 376, 3789];

function sumArray(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum+= arr[i];

    }
    return sum;
}
*/

//console.log(sumArray(numbers));


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
function meanArray(arr){
    let mean = sumArray(arr)/ arr.length;
    return mean;
}

console.log(meanArray(numbers));*/


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*function MinMax(){
    let min  = arguments[0];
    let max = arguments[0];
    for (let element of arguments){
        if (element<min){
            min = element;
        }
        else if (element>max){
            max = element;
        }

    }
     console.log(max)
     return min;

}

document.write(MinMax(83,999,123,78));*/

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його

// function ArrayRandom(argum){
//     let arr = [];
//     for(i=0; i<argum; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
//     console.log(arr);
// }
//
// ArrayRandom(34);


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*
function LimitRandom(amount, limit){
   let arr = [];
   for (i=0; i<amount; i++){
       arr.push(Math.floor(Math.random()*limit))
   }
    console.log(arr)
}
LimitRandom(34,347);*/



//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*
let numbers =[244, 8736, 6289, 56, 826, 809, 9873, 376, 3789];
function reverse(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1

}
console.log(reverse(numbers))*/
