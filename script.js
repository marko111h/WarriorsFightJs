///alert("Choose Your Fighter");
let light1 = false;
let light2 = false;
let light3 = false;
let light4 = false;
let onlyTwoPlayers = 0;
let whoplay = [];
console.log(whoplay);

const bane = document.querySelector("#bane");
const dragan = document.querySelector("#dragan");
const recko = document.querySelector("#recko");
const lalat = document.querySelector("#lalat");
const startButton = document.querySelector("#start");
const closeModal = document.querySelector("#closemodal");

if (onlyTwoPlayers < 2) {
  startButton.addEventListener("click", (event) => {
    console.log("start");
    console.log(fetch("http://localhost:4000/warriorsfight"));
    fetch("http://localhost:4000/warriorsfight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}
console.log(lalat);

function one() {
  if (!light1) {
    bane.style.backgroundColor = "lightgreen";
    light1 = true;
    whoplay.push(1);
    console.log(whoplay);
    onlyTwoPlayers++;
    console.log(onlyTwoPlayers);
  } else {
    bane.style.backgroundColor = "gray";
    light1 = false;
    whoplay.pop(1);
    console.log(whoplay);
    onlyTwoPlayers--;
    console.log(onlyTwoPlayers);
  }
}
function two() {
  if (!light2) {
    dragan.style.backgroundColor = "lightgreen";
    light2 = true;
    whoplay.push(2);
    console.log(whoplay);
    onlyTwoPlayers++;
    console.log(onlyTwoPlayers);
  } else {
    dragan.style.backgroundColor = "gray";
    light2 = false;
    whoplay.pop(2);
    console.log(whoplay);
    onlyTwoPlayers--;
    console.log(onlyTwoPlayers);
  }
}
function three() {
  if (!light3) {
    recko.style.backgroundColor = "lightgreen";
    light3 = true;
    whoplay.push(3);
    console.log(whoplay);
    onlyTwoPlayers++;
    console.log(onlyTwoPlayers);
  } else {
    recko.style.backgroundColor = "gray";
    light3 = false;
    whoplay.pop(3);
    console.log(whoplay);
    onlyTwoPlayers--;
    console.log(onlyTwoPlayers);
  }
}
function four() {
  if (!light4) {
    lalat.style.backgroundColor = "lightgreen";
    light4 = true;
    whoplay.push(4);
    console.log(whoplay);
    onlyTwoPlayers++;
    console.log(onlyTwoPlayers);
  } else {
    lalat.style.backgroundColor = "gray";
    light4 = false;
    whoplay.pop(4);
    console.log(whoplay);
    onlyTwoPlayers--;
    console.log(onlyTwoPlayers);
  }
}
bane.addEventListener("click", (event) => {
  one();
});
dragan.addEventListener("click", (event) => {
  two();
});
recko.addEventListener("click", (event) => {
  three();
});
lalat.addEventListener("click", (event) => {
  four();
});

/// modal

closeModal.addEventListener("click", (event) => {
  let modalWindow = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");

  modalWindow.style.display = "none";
  overlay.style.display = "none";
});
