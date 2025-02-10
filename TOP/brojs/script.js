/*
STATIC KEYWORD----------------------------------------------------------

class User{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}
 
const user1 = new User("Spongebob")

INHERITANCE--------------------------------------------------------------

Use the keyword extends

SUPER------------------------------------------------------------------

super refers to parent of the object

Getter and setter-------------------------------------------------------

class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstname = newFirstName
        }else{
            console.error("First name must be a non-empty string")
        }
    }

    get firstname(){
        return this._firstname
    }
}

const person = new Person("bulla")

console.log(person.firstname)

DESTRUCTURING ----------------------------------------------------------

const Spongebob = {
    name: "bitch",
    age: "legal"
}

const {name , loop} = Spongebob

console.log(name )

SHUFFLE -----------------------------------------------------------------

const cards = ['A',2,3,4,5,6,7,8,9,10,"J","Q","K"];

shuffle(cards);

console.log(cards)

function shuffle(array){
    for(let i = array.length - 1;i>0;i--){
        const random = Math.floor(Math.random()*(i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}

Dates ------------------------------------------------------------------

const date = new Date()

console.log(date.getHours())

Timeout-----------------------------------------------------------------


function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Hello"),3000)
}

startTimer()

let timeoutId;

function clearTimer(){
    clearTimeout(timeoutId)
}

*/



