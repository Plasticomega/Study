/*const bitch = ['start','balls','cars','poggers']
console.log(bitch[2])

const cats = ["janks","tokii","bokki"]


function getLast(string){
    return string[string.length-1]
}

console.log(cats.map(getLast))

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

let inf = 0
while (inf != 10){
    console.log("meow")
    inf++
}

for (let i=0;i < 10;i++){
    console.log("meow")
}


for(let i=10;i >= 0; i--){
    if(i === 0){
        console.log("UdA AYA LAVDYANNO")
    }else{
        console.log(`FLYING IN ${i} seconds`)
    }
}

const GUESTS_TO_ADMIT = []
const GUESTS_TO_REFUSE = []
const listOfNames = ['emily','sam','anthony','nick','jamal','phil','lola']

for (guests of listOfNames){
    if(guests === "phil" || guests ==="lola"){
        GUESTS_TO_REFUSE.push(guests)
    }else{
        GUESTS_TO_ADMIT.push(guests)
    }
}

console.log(GUESTS_TO_ADMIT)
console.log(GUESTS_TO_REFUSE)


for(let i=2;i <= 10;i++){
    if(i % 2 ===0){
        console.log(i)
    }
}


let j = 0
while(j < 3){
    alert(`number ${j}!`);
    j++
}*/

//write prompt until nmber greater than 100

function isPrime(n){
    for(let i =2; i <= n; i++){
        for(let j = 2; j < n; j++){
            if(i % j == 0){
                console.log(i)
            }
        }
    }
}


isPrime(100)


// step 1 :- create loops that go through numbers
// step 2 :- use floor divisons we need


/* 
run while loop

*/