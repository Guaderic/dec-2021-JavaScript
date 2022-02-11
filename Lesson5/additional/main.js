
//- Дано натуральное число n. Выведите все числа от 1 до n.

/*
function JustNumbers(n){
    if(n > 0)
    {
        JustNumbers(n - 1);
        document.write(n + " ");
    }
    return;
}

JustNumbers(10);*/


//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


/*
function JustNumbers (a, b){

    if (a<b){
        JustNumbers(0,b-1);
        document.write(b)

    }else if(a>b){
        JustNumbers(0,b+1);
           document.write(b + " ");
    }

}

JustNumbers(12, 1);*/



/*
-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo(, 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
*/

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
   // Двожина масиву від 2 до 100


/*
let numbers = [1,3,5,0,4,0,5];

let pushZeroes = (arr)=> {
    let count = 0;
debugger
    for(let i=0; i < arr.length; i++){
        if(arr[i] !== 0) {
            arr[count] = arr[i];
            count ++;
        }
    }

    for(let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
   return arr
};
console.log(pushZeroes(numbers))*/
