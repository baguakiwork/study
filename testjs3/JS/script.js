const arr1 = [1,2,5 ,3];
const arr2 = [];

function doubleArr(arr1) {
    return arr2;
}

function logArrayElement(element, index, array){
    document.write('a[' + index + '] = ' + element  +  "<br/>");
}


for(let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]*2); 
}

document.write("<br/>" + arr2 + "<br/>");
arr1.forEach(logArrayElement);






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