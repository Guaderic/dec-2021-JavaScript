//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let arr = [];

let rule = document.getElementById('wrap');

function ruleRecursion(element){
    console.log(element);
    let children = element.children;
    for (const child of children){
        if (child.classList.value !== ''){
                ruleRecursion(child);
                arr.push(child.className);
            }
    }

};
ruleRecursion(rule);
let array = (arr.join(' '));
console.log(array.split(' '));

