function createSingleRestaurant (restaurants) {
  return `
        <div class="text-center mt-5" style= 'background-color: rgb(218, 218, 218); width: 250px; border-radius: 25px;padding: 10px;'>
            <h1 style= 'text-align: left'>${restaurants.name}</h1>
            <p style= 'text-align: left;margin-bottom: 0px'>${restaurants.type}</p>
            <h1 style= 'color: green;text-align: left'>${checkPrice(restaurants.priceRating)}</h1>
        </div>
    `
}

function checkPrice (value) {
  if (value === 1) {
    return '$'
  } else if (value === 2) {
    return '$$'
  } else if (value === 3) {
    return '$$$'
  } else if (value === 4) {
    return '$$$$'
  } else if (value === 5) {
    return '$$$$$'
  }
}

function renderRestaurants (restaurants) {
  return restaurants.map(createSingleRestaurant).join('')
}

function restaurants () {
  var content = document.getElementById('content')

  var restaurantsAbstraction = [
    {
      name: "McDonald's",
      type: 'Fast Food',
      priceRating: 1
    },
    {
      name: 'Gunshow',
      type: 'Date Night Dining',
      priceRating: 5
    },
    {
      name: 'Iron Age',
      type: 'Korean BBQ',
      priceRating: 4
    }
  ]

  content.innerHTML = renderRestaurants(restaurantsAbstraction)
}
