const margin = 8
const nav = false
const responsive = {
  0: {
    items: 1
  },
  300: {
    items: 2
  },
  600: {
    items: 3
  },
  900: {
    items: 4
  },
  1200: {
    items: 5
  }
}

$('.owl-carousel.no-infinite').owlCarousel({
  loop: false,
  margin: margin,
  nav: nav,
  responsive: responsive
})

$('.owl-carousel.infinite').owlCarousel({
  loop: true,
  margin: margin,
  nav: nav,
  responsive: responsive,
  stagePadding: 20
})

$('.owl-carousel.infinite').on('mousewheel', '.owl-stage', (e) => {

  e.deltaY > 0
    ? $('.owl-carousel.infinite').trigger('next.owl')
    : $('.owl-carousel.infinite').trigger('prev.owl')

  e.preventDefault()
})
