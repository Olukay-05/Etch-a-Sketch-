document.addEventListener("DOMContentLoaded", () => {
  creatBoard(16);

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", ()=> {
    let size = getSize();
    creatBoard(size);
  })
});


const creatBoard = (size) => {
  let board = document.querySelector(".container")
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 


  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div");
    board.insertAdjacentElement("beforeend", div)
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
