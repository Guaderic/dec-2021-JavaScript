
/*
- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

/*

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let ValidNames = (str)=>{
    return str.replace('..',' ').replace('---',' ').replace('__', ' ');
};
 console.log(ValidNames(n3));
 console.log(ValidNames(n2));
 console.log(ValidNames(n1));
*/



//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


//
// let RandomArray = ()=>{
//    let arr = [];
//     for (let i = 0; i < 10; i++){
//         arr[i] = Math.floor(Math.random()*100);
//
//     }
//     return arr
// }
// console.log(RandomArray())


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

/*

let numbers = [32, 1, 61, 16, 67, 67, 48, 79, 67, 74];

let SortNums = (arr)=>{
    let sort = arr.sort();
    return sort;
}
console.log(SortNums(numbers));*/


//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

/*let numbers = [32, 1, 61, 16, 67, 67, 48, 79, 67, 74];

let DoubleNums = (arr)=>{
   let double = arr.filter(number=>number % 2==0);
   return double;
}
console.log(DoubleNums(numbers));*/

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

/*
let numbers = [32, 1, 61, 16, 67, 67, 48, 79, 67, 74];

let NumToString = (arr)=>{
    let StrArray = arr.map(word=> word.toString());
    return StrArray;

}
console.log(NumToString(numbers));*/

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]*/


/*let numbers = [32, 1, 61, 16, 67, 67, 48, 79, 67, 74];*/

/*let sortNums = (arr, direction)=>{

    if (direction === 'descen'){
        return arr.sort((a,b)=> b-a);
    }else if (direction === 'ascen'){
        return arr.sort((a,b)=>a-b);
    }
}
console.log(sortNums(numbers,'ascen'))*/



/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration*/

/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

/*

let sortArray = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration)
console.log(sortArray);*/
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

/*
let filterArray = coursesAndDurationArray.filter((value)=>value.monthDuration>5);
console.log(filterArray);*/
