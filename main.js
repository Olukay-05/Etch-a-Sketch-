let color = "black";

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", ()=> {
    let size = getSize();
    createBoard(size);
  })

  // colorDiv();
});


const createBoard = (size) => {
  let board = document.querySelector(".container")
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 


  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}


const getSize = () => {
  let input = prompt("What's Your Board Size? ");
  let message = document.querySelector("#message");

  if(input === ""){
    message.innerHTML = "Kindly provide a number!";
  }
  else if(input < 1 || input > 100){
    message.innerHTML = "Kindly provide numbers between 1 and 100!"
  }
  else{
    message.innerHTML = "Now you can Sketch!"
    return input;
  }
}


const colorDiv = (event) => {
  let div = event.target;

  if(color == "random"){
    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
    div.style.backgroundColor = "black";
  }
}

const setColor = (colorChoice) =>{
  color = colorChoice;
}


const resetColor = () => {
  let divs = document.querySelectorAll("div");
  divs.forEach((div)=>{
    div.style.backgroundColor ="white"
  })
}