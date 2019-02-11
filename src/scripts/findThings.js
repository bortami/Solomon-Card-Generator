//takes card position number and returns corresponding color//

const findCardColor = (colorNumber) => {
    fetch(`http://localhost:8088/colorSelector?id=${colorNumber}`)
        .then(response => response.json())
        .then(cards => {
            console.log(cards[0].color)
        })
}

//finds the cards's position in the Redford Stack
const findCardPosition = (faceParam, suitParam) => {
    fetch(`http://localhost:8089/cardInformation/?suit=${suitParam}&face=${faceParam}`)
        .then(response => response.json())
        .then(cards => {
            console.log("This is the position in the Redford Stack", cards[0].redford)
        })
}
findCardPosition("Seven", "Hearts");

//find's the all face cards that were inputted's CHSD position
const findCHSDPositions = (faceParam, suitParam) => {
    fetch(`http://localhost:8089/cardInformation/?face=${faceParam}&suit!=${suitParam}`)
        .then(response => response.json())
        .then(cards => {
            let cardsinfo = [];
            for (i = 0; i < cards.length; i++) {
                cardsinfo.push(cards[i]);
                console.log(cardsinfo);
            }
            return cardsinfo;
        })
}

const findThree = findCHSDPositions("Three", "Hearts");


// 1. select card //
// 2. determine the card position number
// 3. find 3 other kings, 7s, etc
// 4. determine positoning of the other three
// 5. arrange all 4 cards into CHSD

// 6. use stack position, use next card in chsd sequence
// 7. use next three card's position numbers in CHSD sequence
// 8. last number is the face value of the original