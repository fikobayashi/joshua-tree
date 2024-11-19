window.sr = ScrollReveal({ reset: true });

sr.reveal('.titulo', {
  duration: 2000,
  // rotate: {x:200, y:0, z:0},
  distance: '120px',
  opacity: 0.1,
});

sr.reveal('.livre', {
  duration: 2000,
  rotate: {x:20, y:100, z:20},
  distance: '120px',
  opacity: 0.2,
});

sr.reveal('.esquerda', {
  origin: 'left',
})

const setaTopo = document.getElementsByClassName('setaTopo');

window.onscroll = () => {
  if(document.documentElement.scrollTop >= 900) {
    setaTopo[0].style.display = "block";
  } else {
    setaTopo[0].style.display = "none";
  }
}