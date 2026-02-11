// const variable = 'property'; lets go

// function Player(name, marker) {
//   if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function() {
//     console.log(this.name)
/* This is how you can create new objects using constructors also the !new.target is to
catch errors when you don't use the new keyword while generating new constructor*/
//   };
// }

// function Book(name,author,pages,read){
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return `${this.name} by ${this.author}, ${this.pages} pages, ${this.read}`
//     }
// }

// let pop = new Book('The adventures of pop','Tim','290','Not read')

// Object.getPrototypeOf(pop) === Book.prototype;

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}'`);
// };

// Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// // Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// const player1 = new Player('steve', 'X');
// const player2 = new Player('also steve', 'O');

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'

//you can make an object inherit another objects properties in this way



