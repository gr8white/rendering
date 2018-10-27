
function createSingleCard (pokerHand) {
  // HINT: You can use <img /> tags that point to the card images in the /cards folder
  return `
        <div class="text-center mt-5" style= "display: inline">
            <img src= 'cards/${pokerHand.value}${pokerHand.suit}.png' style= "width: 150px; margin: 0 auto;"/>
        </div>
    `
}

function renderPokerHand (pokerHand) {
  return pokerHand.map(createSingleCard).join('')
}

function pokerHand () {
  var content = document.getElementById('content')

  var pokerHandAbstraction = [
    {
      value: 'K',
      suit: 'C'
    },
    {
      value: 'K',
      suit: 'D'
    },
    {
      value: '9',
      suit: 'S'
    },
    {
      value: '2',
      suit: 'H'
    },
    {
      value: '9',
      suit: 'H'
    }
  ]

  content.innerHTML = renderPokerHand(pokerHandAbstraction)
}
