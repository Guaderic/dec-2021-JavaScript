

//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
let MinDigit = (a,b,c) =>{
    if (a < b && a < c){
        console.log(a);
    }else if
    (b<a && b<c){
        console.log(b);
    }else{
        console.log(c)}

};


MinDigit(3,7,9)






//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


let MaxDigit = (a,b,c) =>{
    if (a > b && a > c){
        console.log(a);
    }else if
        (b>a && b>c){
        console.log(b);
    }else{
        console.log(c)}

};


MaxDigit(3,7,9)*/



//- створити функцію яка повертає найбільше число з масиву
//let nums = [1,24,756,24,727,748,947,737,42];

/*let MaxDigitArray = (arr) =>{
    let max = arr[0];
    for (const element of arr){
        if (element > max){
            max = element;
        }

    }
    return max;
}

console.log(MaxDigitArray(nums));*/


//- створити функцію яка повертає найменьше число з масиву

/*
let MinDigitArray = (arr)=> {
    let min = arr[0];
    for (const element of arr) {
        if (element<min){
            min = element;
        }

    }
    return min;
}


console.log(MinDigitArray(nums));*/



//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*

let SumDigitInArray = (arr) =>{
    sum = 0;
    for (const element of arr) {
        sum+=element;

    }
    return sum;
}

console.log(SumDigitInArray(nums))*/


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


/*
let MeanValue = (arr) =>{
    let sum = 0;
    let mean = 0;
    for (const element of arr) {
        sum+=element;
    }
    mean = sum/2;
    return mean;
};


console.log(MeanValue(nums));*/


//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// let MaxMin = (...arg)=>{
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg){
//         if(element<min){
//             min = element;
//         }else if(element>max){
//             max = element;
//         }
//     }
//     console.log(max)
//     return min
// }
//
// document.write(MaxMin(8,78,567,98,56))



//- створити функцію яка заповнює масив рандомними числами

/*
let RandomArray = (amount) =>{
    let array = [];
    for(i=0; i<amount; i++){
        array.push(Math.floor(Math.random()*100));

    }
    return array;
}
console.log(RandomArray(20))*/


//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*
let RandomArray = (amount, limit) =>{
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(Math.floor(Math.random()*limit));

    }
    return array;
}
console.log(RandomArray(20, 250));*/


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*
let nums = [1,2,3];
let ArrayReverse = (arr) =>{
    let array = [];
    for (let i = arr.length -1; i >=0; i--) {
        array.push(arr[i]);


    }
    return array;
}
console.log(ArrayReverse(nums))*/
