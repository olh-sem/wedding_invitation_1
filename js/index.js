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





const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtnElement = document.getElementById('prevBtn');
const nextBtnElement = document.getElementById('nextBtn');

let currentDate = new Date('2024-10-05');


const updateCalendar = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 0);
  const lastDay = new Date(currentYear,currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();
 
  const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
  monthYearElement.textContent = monthYearString.slice(0, -2);

  let datesHTML = '';

  for (let i = firstDayIndex; i > 0; i--){
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const activeClass = date.toDateString() === new Date('2024-10-05').toDateString() ? 'active' : '';
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }

  for (let i = 1; i<=7 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
})

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
})

updateCalendar();

