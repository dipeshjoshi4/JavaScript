//create a toggle button that changes the screen to dark mode and clicked again in the light mode
//1st time clcik - white to black
//2nd time click - black to white

let modeBtn = document.querySelector("#toggle-btn");
let screen = document.querySelector("body");
let currMode = "light";

//for the click event

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    screen.style.backgroundColor = "black";
    screen.style.color = "white";
  } else {
    currMode = "light";
    screen.style.backgroundColor = "white";
    screen.style.color = "black";
  }
});
