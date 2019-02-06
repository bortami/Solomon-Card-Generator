//takes card position number and returns corresponding color//

const findCardColor = (colorNumber) => {
    fetch(`http://localhost:8088/colorSelector?id=${colorNumber}`)
        .then(response => response.json())
        .then(cards => {
            console.log(cards[0].color)
        })
}

const findCardPosition = (faceParam, suitParam) => {
    fetch(`http://localhost:8089/cardInformation/?suit=${suitParam}&face=${faceParam}`)
        .then(response => response.json())
        .then(cards => {
            console.log("This is the position in the Redford Stack", cards[0].redford)
        })
}
findCardPosition("Seven", "Hearts");
//solomon code is ===

const putIntoCHSDOrder = (arrayParam) => {
    let CHSDorder = [];
    for (i = 0; i < arrayParam.length; i++) {
        if (arrayParam[i] === 1) {
            CHSDorder.push(arrayParam[i]);
        }
        if (arrayParam[i] === 2) {
            CHSDorder.push(arrayParam[i]);
        }
        if (arrayParam[i] === 3) {
            CHSDorder.push(arrayParam[i]);
        }
        if (arrayParam[i] === 4) {
            CHSDorder.push(arrayParam[i]);
        }
    }
}

const findCHSDPositions = (faceParam) => {
    fetch(`http://localhost:8089/cardInformation/?face=${faceParam}`)
        .then(response => response.json())
        .then(cards => {
            let cardPositions = "";
            for (i = 0; i < cards.length; i++) {
                cardPositions += `[${cards[i].chsd_position}]`;
            }
            console.log(cardPositions);
            putIntoCHSDOrder(cardPositions);
            console.log(newCHSDOrder);
            return cardPositions;
        })
}
const findThree = findCHSDPositions("Three");


// 1. select card
// 2. determine the card position number
// 3. find 3 other kings, 7s, etc
// 4. determine positoning of the other three
// 5. arrange all 4 cards into CHSD

// 6. use stack position, use next card in chase sequence
// 7. use next three card's position numbers in CHSD sequence
// 8. last number is the face value of the original