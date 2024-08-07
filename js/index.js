var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





document.addEventListener('DOMContentLoaded', () => {

// Unix timestamp (in seconds) to count down to
var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

// Set up FlipDown
var flipdown = new FlipDown(twoDaysFromNow)

  // Start the countdown
  .start()

  // Do something when the countdown ends
  .ifEnded(() => {
    console.log('The countdown has ended!');
  });

// Toggle theme
var interval = setInterval(() => {
  let body = document.body;
  body.classList.toggle('light-theme');
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
}, 5000);

var ver = document.getElementById('ver');
ver.innerHTML = flipdown.version;
});



let timer;
let compareDate = new Date('2024-10-05T12:00:00.000+02:00'); 
// compareDate.setDate(compareDate.getDate() + 5);

timer = setInterval(function(){
  timeBetweenDates(compareDate);
}, 1000);
function getTimeLabel(time) {
  if(time < 10) {
    return '0' + time;
  }
  return time;
}
function timeBetweenDates(toDate){
  let dateEntered = toDate;
  let now = new Date();
  let difference = dateEntered.getTime() - now.getTime();
  if(difference <= 0) {
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector("#days ul li").innerHTML = getTimeLabel(days);
    document.querySelector("#hours ul li").innerHTML = getTimeLabel(hours);
    document.querySelector("#mins ul li").innerHTML = getTimeLabel(minutes);
    document.querySelector("#seconds ul li").innerHTML = getTimeLabel(seconds);
  }
  
}