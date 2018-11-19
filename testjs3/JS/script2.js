let value = 5;
const arr = [1, 2, 3, 4, 5];
let str =`<br/> string    with value ${value}`;
const arr2 = Array(1,2,3,4,5,6,7);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.gender = gender;
}

Person.prototype.setGender = function (gender) {
    this.gender = gender;
}

Person.prototype.getGender = function () {
    return this.gender;
}

Person.prototype.getFullname= function() {
    return (this.firstName + " " + this.lastName);
}

function User (firstName, lastName, email, password) {
    Person.call (this, firstName, lastName)
    this.email = email;
    this.password = password;
}

User.prototype = Object.create(Person.prototype);
User.prototype.setEmail = function (email) {
    this.email = email;
}
User.prototype.getEmail = function() {
    return this.hello;
}

User.prototype.getFullname = function (){
    return "User name:" + 
            this.firstName + " " + 
            this.lastName + " " +
            this.password + " " +
            this.email;
}

const user = new User("Alex", "slava", "slava@gmail.com", "qwerty");


Person.hello = () => document.write("<br/>", "Hello_10");

const per = new Person("Alex", "TV");

per.setGender("mail");
user.setGender("female");

const fun = fun => fun*fun; 

document.write(str, "<br/>", fun(5), "<br/>", str.length, "<br/>", arr.slice(2));

document.write("<hr/>")
arr.forEach(e => document.write(e));


arr2.push(25);
arr.hello = () => 'hello1';
arr.hellow = (x) => document.write(x);

document.write("<hr/>", arr);
document.write( arr.hello(), "<hr/>");
arr.hellow("My word");
Person.hello();

document.write("<hr/>", per.lastName, per.getFullname());
document.write("<hr/>", user.getFullname(), user.getGender());
console.log(Person);
console.log(per);
console.log(user);