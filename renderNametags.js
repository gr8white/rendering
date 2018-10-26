function createSingleNametag (nametags) {
  return `
        <div class="text-center mt-5" style= "width: 30%;border-color: black;border-style: solid;">
            <h1 style= "background-color: blue; color: white">Hello, my name is:</h1>
            <h2 style="
            padding: 20px 0px;
            margin: 0;
        ">${nametags}</h2>
        </div>
    `
}

function renderNametags (nametags) {
    return nametags.map(createSingleNametag).join('')
}

function nametags () {
  var content = document.getElementById('content')

  var nametagsAbstraction = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  content.innerHTML = renderNametags(nametagsAbstraction)
}
