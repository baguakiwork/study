const transactions = [{
    id: "7cb1-e041b126-f3b8",
    seller: "WAL0412",
    buyer: "WAL3023",
    price: 203450,
    time: 1539688433
  },
  {
    id: "1d4c-31f8f14b-1571",
    seller: "WAL0452",
    buyer: "WAL3023",
    price: 348299,
    time: 1539688433
  },
  {
    id: "b12c-b3adf58f-809f",
    seller: "WAL0012",
    buyer: "WAL2025",
    price: 59240,
    time: 1539688433
  }];


const foo = {a:"abc"};
const bar = foo;
const o1 = {a:0, b:[1, 2, 3], c:2};
o1.a = 10;
const o2 = {...o1};
o2.a = 5;


bar.a = "opera";
bar.b = "b";

document.write("<br/>", foo.a, "&nbsp", foo.b);
document.write("<br/>", bar.a, "&nbsp", bar.b);
document.write("<br/>", o1.a, "&nbsp", o1.b.slice(1,3));
document.write("<br/>", o2.a, "&nbsp", o2.b.slice(1,3));

let content1 = "CL";
let content2 = "BD";
console.log("some message %s and one more %s and object %o and number %d", content1, content2, o1, o1.a);
console.log("I am a %c button", "color: white; background-color: orange; padding: 2px 5px; border-radius: 3px");
console.table(transactions, ["id", "price", "seller"]);
console.table(o1);
console.assert(o1.d, "object doesnt exist");


// const input = new Uint8Array(1024*1024);

// const copy = (input) => {return [...input]};
// const copy2 = (input) => {input.map(num=>num+3)};

// let time = performance.now();
// const output = copy2(input);
// time = performance.now() - time;
// document.write('time is in micro = ', time);
// document.write("<br/>", input)


//console.log(output);


// const arr1 = [1,2,5 ,10];
// const arr2 = [];

// function doubleArr(arr1) {
//     return arr2;
// }

// function logArrayElement(element, index, array){
//     document.write('a[' + index + '] = ' + element  +  "<br/>");
// }

// function DoubleArrayElement(element, index, array){
//     return array[index] = element + element; 
// }


// for(let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i]*2); 
// }


// arr1.forEach(logArrayElement);
// arr1.forEach(DoubleArrayElement);

// const arr4 = [...arr1];
// //const arr3 = arr1.map(DoubleArrayElement);


// //document.write("<br/>" + arr1 + "<br/>");
// //document.write("<br/>" + arr3 + "<br/>");
// document.write("<br/>" + arr4 + "<br/>");
// document.write("hello");





// function greeting(){
//     document.write("<br/>" + "Hellow world");
// }
// greeting.lang = "English";
// greeting();
// document.write("<br/>" + greeting.lang);

// const square = function(x) {
//     return x*x;
// }
// const qoob = square;

// document.write("<br/>" + square(8) + "   " +  qoob(5));

// function formalGreeting() {
//     document.write("<br/>" + "How are you?");
// }

// function casualGreeting() {
//     document.write("<br/>" + "What's up?");
// }

// function greet(type, formalGreeting, casualGreeting) {
//     if (type === 'formal') {
//         formalGreeting();
//     } else if (type === 'casual') {
//         casualGreeting();
//     }
// }

// greet('formal', formalGreeting, casualGreeting);


// const redFruits = ['strawberry', 'apple', 'cherry', 'cranberries'];
// function test(fruit, quantity) {
    
//     //if (!fruit) throw('No fruits');
//     if (!fruit) document.write("<br/>" + 'No fruits');
//     if (!quantity) throw("<br/>" + 'No quantity');
//     if (redFruits.includes(fruit)) {
//         document.write('red' + '<br/>');
//     }
//     if (quantity > 10) {
//         document.write("<br/>" +  'quantity' + '>=' + quantity);
//     }

// }
// test();

//document.write("Hello world");






    /*       if (fruit == 'apple' || fruit == 'srawberry') {
        console.log('red')
    } 
    if (redFruits.includes(fruit)){
        console.log('red');
    }
    else console.log('Who knows'); */

/* if (fruit) {
    if (redFruits.includes(fruit)) {
        console.log('red');
        if (quantity > 10) {
            console.log('big quantity');
        }
    } else {
        console.log('No fruit');
        }
}  */