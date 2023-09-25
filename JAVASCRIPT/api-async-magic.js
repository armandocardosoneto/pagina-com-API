const showCardBtn = document.querySelector(".show-card");
const cardName = document.querySelector(".card-name");
const cardType = document.querySelector(".card-type");
const cardImage = document.querySelector(".card-image");
const ApiUrl = "https://api.magicthegathering.io/v1/cards";

showCardBtn.addEventListener("click", getCards);

async function getCards() {
    const path = "cards";
    // const pageSizeString = "?pageSize";
    // const countCards = 10;
    // const endPoint = apiUrl + path + pageSizeString + countCards;
    const endPoint = apiUrl + path;

    try {
        const response = await fetch(endPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();
        console.log(result);

        const thirdCard = result.cards[2];
        console.log(thirdCard);

        const thirdCardName = thirdCard.name;
        console.log(thirdCardName);

        const thirdCardType = thirdCard.type;
        console.log(thirdCardType);

        const thirdCardImage = thirdCard.imageUrl;
        console.log(thirdCardImage);

        cardName.innerText = thirdCardName;
        cardType.innerText = thirdCardType;
        cardImage.src = thirdCardImage;
    }
    catch(error) {
        console.error("Error", error);
    }
}
// getCards();