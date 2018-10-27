function createSingleCard (pokerHand) {
  return `
        <div class="text-center mt-5">
            <img src= 'cards/${pokerHand.value}${pokerHand.suit}.png'/>
        </div>
    `
}

function renderPokerHand (pokerHand) {
  // HINT: You can use <img /> tags that point to these playing card images:
  // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
  return pokerHand.map(createSingleCard).join('')
}

// function number (value) {
//     if (value === '2') {
//         return
//     }
// }

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
