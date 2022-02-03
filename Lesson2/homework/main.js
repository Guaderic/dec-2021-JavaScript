// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).



// let time = Math.round(Math.random()*60)
// if (time <= 15){
//     console.log('it\'s the first quarter of an hour');
// }
// else if (time <= 30){
//     console.log('it\'s the second quarter of an hour');
// }
// else if (time <= 45){
//     console.log('it\'s the third quarter of an hour');
// }
// else if (time <= 59){
//     console.log('it\'s the fourth quarter of an hour');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


/*
let day = Math.floor(Math.random() * 32) + 1;
if (day <= 10){
    console.log('first decade');
}
else if (day <= 20){
    console.log('second decade');
}
else if (day <= 31){
    console.log('third decade');
}*/


/*
- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/


/*let test = confirm('true') ? 'Вірно':'Невірно';
console.log(test);*/


/*
let test;
if (confirm('true')){
    test = 'Вірно';
} else{
    test = 'Невірно';
}
console.log(test);*/


//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

/*
let a = +prompt('Введіть число')
if (a !== 0){
    console.log('Вірно')
}
else {
    console.log('невірно');
}*/


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


/*
let day = +prompt('Будь ласка введіть вибраний вами порядковий номер дня тижня');
switch (day){
    case 1:
        console.log('Понеділок: Сьогодні у вас запланована зустріч о шостій');
        break;
    case 2:
        console.log('Вівторок: Сьогодні у вас с вашою дружиною річниця. Нема за що)');
        break;
    case 3:
        console.log('Середа: Сьогодні у вас запланований похід у спортзал.');
        break;
    case 4:
        console.log('Четвер: Сьогодні ви хотіли зварити новий сорт пива. Бажано барлівайн)');
        break;
    case 5:
        console.log('Пятниця: Сьогодні зустріч с друзями)');
        break;
    case 6:
        console.log('Суббота: Я розумію... але заплановане генеральне прибирання дому');
        break;
    case 7:
        console.log('Неділя: Сьогодні у вас запланований відпочинок з сім\'єю');
        break;
    default:
        console.log('Введіть існуючий порядковий номер дня тижня')
}*/


//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

/*
let LeapYear = +prompt('Введіть на вибір любий рік');
if (LeapYear % 4 === 0) {
    console.log('Рік високосний');
}else{
    console.log('Рік не високосний');
}*/


//(+prompt('Введіть на вибір любий рік') % 4 === 0) ? console.log('Рік високосний') : console.log('Рік не високосний');


//- Використовючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


/*
let titleJS = prompt('Яка "офіційна" назва JavaScript?')
if (titleJS === 'ECMAScript'){
    console.log('Правильно!');
}else {
    console.log('Не знаєте? ECMAScript!');
}*/
