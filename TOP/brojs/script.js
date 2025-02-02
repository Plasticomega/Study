let increment = document.querySelector(".increment")
let count = document.querySelector(".count")
let decrease = document.querySelector(".decrease")
let currentcount = 0
increment.addEventListener("click",()=>{
    currentcount += 1
    count.textContent = currentcount
})
decrease.addEventListener("click",()=>{
    currentcount -= 1
    count.textContent =currentcount
})