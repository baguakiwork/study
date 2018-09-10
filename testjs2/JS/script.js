document.write("Start");

setTimeout( () => {
    document.write('Inside a callback');
}, 3000);

setTimeout(()=> {
    document.write("Second setTimeout");
}, 0);

doc
