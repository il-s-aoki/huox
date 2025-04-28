let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/huox.jpg") {
    myImage.setAttribute("src", "images/huox2.jpg");
  } else {
    myImage.setAttribute("src", "images/huox.jpg");
  }
};
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}
myButton.onclick = () => {
  setUserName();
};