/*function Balls(x,y){
    c = x+y
    return c + " is the number of balls i got"
}

console.log(Balls(8,2))


function random(number = 20){
    return Math.floor(Math.random()*number)
}

let randomNumber =random()
console.log(randomNumber)

function scope(){
    let nall = 200;
    console.log(nall)
}

scope()

The variables inside a function cannot be used anywhere else in code , this concept is called scope


function callstr(name){
    return console.log(`Hello ${name}!, Nice to meet you`)
}

callstr(100);

function alertDaString(givenstring = 'enter a string pussyboy'){
    alert(givenstring)
}

alert()

function checkBalls(ass){
    if(ass === 1){
        console.log("congrats you got balls")
    }
    else{
        confirm("you dont got balls")
    }
}

checkBalls(2)

function sayHello(){
    alert("hello")
}

let x = sayHello
x()

function choice(question,yes,no){
    if (confirm(question)) yes()
    else no()
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

choice("Do you have balls",showOk,showCancel)

let age = prompt("What is your age?", 18);

if (age < 20){
    function check(){
        alert("ho yeah")
    }
}
else{
    function check(){
        alert("oh no")
    }
}

let welcome = check
welcome()

*/

let name = (x)=> alert(`Hello ${x}`);
name("balls")