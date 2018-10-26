
function createSingleCircle (circles) {
  return `
        <div class="text-center mt-5">
            <div style= "width: ${circles.radius}px; height: ${circles.radius}px; border-radius: ${circles.radius}px; background-color:${circles.color}"></div>
        </div>
    `
}

function renderCircles (circles) {
  return circles.map(createSingleCircle).join('')

  // HINT: You probably need to write a for loop!
  //       Or, if you're feeling fancy, use .map()
}

function circles () {
  var contentEl = document.getElementById('content')

  var circlesAbstraction = [
    {
      radius: 50,
      color: '#FF00FF'
    },
    {
      radius: 30,
      color: '#FF99AA'
    },
    {
      radius: 60,
      color: '#0000FF'
    },
    {
      radius: 10,
      color: '#000000'
    }
  ]

  contentEl.innerHTML = renderCircles(circlesAbstraction)
}
