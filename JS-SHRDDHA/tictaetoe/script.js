let boxes = document.querySelectorAll(".box");
let turnO = true; // playerO  || playerX
let newGameBtn = document.querySelector("#new-btn");
let resetGameBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

const winningPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked the box ");
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
    //we want to check when the button click is there a winning patterrn for that have a function checkWinner()
  });
});

//for after winner announce all the button disabled
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `winner is player ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let patterns of winningPattern) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    //winning conditions
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos1Val) {
        console.log("winner  is the player ", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

//tell all the  winning patterns in array form
// console.log(patterns);

//from this patterns we can get our positions(index) of wiining
// console.log(patterns[0], patterns[1], patterns[2]);

//for geetting which positions we clciked we get the indivual
// console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);

//for knowing inner text of which positions we clciked
// console.log(
//   boxes[patterns[0]].innerText,
//   boxes[patterns[1]].innerText,
//   boxes[patterns[2]].innerText
// );

//there are 3 indiviudla value so we can check that positions value and act accordingly
// let pos1Val = boxes[patterns[0]].innerText;
// let pos2Val = boxes[patterns[1]].innerText;
// let pos3Val = boxes[patterns[2]].innerText;

newGameBtn.addEventListener("click", resetGame);
resetGameBtn.addEventListener("click", resetGame);
