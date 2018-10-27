function createSingleMovie (movies) {
  return `
        <div class="text-center mt-5" style= "display: flex; justify-content: space-between; width: 680px;border-radius: 10px;background-color: rgb(174,174,174); padding: 15px">
            <img src= '${movies.poster}'/>
            <div style= 'text-align: left; background-color: rgb(215, 215, 215); border-radius: 15px; padding: 15px'>
                <h1 style='margin-bottom: 0px'> <b>${movies.title}</b></h1>
                <p style='margin-bottom: 30px'>${movies.year}</p>
                <h1 style='margin-bottom: 0px'> IMDB:</h1>
                <h1 style='margin-bottom: 30px'> ${movies.imdbRating} / 10</h1>
                <h1 style='margin-bottom: 0px'> Rotten Tomatoes:</h1>
                <h1> ${makePercent(movies.rottenTomatoesRating)}</h1>
            </div>
        </div>
    `
}

function makePercent (value) {
  return (value * 100) + '&#37;'
}

function renderMovies (movies) {
  return movies.map(createSingleMovie).join('')
}

function movies () {
  var content = document.getElementById('content')

  var moviesAbstraction = [
    {
      title: 'The Dark Knight',
      year: 2008,
      imdbID: 'tt0468569',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.94
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      imdbID: 'tt1345836',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
      imdbRating: 8,
      rottenTomatoesRating: 0.82
    },
    {
      title: 'The Incredibles',
      year: 2004,
      imdbID: 'tt0317705',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.91
    }
  ]

  content.innerHTML = renderMovies(moviesAbstraction)
}
