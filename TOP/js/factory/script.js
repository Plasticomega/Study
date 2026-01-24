function Add(firstNumber){
    const first = firstNumber
    return function secondNumber(secondNumber){
        const second = secondNumber
        return first + second
    }
}

const add10 = Add(10)

console.log(add10(50))


const array = ["mango","banana","apple"]

const [ firstEle, zerothEle] = array;

console.log(firstEle,zerothEle)


/*
 Ground rules for modules
 - Self contained module - everything to do with module is inside moudle
 - No global variables 
 - Cannot manage more than one thing
 -Separation of concerns
 -DRY code DONT REPEAT YOURSELF
 - efficient DOM usage
 (very few selections)
 -no memory leaks 
*/
