function double(number) {
    return number + number;
}

const copy = function(number) {
    return number + number;
}

const dod = number => {
    return number + number;
}

const ar = [1,2,3,4,5];

const summparameter = (ar) => {
    
    return ar.reduce((acc, current) => acc + current);
}

const doSomething = () => {
    return ['Roger', 6, 7];
}

const [name, age, id] = doSomething();

document.write(double(4), "   ", copy(5), "  ", dod(8), summparameter([1, 2, 3]));

console.log(name, age, id);

const car = {
    brand: 'Ford', 
    model: "Fiesta",
    start: function() {
        console.log(`Started ${this.brand} ${this.model}`);
    
    },
    stop: function() {
        console.log(`Stopped ${this.brand} ${this.model}`);
    }
}

car.start();
car.stop();

const test = {
    fn: function() {
        console.log(this)
    },
    arrFn: () => {
        console.log(this)
    }
}

test.fn();
test.arrFn();
let k = (function (a,b) {
    return(a+b);
} )(5, 4);

console.log(k)

const myFunction = () => ({value: "test", id: "123"});
const obj = myFunction();
console.log(obj.id, obj.value);

const bark = dog => {
    const say = `${dog} barked`;
    (()=> console.log(say))();
}

bark('Roger');

const prepareBark = dog => {
    const say = `${dog} barked`;
    return () => {
        console.log(say);
    }
}

function construct (house) {
    return (name) => {
        console.log(`this is my ${house}  with ${name} house `);
    }
}

const myhouse = construct("hat"); 

const sharik = prepareBark("Sharik");
sharik();

console.log(prepareBark('Alex'));
console.log(construct());

myhouse("sister");

let y = "string";

const a0 = [];
const a1 = [1,2,3];
const a2 = Array.of(1,2,3,4);
const a3 = Array(6).fill(1);
const a4 = Array(10).fill(y, 3, 5);

console.log(a0, a1, a2, a3, a4);

console.log(Array.of(1,2,3).fill(0));
console.log(a4.length);

function first() {
    console.log(33);
    setTimeout( function () {
        console.log(1);}, 100
    )
  
}

function second() {
    console.log(2);
}
first();
second();

// function doHomework(subj, callback) {
//     alert(`Starting my ${subj} homework.`);
//     callback();
// }

// function alertFinished(){
//     alert("Finished something");
// }

// doHomework('Math', alertFinished);

const a = [11, 12, 13];
const b = [5, 6, 25];
const testing = (en, ind, arr) => {
    return en > 10 && ind < 5 && arr.length ==3 ;
};

function doub (el, ind) {
    return el*(ind+1);
}

function filt (el) {
    return el > 10;
}

function acc(accumulator, currentV, currentI, array) {
    return accumulator + currentV;
}

console.log(a.every(testing));

console.log(a.map(doub));

console.log(a.filter(filt));

console.log(a.reduce(acc, 0));
a.forEach(el => el*2);
console.log(a);

for (let i of a) {
    console.log(i);
}

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}