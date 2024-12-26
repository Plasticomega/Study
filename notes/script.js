// let value = "hello"
// let negvalue = -value
// console.log(negvalue )

// let a = 1 + "2"
// console.log(typeof(a))

// console.log(2+2-5*3/5+2)

let tarikh = Date('12222222222')
console.log(tarikh.toString())

Date.now() // You can run this to get time now
// you can give a time and do .getTime to convert it in ms
// to convert date.now() to second divide by 1000 and also wrap in math.floor()
// newDate

/* 
Array ----------------------------------------------------

arrays copy makes a shallow copy
Array.push() adds values to array
array.pop() removes element from last
arr.unshift() inserts at start
arr.shift() removes element from start
arr.incluedes() chcecks if it incluedes the value
arr.indexof() returns the index of elecment
arr.join() adds all elemnts of arry in string
arr.slice() returns portion of array
arr.splice()  
... speread operater , spereads the values
splice manipulates original array , slice does not
array.flat concats all the arrays inside the array
Array.isArray ,  checks array
arr.from ,  creates array
assign to join arrays and objects

Objects------------------------------------------------------------

Constucter makes object singleton (object.Create)
Litreal makes object not singleton

to acess object values you can use dot and use []

obj.keys shows all the keys
obj.values shows all the values
obj.entries shows all the keys , values 
obj.hasOwnProperty checks if it does have property
obj.assign to copy objects and make new objects


functions------------------------------------------------------------



*/

const om = {
    balls: "blue",
    color: 1
}
const {balls: goti} = om 
console.log(goti)



