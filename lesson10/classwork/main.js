
/*
- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)


- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку


- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*/



/*
let divOne = document.createElement('div')
divOne.style.margin = '20px';
divOne.innerText = 'Container 1'
document.body.appendChild(divOne);
let divTwo = document.createElement('div');
divTwo.style.margin = '20px';
document.body.appendChild(divTwo);
divTwo.innerText = 'Container 2';



let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
divOne.appendChild(formOne);

let formTwo = document.createElement('form');
formTwo.setAttribute('name','formTwo');
divTwo.appendChild(formTwo);


let inputOne = document.createElement('input');
inputOne.setAttribute('name','inputOne');

let inputTwo = document.createElement('input');
inputTwo.setAttribute('name','inputTwo');

formOne.append(inputOne,inputTwo);

let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree');

let inputFour = document.createElement('input');
inputFour.setAttribute('name', 'inputFour');
formTwo.append(inputThree,inputFour);

let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'Enter'

btn.addEventListener('click', function (){
    console.log(document.forms.formOne.inputOne.value);
    console.log(document.forms.formOne.inputTwo.value);
    console.log(document.forms.formTwo.inputThree.value);
    console.log(document.forms.formTwo.inputFour.value);
})
*/



 /*let inputOne = document.createElement('input');
 let inputTwo = document.createElement('input');
 let inputThree = document.createElement('input');
 let button = document.createElement('button');


 document.body.append(inputOne,inputTwo,inputThree,button);
 button.innerText = 'Create Table';

button.addEventListener('click', function (){
     let row = inputOne.value;
     let cell = inputTwo.value;
     let enterText = inputThree.value;


     function generationTable (row, cell, inner){
     let table = document.createElement('table');
     let divTable = document.createElement('div');

     table.style.border = '1px solid blue';
     divTable.appendChild(table);
     document.body.appendChild(divTable);

     for (let i = 0; i < row; i++) {
         let row = document.createElement('tr');
         row.style.border = '2px solid red';
        for (let j = 0; j < cell; j++) {
             let cell = document.createElement('td');
             cell.style.border = '2px solid green';
             cell.innerText = `${inner}`;
             table.appendChild(row);
             row.appendChild(cell);

         }
     }

     }
     generationTable(row,cell,enterText);

 })

*/


let curseWord = ['козел','виродок' ,'свиня' ,'дурак'];

let divInput = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');

document.body.appendChild(divInput);
divInput.append(input,button);
button.innerText ='Перевірка';

button.addEventListener('click',function (){
    let result = input.value;

    for (const word of curseWord) {
        if (word === result){
            alert('Це погане слово!')
            input.value ='';
            return
        }

    }
    if (result){
        alert('Добре!')
        input.value =''
    }
})
