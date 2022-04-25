const INTERVAL_TIME = 8000 // 8s
const LAST_MAIN_MOVIE = 2 // 0-2 (3)
let count = 1

setInterval(() => {
  setMainMovie(count)

  count == LAST_MAIN_MOVIE
    ? count = 0
    : count++

}, INTERVAL_TIME)

function setMainMovie(currCount) {
  let header = document.getElementById('header')
  let title = document.getElementById('main-move-title')
  let score = document.getElementById('main-movie-score')
  let year = document.getElementById('main-movie-year')
  let time = document.getElementById('main-movie-time')
  let description = document.getElementById('main-movie-description')

  const moviesData = [
    {
      title: 'Encanto',
      score: 77,
      year: 2021,
      time: '1h 42m',
      description: 'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.'
    },
    {
      title: 'Turning RED',
      score: 75,
      year: 2022,
      time: '1h 40m',
      description: 'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.'
    },
    {
      title: 'Cars',
      score: 69,
      year: 2006,
      time: '1h 57m',
      description: 'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line.'
    }
  ]

  header.style.backgroundImage = `linear-gradient(#000000DD, #00000080 100%),
  url('./images/main-movie-0${currCount + 1}.jpg')`

  title.innerText = moviesData[currCount].title
  score.innerText = moviesData[currCount].score
  year.innerText = moviesData[currCount].year
  time.innerText = moviesData[currCount].time
  description.innerText = moviesData[currCount].description
}
