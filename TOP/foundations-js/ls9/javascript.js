/*const chillan = document.querySelector('.chinese')
const content = document.createElement("div");
content.classList.add("content")
content.textContent = "This is the balls!!"

chillan.appendChild(content);


const div = document.createElement("div","gotya")
console.log(div.getAttribute("p"))
console.log(div)


console.log(document.querySelector(".id"))

div.innerHTML = "<span>Hellow world</span>"*/


const hello = document.querySelector("#container")

const bello = document.createElement("div");
bello.classList.add("balls");

bello.textContent = "balls are heavy , mom's spaggheti"

hello.appendChild(bello);

red = document.createElement("p")
red.textContent = "Hey I'm red!"
red.style.color = "red"
hello.appendChild(red)

blue = document.createElement("h3")
blue.textContent = "I'm a blue h3!"
blue.style.color = "blue"
hello.appendChild(blue)


const pappa = document.querySelector(".boogie")

const papi = document.createElement("div")
papi.style.backgroundColor = "pink"
papi.style.border = "black solid 3px"
pappa.appendChild(papi)

const imadiv = document.createElement("h1")
const imap = document.createElement("pa")

imadiv.textContent = "I am a div"
imap.textContent = "ME TOO!!!"

papi.appendChild(imadiv)
papi.appendChild(imap)


const boton = document.querySelector(".boton")


boton.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

hello.appendChild(boton)

const hoveroverme = document.querySelector(".hoverchangecolor")
hoveroverme.textContent = "hover over me"

hoveroverme.addEventListener("mouseover",changecolor)

function changecolor(e){
    hoveroverme.textContent = "you hoverd"
    e.target.style.color = "blue"
}




















