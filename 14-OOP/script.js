'use strict';
/*

const Person = function (firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Don't use do this
    // this.calcAge = function () {
    //     console.log(2021 - this.birthYear)
    // }
}

//Step behind the scene using constructor function
// 1. A new empty object created {}
// 2. function is called and 'this' refer to the new object created
// 3. the object is linked to a prototype
// 4. The function is returned

const jienba = new Person('Adama', 1997);
const ndeye = new Person('Ndiouck', 2002);

// Prototype
Person.prototype.calcAge = function () {
        console.log(2021 - this.birthYear)
    }
console.log(jienba instanceof Person);
console.log(Person.prototype);
console.log(jienba.__proto__ ===Person.prototype );

jienba.calcAge();
ndeye.calcAge();
Person.prototype.species = 'Homo Sapiens';

console.log(jienba.species);

console.log(jienba.__proto__);

// Object.prototype (top of prototype chain)
console.log(jienba.__proto__.__proto__);
console.log(jienba.__proto__.__proto__.__proto__);

// Coding Challenge #1
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Ferrari', 95);
const car3 = new Car('Lamborghini', 230);

car1.accelerate();
car2.brake();
car3.accelerate();

*/
////////////////////////////////////////////
// 10. ES6 Classes
/*


class PersonCl {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullname}`);
    }

    get age() {
        return 2021 - this.birthYear
    }

    set fullname(name){
        name.includes(' ') ? this._fullname = name : alert(`${name} is not a full name!`);
    }

    get fullname(){
        return this._fullname;
    }

}

const jienba = new PersonCl('Adama Dieng', 1997)

PersonCl.prototype.cry = function () {
    console.log('😭 😭 😭 😭');
}

jienba.calcAge();
console.log(jienba.age);
jienba.fullname = 'Adama BA';
console.log(jienba.fullname);

jienba.cry();
jienba.greet();
console.log(jienba.__proto__ === PersonCl.prototype);


*/

////////////////////////////////////////////
// 11. Getters and Setters
/*

const account = {
    owner: 'Jienba',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}

*/

/////////////////////////////////////////////
// 12. Static method
/*

class PersonCl {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge(){
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullname}`);
    }

    get age() {
        return 2021 - this.birthYear
    }

    set fullname(name){
        name.includes(' ') ? this._fullname = name : alert(`${name} is not a full name!`);
    }

    get fullname(){
        return this._fullname;
    }
    // Static method
    static hey(){
        console.log('Hey there');
    }

}


const Person = function (firstName, birthYear) {
    console.log(this)
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Don't use do this
    // this.calcAge = function () {
    //     console.log(2021 - this.birthYear)
    // }
}

Person.hey = function () {
    console.log('Hey there ✋')
}

const jienba = new Person('Adama', 2045);
const jienbazumaki = new PersonCl('Adama BA', 2045);
console.log(jienba)
PersonCl.hey()

Person.hey();

*/

//////////////////////////////////////////
// 13. Object.create()
/*

const PersonProto  = {
    calcAge(){
        return 2037 - this.birthYear;
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const jienba = Object.create(PersonProto);
console.log(jienba);
jienba.name = 'Adama';
jienba.birthYear = 2021;

jienba.calcAge();

const ndeye = Object.create(PersonProto);
ndeye.init('Ndeye', 1998);
console.log(`Ndeye is ${ndeye.calcAge()} years old.`);

*/
///////////////////////////////////////////////
// 14. Coding Challenge #2
/*
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS(){
        return (this.speed / 1.6);
    }

    set speedUS(speed){
        this.speed = (speed * 1.6);
    }
    accelerate () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
    };

    brake () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
    };

}

const car1 = new CarCl('Ford', 120 );
console.log(car1.speedUS);
car1.accelerate()
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1.speedUS);
*/

//////////////////////////////////////
// 15. Inheritance between "classes" using function constructor

/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}
// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jienba = new Student('Adama', 1997, 'Computer Science and Cryptography.');
jienba.introduce();
*/
//////////////////////////////////////
// 16. Coding Challenge #3
/*

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
};

const Ev = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.constructor = Ev;
Ev.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
Ev.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with charge of ${this.charge}.`)
}


const car1 = new Ev('Tesla', 120, 23);

car1.accelerate();
car1.brake();
car1.chargeBattery(90)
*/

////////////////////////////////////
// 17. Inheritance between "classes" using ES6 Classes
/*
class PersonCl {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullname}`);
    }

    get age() {
        return 2021 - this.birthYear
    }

    set fullname(name){
        name.includes(' ') ? this._fullname = name : alert(`${name} is not a full name!`);
    }

    get fullname(){
        return this._fullname;
    }

}

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullname} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2021 - this.age} years old, but as student I feel more like ${2021 - this.age + 10 }`)
    }
}

const jienba = new StudentCl('Adama Dieng BA', 1997, 'Cryptographic');
jienba.introduce();
jienba.calcAge();*/

///////////////////////////////////////////////
// 18. Inheritance between "classes" using Object.create()
/*

const PersonProto = {
    calcAge(){
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const penda = Object.create(StudentProto);
penda.init('Penda', 1998, 'Computer Science');
penda.introduce();
penda.calcAge();

*/
/////////////////////////////////////////////////
// 19. Another class Example
/*

class Account {
    // Public fields (instance)
    locale = navigator.language;
    // private  fields (instance)
    #pin;
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thanks for opening account, ${this.owner}`)
    }

    // Public methods
    // Public interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if (this._approveLoan(val)){
            this.deposit(val);
            console.log('Loan approved!');
            return this;
        }
    }

    // Private method
    /!*#approveLoan(val){
        return true
    }*!/
    static helper(){
        console.log('Do you need help?');
    }





}

const acc1 = new Account('Jienba', 'FCFA', 1111);
acc1.deposit(25000);
acc1.withdraw(10000);
// acc1.#approveLoan(121);

Account.helper();
console.log(acc1.#movements)
*/
// Coding Challenge #4


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS(){
        return (this.speed / 1.6);
    }

    set speedUS(speed){
        this.speed = (speed * 1.6);
    }
    accelerate () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    };

    brake () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
        return this;
    };

}

class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge) {
        super(make,speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`Tesla going at ${this.speed} km/h, with charge of ${this.#charge}% .`)
        return this;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    
}

const car1 = new EVCl('Rivian', 120, 23);

car1.chargeBattery(24).brake().accelerate();