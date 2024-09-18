// // let boong = document.querySelector('.boong');

// // boong.addEventListener('keydown',()=>{boong.style.color = 'red'})
// // boong.addEventListener('keyup', ()=> {boong.style.color = 'white'})

// function camelize(str) {
//   return str
//     .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//     .map(
//       // capitalizes first letters of all array items except the first one
//       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }


// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// function filterRangeInPlace(arr,a,b){
//   //take an array in arr
//   //check for the numbers between a and b 
//   //remove the numbers between a and b
//   /*arr.forEach(Element => {
//     if(Element > a && Element < b){
//       console.log(Element)
//     }
//   });*/
//   arr.filter((Element,index)=>{
//     if(Element > a && Element < b){
//       arr.splice(Element)
//     }

//   })
// }

// let arr = ["HTML","Javascript","CSS"];

// function copySorted(arr){
//   return arr.slice()
// }


// let sorted = copySorted(arr)

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((name)=> name.name)

// console.log(names)

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 }

// let users = [john,pete,mary]

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}` 
// }));

// console.log(usersMapped[0].id)

// console.log(usersMapped[0].fullName)

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(users){
//   return users.sort((a,b)=> a.age - b.age)
// }

// console.log(sortByAge(arr))
// function getAverageAge(users){
//   return users.reduce((a,b)=>a.age+b.age,0)
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAverageAge(arr))

// function unique(arr) {
//   arr.filter((value)=> {if(value == value){}})
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];