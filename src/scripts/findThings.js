//takes card position number and returns corresponding color//

const findCardColor = (colorNumber) => {
    fetch(`http://localhost:8088/colorSelector?id=${colorNumber}`)
        .then(response => response.json())
        .then(cards => {
            console.log(cards[0].color)
        })
}


//
