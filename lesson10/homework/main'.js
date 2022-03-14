// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


/*
let div = document.getElementById('text');
let button = document.getElementById('btn');
button.onclick = function (){
    div.style.display = 'none';
}
*/


/*
let btn = document.getElementById('btn');
btn.onclick = function (){
    btn.style.display = 'none';
}*/


/*
document.getElementById('btn').onclick = function () {
    let age = document.getElementById('inputAge').value;
    if (age < 18) {
        alert('Тобі нема 18')
    }else if(age > 18){
        alert('Вхід дозволено')
    }
}*/

/*
let menuElement = document.querySelector('.menu');
 let titleElement = menuElement.querySelector('.title');

 titleElement.onclick = function () {
     menuElement.classList.toggle('hidden');
 };
*/


let comments = [
    {name:'Vasya',body:'Lorem ipsum dolor sit amet'},
    {name:'Valera',body:'Et sunt iure aut excepturi temporibus aut dolorem tempore'},
    {name:'Katya',body:'Et vero quibusdam hic odio voluptate hic fugit temporibus'},
    {name:'Mykola',body:'Ut sapiente internos qui dolor labore est dolore ducimus et nemo deleniti?'},
    {name:'Maria',body:'laboriosam odit et pariatur omnis est cumque autem id'}

];

let divWrap = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');


    h.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Закрий мене'


    btn.onclick = () =>{
       p.classList.add('pHidden')

    }
    div.append(h,p,btn);
    divWrap.append(div,hr);

    
}
document.body.appendChild(divWrap);