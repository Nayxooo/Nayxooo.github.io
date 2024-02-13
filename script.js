const darkmodeToggle = document.querySelector('.darkmode-btn');
const toggleImage = document.querySelector('.toggle-darkmode-img');

darkmodeToggle.addEventListener('click', () => {
    const body = document.body;
    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        toggleImage.src = "./img/MoonDarkmode.png";
    } 

    else if(body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        toggleImage.src = "./img/SunDarkmode.png";
    }
})

window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement.scrollTop || 0);

    // Si l'utilisateur a fait défiler jusqu'en bas de la page
    if (scrollTop + clientHeight >= scrollHeight) {
        document.querySelector('.footer').classList.add('show');
    } else {
        document.querySelector('.footer').classList.remove('show');
    }
});

const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {

  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;


})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {

  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: 'smooth'
  })

})

// pour gérer le resize, vu que la hauteur du site change.
let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});

// $('.darkmode-btn button').tilt({ scale: 1.1, speed: 1000 });
$('.main-flex img').tilt({ scale: 1.1, speed: 1000, glare: true, maxGlare: 1, perspective: 1000});


