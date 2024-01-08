const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pacman.png") {
    myImage.setAttribute("src", "images/pacman2.jpg");
  } else {
    myImage.setAttribute("src", "images/pacman.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is a Pac-Man, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is a Pac-man, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
