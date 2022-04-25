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
  let play = document.getElementById('play-main-movie')
  let description = document.getElementById('main-movie-description')

  const moviesData = [
    {
      title: 'Encanto',
      score: 77,
      year: 2021,
      time: '1h 42m',
      number: 17,
      description: 'The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.'
    },
    {
      title: 'Turning RED',
      score: 75,
      year: 2022,
      time: '1h 40m',
      number: 3,
      description: 'Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.'
    },
    {
      title: 'Cars',
      score: 69,
      year: 2006,
      time: '1h 57m',
      number: 4,
      description: 'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line.'
    }
  ]

  header.style.backgroundImage = `linear-gradient(#000000DD, #00000080 100%),
  url('./images/main-movie-0${currCount + 1}.jpg')`

  title.innerText = moviesData[currCount].title
  score.innerText = moviesData[currCount].score
  year.innerText = moviesData[currCount].year
  time.innerText = moviesData[currCount].time
  play.setAttribute('onclick', `setModal(false, ${moviesData[currCount].number})`)
  description.innerText = moviesData[currCount].description
}

function setModal(isOpen, movie) {
  let modal = document.getElementById('modal')
  let iframe = document.getElementById('iframe')

  !isOpen
    ? modal.style.display = 'flex' //open
    : modal.style.display = 'none' //close

  if (movie) {
    switch (movie) {
      case 1:
        iframe.src = 'https://www.youtube.com/embed/rNk1Wi8SvNc'
        break
      case 2:
        iframe.src = 'https://www.youtube.com/embed/xOsLIiBStEs'
        break
      case 3:
        iframe.src = 'https://www.youtube.com/embed/XdKzUbAiswE'
        break
      case 4:
        iframe.src = 'https://www.youtube.com/embed/SbXIj2T-_uk'
        break
      case 5:
        iframe.src = 'https://www.youtube.com/embed/HWEW_qTLSEE'
        break
      case 6:
        iframe.src = 'https://www.youtube.com/embed/Rvr68u6k5sI'
        break
      case 7:
        iframe.src = 'https://www.youtube.com/embed/9pyBKj5-jVk'
        break
      case 8:
        iframe.src = 'https://www.youtube.com/embed/PeFGdSrFTUw'
        break
      case 9:
        iframe.src = 'https://www.youtube.com/embed/TEHWDA_6e3M'
        break
      case 10:
        iframe.src = 'https://www.youtube.com/embed/mE35XQFxbeo'
        break
      case 11:
        iframe.src = 'https://www.youtube.com/embed/-UaGUdNJdRQ'
        break
      case 12:
        iframe.src = 'https://www.youtube.com/embed/yRUAzGQ3nSY'
        break
      case 13:
        iframe.src = 'https://www.youtube.com/embed/CGbgaHoapFM'
        break
      case 14:
        iframe.src = 'https://www.youtube.com/embed/2zLkasScy7A'
        break
      case 15:
        iframe.src = 'https://www.youtube.com/embed/OV_fG6oIda8'
        break
      case 16:
        iframe.src = 'https://www.youtube.com/embed/gn5QmllRCn4'
        break
      case 17:
        iframe.src = 'https://www.youtube.com/embed/CaimKeDcudo'
        break
      default:
        alert('Error')
        setModal(true) //Close Modal
        break
    }
  } else {
    iframe.src = ''
  }
}
