function greeting(){
    document.write("<br/>" + "Hellow world");
}
greeting.lang = "English";
greeting();
document.write("<br/>" + greeting.lang);


const redFruits = ['strawberry', 'apple', 'cherry', 'cranberries'];
function test(fruit, quantity) {
    
    //if (!fruit) throw('No fruits');
    if (!fruit) document.write("<br/>" + 'No fruits');
    if (!quantity) throw("<br/>" + 'No quantity');
    if (redFruits.includes(fruit)) {
        document.write('red' + '<br/>');
    }
    if (quantity > 10) {
        document.write("<br/>" +  'quantity' + '>=' + quantity);
    }

}
test();

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