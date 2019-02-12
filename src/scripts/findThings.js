//takes card position number and returns corresponding color//

const findCardColor = (colorNumber) => {
    fetch(`http://localhost:8090/colorSelector?id=${colorNumber}`)
        .then(response => response.json())
        .then(cards => {
            console.log(cards[0].color)
        })
}

//finds the cards's position in the Redford Stack
const findCardPosition = (faceParam, suitParam) => {
    return fetch(`http://localhost:8089/cardInformation/?suit=${suitParam}&face=${faceParam}`)
        .then(response => response.json())
        .then(cards => {
            redposition = cards[0].redford
            console.log(redpostion)
            return redposition
        })
}
// findCardPosition("Seven", "Hearts");

//finds the inputed card's chsd postion
const findCHSDPosition = (faceParam, suitParam) => {
    fetch(`http://localhost:8089/cardInformation/?face=${faceParam}&suit=${suitParam}`)
        .then(response => response.json())
        .then(cards => {
            cards.forEach(singleCard => {
                    selectedchsd = singleCard.chsd_position
                    console.log(selectedchsd)
                    return selectedchsd
                }

            )
        })
}
//returns the chsd position of the first card in the code
const findStartingCard = (selectedchsd) => {
    startingCard = selectedchsd + 1
    console.log(startingCard)
    return startingCard
}

//returns the code snipper of the card
const findCodeSnippet = (faceParam, startingCard) => {
    fetch(`http://localhost:8089/cardInformation/?face=${faceParam}`)
        .then(response => response.json())
        .then(cards => {
                codesnippet = "";
                cards.forEach(singleCard => {
                    if (startingCard === singleCard.chsd_position) {
                        codesnippet += singleCard.redford
                    } else {
                        console.error("not it")
                    }
                    console.log(codesnippet)
                    return codesnippet;
                })
            }

        )

}






findCHSDPosition("Two", "Clubs")


const doStuff = (faceParam, suitParam) => {
    console.log(findCodeSnippets(faceParam, findStartingCard(findCHSDPosition(faceParam, suitParam))));

}
doStuff("Two", "Clubs");
// 1. select card //
// 2. determine the card position number
// 3. find 3 other kings, 7s, etc
// 4. determine positoning of the other three
// 5. arrange all 4 cards into CHSD

// 6. use stack position, use next card in chsd sequence
// 7. use next three card's position numbers in CHSD sequence
// 8. last number is the face value of the original