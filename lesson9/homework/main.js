/*
Все робити за допомоги js.
- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/


/*
let div = document.createElement('div');
document.body.append(div);

div.classList.add('wrap','collapse', 'alpha', 'beta');
div.style.backgroundColor = 'cornflowerblue';
div.style.color = '#ffff';
div.style.fontSize = '30px';
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eveniet.';
let div2 = div.cloneNode(true);
document.body.append(div2);
*/



/*
- Є масив:
    ['Main','Products','About us','Contacts']
Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.*/
/* let arr = ['Main','Products','About us','Contacts'];
let ul1 = document.body.getElementsByClassName('menu')[0];
for (const item of arr) {
    let li1 = document.createElement('li');
    li1.innerText = `${item}`;
    li1.classList.add('inner');
    document.body.append(li1);
    ul1.append(li1);
}*/


/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/


/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];

for (const item of coursesAndDurationArray) {
    let devElement = document.createElement('div');
    devElement.innerText = `${item.title}-${item.monthDuration}`
    document.body.append(devElement);
}*/



/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.*/

//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}];
//
//
// for (const item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//     document.body.append(divElement);
//     let h1Element = document.createElement('h1');
//     divElement.append(h1Element);
//     h1Element.classList.add('heading');
//     h1Element.innerText = `${item.title}`
//     let pElement = document.createElement('p');
//     divElement.append(pElement);
//     pElement.innerText = `${item.monthDuration}`;
// }