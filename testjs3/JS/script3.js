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

const a = [11, 12, 13, 14, 15, 16];
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


a.push(17);
a.unshift(9,10);

let it = a[Symbol.iterator]();
let it2 = a.entries();

const c1 = a.concat(b);
const c2 = [...a, ...b];
console.log(c1, c2, c2.indexOf(11));
console.log(c2.find(x => x > 10));
console.log(c2.includes(11));

const stc2 = c2.toString();
const arrstc2 = stc2.split();

console.log(stc2, arrstc2);

for (let i = 0; i < c2.length; i++ ) {
    console.log(i, c2[i]);
};

c2.forEach( (item, index) => {
    console.log(item, index);
}
);

// let i = 0;
// do {
//     console.log(c2[i]);
//     i = i + 1;
// } while(i < c2.length);

const obj1 = {a:1, b:2, c:'three'};

for (let prop in obj1) {
    console.log(prop, obj1[prop]);
    //console.log(obj1[prop]);
}

for (let value of [c2]) {
    console.log(value);
}

for (const [index, value] of c2.entries()) {
    console.log(index, value);
}

let obj2 = {value: 'message text', int: '1,2,3'};
let notobj;
let fn = (a) => [a.value, a.int];
//console.log(fn(obj2));

try {
console.log(fn(notobj)); 
} catch (e) {
    console.log(e.message);
} finally {
    console.log(fn(obj2));
}

const car2 = {
    maker: 'Ford',
    model: 'Fiesta',
    owner: 'Alex',
    drive(own) {
        this.owner = own; 
        console.log(`The owner ${this.owner} Driving a ${this.maker} ${this.model} car!`);
    }
};
const parking = function () {
    console.log(`Parking ${this.maker} The owner ${this.owner}`);
}.bind(car2)


Object.defineProperty(car2, 'color', {
    value: 'blue'
    
})


car2.color = 'red';
console.log(car2.color);
car2.drive('Ivan');
parking();


const win = document.getElementById('win');
win.addEventListener('click', function() {
    alert(this);
}.bind(this))

const el2 = document.getElementById('el');
el2.addEventListener('click', function() {
    alert(this);
}.bind(this))

function doThis(){
    const str = "button 2!";
    console.log(str);
    alert(str);
}
window.onload = () => {
    alert("hi");
}

function loadData(){
    const xhr = new XMLHttpRequest();
    const method = 'GET';
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    xhr.open(method, url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status ===200){
            console.log(xhr.responseText)
        }
    }
    xhr.send();
}

window.addEventListener('keydown', event => {
    console.log(event.type, event.key);
})

window.addEventListener('mousedown', event => {
    console.log(event.type, event.button, event.clientX, event.clientY);
})

const contDiv = document.getElementById('container');
contDiv.addEventListener('click', event => {
    console.log('container');
})

const chDiv = document.getElementById('child');
chDiv.addEventListener('click', event => {
    console.log('child');
})

window.addEventListener('click', event => {
    console.log('window');
})

const tets1 = function(){
    console.log("test 1")
}
const test2 = (name) => {
    console.log(name, 'test 2')
}
tets1();
test2("vasya");

setTimeout( function() {
    console.log(`Run 1`);
    setTimeout( function(){
        console.log(`run 2`);
    }, 2000)
}, 100)

