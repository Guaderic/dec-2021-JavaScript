/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/


/*let hello = 'hello world';
console.log(hello.length);

let lorem = 'lorem ipsum';
console.log(lorem.length);

let JScript = 'javascript is cool';
console.log(JScript.length);*/


/*- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/

/*let strWorld = 'hello world';
console.log(strWorld.toUpperCase());

let strLorem ='lorem ipsum';
console.log(strLorem.toUpperCase());

let strScript = 'javascript is cool';
console.log(strScript.toUpperCase());*/


/*
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
*/

/*

let strWorld = 'HELLO WORLD';
console.log(strWorld.toLowerCase());

let strLorem ='LOREM IPSUM';
console.log(strLorem.toLowerCase());

let strScript = 'JAVASCRIPT IS COOL';
console.log(strScript.toLowerCase());*/


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


/*
let strDirty =' dirty string  ';
let str = strDirty.replaceAll(' ','');
console.log(str);
*/


/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']*/
/*

let str = 'Каждый охотник желает знать';

let stringToArray = (str)=>(str.split(' '));

let arr = stringToArray(str);
document.write(arr);
console.log(arr);*/




/*
- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/

/*

let delete_characters = (str, index)=>{
    return str.substring(str, index);
}

let str = 'Каждый охотник желает знать'
document.write(delete_characters(str, 7));*/

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str = "HTML JavaScript PHP";
document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/

/*

let insert_dash = (str)=>{
    let newStr = str.split(' ').join('-').toUpperCase()
    return newStr;
};

let str = "HTML JavaScript PHP";
document.write(insert_dash(str));*/


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

/*
let fnstr = (str)=> {
    return str[0].toUpperCase() + str.substring(1)
}
let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nobis!';
console.log(fnstr(str));*/


//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
/*
let capitalize = (str)=>{
  return str.split(' ').map(upper=>upper.charAt(0).toUpperCase()+upper.slice(1)).join(' ')
}

let str = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nobis!'
console.log(capitalize(str))*/
