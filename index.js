function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
randomNumber1 = getRandomInt(6);
randomNumber2 = getRandomInt(6);

if(randomNumber1 == 1) {
    document.getElementById("img1").src = "dice1.png";
} else if(randomNumber1 == 2) {
    document.getElementById("img1").src = "dice2.png";
} else if(randomNumber1 == 3) {
    document.getElementById("img1").src = "dice3.png";
} else if(randomNumber1 == 4) {
    document.getElementById("img1").src = "dice4.png";
} else if(randomNumber1 == 5) {
    document.getElementById("img1").src = "dice5.png";
} else if(randomNumber1 == 6) {
    document.getElementById("img1").src = "dice6.png";
}

if(randomNumber2 == 1) {
    document.getElementById("img2").src = "dice1.png";
} else if(randomNumber2 == 2) {
    document.getElementById("img2").src = "dice2.png";
} else if(randomNumber2 == 3) {
    document.getElementById("img2").src = "dice3.png";
} else if(randomNumber2 == 4) {
    document.getElementById("img2").src = "dice4.png";
} else if(randomNumber2 == 5) {
    document.getElementById("img2").src = "dice5.png";
} else if(randomNumber2 == 6) {
    document.getElementById("img2").src = "dice6.png";
}

const sum = document.getElementById("sum");
sum.innerHTML = randomNumber1 + randomNumber2;

function refreshPage() {
    window.location.reload()
}