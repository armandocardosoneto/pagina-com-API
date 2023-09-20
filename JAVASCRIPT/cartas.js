// const card1 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card";
const card1 = "../IMAGENS/card-1.jpeg";
// const card2 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129711&type=card";
const card2 = "../IMAGENS/card-2.jpeg";
// const card3 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129710&type=card";
const card3 = "../IMAGENS/card-3.jpeg";
// const card4 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129671&type=card";
const card4 = "../IMAGENS/card-4.jpeg";
// const card5 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129671&type=card";
const card5 = "../IMAGENS/card-5.jpeg";
// const card6 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129671&type=card";
const card6 = "../IMAGENS/card-6.jpeg";
// const card7 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129671&type=card";
const card7 = "../IMAGENS/card-7.jpeg";
// const card8 = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=149551&type=card";
const card8 = "../IMAGENS/card-8.jpeg";

const image = document.querySelector(".mainclass-image img");
const cards = [card1, card2, card3, card4, card5, card6, card7, card8];
const buttons = document.querySelectorAll(".mainclass-buttons button");

buttons.forEach(function(btn, idx) {
    btn.addEventListener("click", function() {
        console.log(btn);

        image.src = cards[idx];
    });
});