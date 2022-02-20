/*
1) Напишіть код, який :
a) додає клас з назвою групи, елементу з ід main_header
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)*/

/*
let txt = document.getElementById('main_header');
let classTxt = txt.classList.add('dec-21');
console.log(txt);*/

/*
let List = document.getElementsByTagName('ul');
for (const element of List) {
    element.style.width = '400px';
};
*/

/*
let link = document.getElementsByClassName('linkList');
for (const element of link) {
    element.style.width = '50%';
};*/

/*
let list = document.getElementsByClassName('listElement2');
for (const element of list) {
    console.log(element.textContent);
};*/

/*
let elements = document.getElementsByTagName('li');
for (const element of elements) {
        element.style.backgroundColor = 'grey';
};*/


// let elements = document.getElementsByTagName('a');
// for (const element of elements) {
//     element.classList.add('anchor');
//     console.log(element);
// };


/*
let elements = document.getElementsByTagName('a');
for (const element of elements){
    if (element.textContent === 'link3'){
        element.style.fontSize = '50px';
    };
};*/

/*let elements = document.getElementsByTagName('a');
for (i = 0; i< elements.length; i++){
    elements[i].classList.add(`element_${elements[i].textContent}`)
    console.log(elements[i])
};*/


/*let subElements = document.getElementsByClassName('sub-header');
let message = prompt('Choose color to sub_header (grey; red; green;)');
for (const element of subElements) {
    if(message === 'grey'){
        element.style.backgroundColor = 'grey';
    }else  if(message ==='red'){
        element.style.backgroundColor = 'red';
    }else if(message ==='green'){
        element.style.backgroundColor = 'green';
    }else {
        alert('Try again!');
    }

};*/

/*
let subElements = document.getElementsByClassName('sub-header');
let message = prompt('Set text color (grey, green, red)');
for (i = 0; i < subElements.length; i++){
    if (message === 'grey' && subElements[i].textContent === 'content 2 segment' ){
        subElements[i].style.color = 'grey';

    }else if(message === 'green' && subElements[i].textContent === 'content 2 segment' ){
        subElements[i].style.color = 'green';

    }else if(message === 'red' && subElements[i].textContent === 'content 2 segment' ){
        subElements[i].style.color = 'red'};

};*/


//отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

/*
let elements = document.getElementsByClassName('content_1');
let textContent = prompt('enter text')
for (const element of elements) {
    element.innerText = `${textContent}`;

}*/

//отримати елементи p та змінити їм padding на 20px
//  let elements = document.getElementsByTagName('p');
// for (const element of elements) {
//     element.style.padding = '20px';
// };


//отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
/*

let elements = document.getElementsByClassName('text2');
for (const element of elements) {
    element.innerText = 'dec-2021';
};*/
