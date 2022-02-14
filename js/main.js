$('#slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

let navButton = document.querySelector(".nav-btn");
let navButtonIcon = document.querySelector(".bx");
let nav = document.querySelector('.header__nav');
let switchDarkLight = document.querySelector('.switch-btn');
let siteBody = document.querySelector('.body')
let quizAnswer = document.querySelector('.quiz-item__answer');
let quizButtonOne = document.querySelector('#quiz-btn__one');
let quizButtonTwo = document.querySelector('#quiz-btn__two');
let quizButtonTree = document.querySelector('#quiz-btn__three');
let quizButtonFour = document.querySelector('#quiz-btn__four');
let quizOne = document.querySelector('#quiz-one');
let quizTwo = document.querySelector('#quiz-two');
let quizThree = document.querySelector('#quiz-three');
let quizFour = document.querySelector('#quiz-four');
let quizButtonLineOne = document.querySelector('#quiz-button__line-one');
let quizButtonLineTwo = document.querySelector('#quiz-button__line-two');
let quizButtonLineTree = document.querySelector('#quiz-button__line-three');
let quizButtonLineFour = document.querySelector('#quiz-button__line-four');



// Menu Button
navButton.addEventListener('click', function(){
    navButtonIcon.classList.toggle('bx-x');
    nav.classList.toggle("nav--active");
    siteBody.classList.toggle('body--disable')
});


// Switch Dark-Light
switchDarkLight.addEventListener('click', function(){
  siteBody.classList.toggle('add__dark-theme')
});

// Quiz

quizButtonOne.addEventListener('click', function(){
  quizOne.classList.toggle('quiz-item__answer--active');
  quizButtonLineOne.classList.toggle('first-line--rotate');
  quizTwo.classList.remove('quiz-item__answer--active');
  quizButtonLineTwo.classList.remove('first-line--rotate');
  quizThree.classList.remove('quiz-item__answer--active');
  quizButtonLineTree.classList.remove('first-line--rotate');
  quizFour.classList.remove('quiz-item__answer--active')
  quizButtonLineFour.classList.remove('first-line--rotate');
});

quizButtonTwo.addEventListener('click', function(){
  quizTwo.classList.toggle('quiz-item__answer--active');
  quizButtonLineTwo.classList.toggle('first-line--rotate');
  quizOne.classList.remove('quiz-item__answer--active');
  quizButtonLineOne.classList.remove('first-line--rotate');
  quizThree.classList.remove('quiz-item__answer--active');
  quizButtonLineTree.classList.remove('first-line--rotate');
  quizFour.classList.remove('quiz-item__answer--active')
  quizButtonLineFour.classList.remove('first-line--rotate');
});

quizButtonTree.addEventListener('click', function(){
  quizThree.classList.toggle('quiz-item__answer--active');
  quizButtonLineTree.classList.toggle('first-line--rotate');
  quizOne.classList.remove('quiz-item__answer--active');
  quizButtonLineOne.classList.remove('first-line--rotate');
  quizTwo.classList.remove('quiz-item__answer--active');
  quizButtonLineTwo.classList.remove('first-line--rotate');
  quizFour.classList.remove('quiz-item__answer--active')
  quizButtonLineFour.classList.remove('first-line--rotate');
});

quizButtonFour.addEventListener('click', function(){
  quizFour.classList.toggle('quiz-item__answer--active')
  quizButtonLineFour.classList.toggle('first-line--rotate');
  quizOne.classList.remove('quiz-item__answer--active');
  quizButtonLineOne.classList.remove('first-line--rotate');
  quizTwo.classList.remove('quiz-item__answer--active');
  quizButtonLineTwo.classList.remove('first-line--rotate');
  quizThree.classList.remove('quiz-item__answer--active');
  quizButtonLineTree.classList.remove('first-line--rotate');
});

