/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

/*
class User{
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
};
*/

/*let arrUser = [
    new User(142, 'Vasya', 'Petrov', 'adh@.com', 3806759495),
    new User(233,'Vika', 'Serikova', 'ahdg@.com',3809283787),
    new User(244,'Vitya', 'Gromov', 'afhbkg@.com',38092878744),
    new User(245,'Vanya', 'Stepanov', 'adaoubkg@.com',38099668744)
];*/
//console.log(arrUser)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
/*

let filterArr = arrUser.filter((num)=>{
    if (num.id % 2===0){
        return num;
    }
})
console.log(sortArr);*/

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortArr = arrUser.sort((a,b)=>(a.id-a.id));
// console.log(sortArr);

/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/


class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let clientArr =[
    new Client(23,'Ruslan','Tamaev','ajwnd@gmail.com',38067364734,['paintings','paints','brushes','canvas','easel']),
    new Client(30,'Vadim','Kruchev','fhbwb@gmail.com', 38097387646, ['fishing rod', 'hooks', 'fishing line', 'lure', 'coil','hat']),
    new Client(45, 'Nastya', 'Litvinova', 'adjhbaw@gamail.com', 38067356356, ['headphones', 'smartphone', 'clock', 'glasses']),
]
console.log(clientArr)

let sortArr = clientArr.sort((a,b)=>a.order.length-b.order.length);
console.log(sortArr);
