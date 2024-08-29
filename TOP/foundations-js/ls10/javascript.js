//https://javascript.info/array-methods


/*let user = {};
user.name = 'john'
user.age = 40;

let key = prompt("what do you want")
alert(user[key])
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "-1": "USA"
  };
  
  for (let code in codes) {
    alert( -code ); // 49, 41, 44, 1
  }


function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])=== 'number'){
            obj[key] = obj[key]*2
        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)

1) take array
2) create new array 
3) apply for in loop to the new array and triple those numbers
4) add all the numbers in array using the for in loop again


let array = [2,5,6,4,9,3]


function sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }

console.log(sumOfTripledEvens(array))


/* the map function allows you to create a function that calls back another 
function 

let input = document.querySelector('.input')


let arr3 = [1,2,3,5,2,1]
let newarr3 = arr3.reduce((h1,h2)=>{
    console.log(h1)
    return h1+h2
})

console.log(newarr3)


/* 
In reduce method the h1 is the initial value,(it can also be pre determined)
in this arr3 it is 1, and h2 is the value next to it
in the second time it runs h1 becomes h1+h2 and the h2 becomes number next to it
*/

//you can also use delete on objects

//arr.slice can also be used to create a copy of arr

