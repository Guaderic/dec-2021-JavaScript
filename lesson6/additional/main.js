
//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


/*
let string = 'наслаждение';

let cutString = (str, n)=>{
    let arr = [];
    while (str.length){
        arr.push(str.substring(0, n));
        str = str.slice(n)
    }

    return arr
}

console.log(cutString(string, 3));
*/




/*
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.*/

/*

let validMail = (email)=>{
    let newEmail = email.toLowerCase();

    let Symb = newEmail.indexOf("@");
    if(Symb < 1) return false;

    let dot = newEmail.indexOf(".");
    if(dot <= Symb + 2) return false;

    if (dot === newEmail.length - 1) return false;

    return true;
}





let em ='some.email@gmail.com'
console.log(validMail(em));*/



//- є масивlet
    /* let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];*/

//відсортувати його в спадаючому порядку за кількістю елементів в полі modules

/*
let SorArr = coursesArray.sort((a,b)=>b.modules.length-a.modules.length);
console.log(SorArr);*/



/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/

/*
 let string = 'Астрономия это наука о небесных объектах';
let count = (str, stringsearch)=>{
 let sum = 0;
    for (const element of str.toLowerCase()) {
        if(element.includes(stringsearch)){
            sum+=1;
        }

    }
  return sum;
}

console.log(count(string,'о'));*/


/*
- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'*/
/*
let string = "Сила тяжести приложена к центру масс тела";

let cutString = (str, n)=>{
   let newStr = str.split(' ').splice(0,n).join(' ');
   return newStr;

}
console.log(cutString(string,5));*/

