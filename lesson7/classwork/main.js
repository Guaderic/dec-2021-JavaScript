//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
  /*  function Car (producer, year, maxSpeed, engineCapacity) {
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        this.info = function (){
            console.log(`producer - ${this.producer}`);
            console.log(`year - ${this.year}`);
            console.log(`maxSpeed - ${this.maxSpeed}`);
            console.log(`engineCapacity - ${this.engineCapacity}`);
        };
        this.increaseSpeed = function (newSpeed){
            newSpeed+=maxSpeed;
            return newSpeed;

        };
        this.changeYear = function (newValue){
            year = newValue;
            return newValue;
        };
        this.addDriver = function (driver){
           this.driver = driver;

        };


}*/



/*
- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
*/



/*
class Car{
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    };
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        for (const key in this) {
            console.log(`${key}-${this[key]}`);

        }
    };
    increaseSpeed(newSpeed){
        newSpeed+=this.maxSpeed;
        return newSpeed;
    };
    changeYear(newValue){
        this.year = newValue;
        return newValue;

    };
    addDriver(driver){
        this.driver = driver;
    }
}

let newCar = new Car('model', 'BMW', 2007, 209,2,4);
//console.log(newCar.info());
//console.log(newCar.increaseSpeed(56));
//console.log(newCar.changeYear(1997));
/!*newCar.addDriver('Lena');
console.log(newCar.info())*!/
*/




/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/


class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    };
}

let CindArray=[
    new Cinderella('Margo', 18,37),
    new Cinderella('Bella',17, 36),
    new Cinderella('Mary',17, 35),
    new Cinderella('Elizabeth',17, 38),
    new Cinderella('Kate',17, 36),
    new Cinderella('Bridget',17, 39),
    new Cinderella('Emilia',17, 36),
    new Cinderella('Monika',17, 37),
    new Cinderella('Barbara',17, 36),
    new Cinderella('Avrora',17, 36),

];

class Prince{
    constructor(name, age, foundSoe) {
        this.name = name;
        this.age = age;
        this.foundSoe = foundSoe;
    }

};

let prince = new Prince('Richard',22,35);

/*

let royalCouple = (CindArray, prince)=>{
    for (const element of CindArray) {
        if (element.footSize===prince.foundSoe){
            console.log(`${element.name} will be the bride of the prince!`)
        }

    }

};
console.log(royalCouple(CindArray,prince));
*/


/*
let royalCouple = CindArray.find((element)=>element.footSize===prince.foundSoe)
console.log(royalCouple);

*/

