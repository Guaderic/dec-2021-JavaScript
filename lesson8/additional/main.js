//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let arr = [];


function ruleRecursion(element){
    console.log(element);
    let children = element.children;
    for (const child of children) {
        ruleRecursion(child);
        arr.push(child.className);
    }
};
ruleRecursion(document.body);

