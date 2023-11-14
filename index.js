function rollTheDice(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// first player dice's images//

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var  randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randoImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randoImageSource2);





if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = player1 + " wins! 🚩"
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = player2 + " wins! 🚩"
}

else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}

}


// edit names

let player1 = "Player1";
let player2 = "Player2";

function editnames(){
    player1 = prompt("Enter Player 1 name: ");
    player2 = prompt ("enter Player 2 name" );

    if(player1.length<1 || player2.length<1){
        alert("Please enter a valid name");
        return;
    }

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}