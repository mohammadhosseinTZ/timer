let day = 12;
let hour = 0;
let min = 1;
let sec = 8;
let activeSec = pad(sec)[0];
let activeMin = pad(min)[0];
let activeHour = pad(hour)[0];
let activeDay = pad(day)[0];

$(document).ready(function () {
  updateTimer(".sec" , sec ,activeSec);
  updateTimer(".min" , min  , activeMin);
  updateTimer(".hour" , hour , activeHour);
  updateTimer(".day" , day , activeDay);
  $(".mot-timer-wrapper .sec .timer:nth-of-type(2) span").text(pad(sec)[0]);
  $(".mot-timer-wrapper .min .timer:nth-of-type(2) span").text(pad(min)[0]);
  $(".mot-timer-wrapper .hour .timer:nth-of-type(2) span").text(pad(hour)[0]);
  $(".mot-timer-wrapper .day .timer:nth-of-type(2) span").text(pad(day)[0]);
  $(".iconClose").click(function(){

    $("header").slideUp();

  })
  function createTimer() {
  const secInterval = setInterval(() => {
    if (sec > 0) sec--;
    else {
      clearInterval(secInterval);
      checkMinute();
    }

    updateTimer(".sec" , sec ,activeSec);
  }, 1000);
}

function checkMinute() {
  if (min > 0) {
    min--;
  updateTimer(".min" , min , activeMin);
    sec = 59;
    createTimer();
  } else {
    checkHour();
  }
}
function checkHour() {
  if (hour > 0) {
    hour--;
    updateTimer(".hour" , hour , activeHour);
    min = 59;
    updateTimer(".min" , min , activeMin);
    sec = 59;
    createTimer();
  } else {
    checkDay();
  }
}

function checkDay() {
  if (day > 0) {
    day--;
    updateTimer(".day" , day , activeDay);
    hour = 23;
    updateTimer(".hour" , hour , activeHour);
    min = 59;
    updateTimer(".min" , min , activeMin);
    sec = 59;
    createTimer();
  } else {
    alert("dude its time");
  }
}

function updateTimer(className , name , prevNum) {

  $(`.mot-timer-wrapper .timer span`).each(function(){
    $(this).removeClass("active")
  })

 
  if (prevNum !== pad(name)[0]) {

   
    name === sec ? activeSec = pad(name)[0] :null;
    name === sec ? activeHour = pad(name)[0] :null;
    name === sec ? activeMin = pad(name)[0] :null;
    name === sec ? activeDay = pad(name)[0] :null;
    $(`.mot-timer-wrapper ${className} .timer:nth-of-type(2) span`).text(pad(name)[0]);
    $(`.mot-timer-wrapper ${className} .timer:nth-of-type(2) span`).addClass("active");


  }
  setTimeout(() => {
  
    $(`.mot-timer-wrapper ${className} .timer:nth-of-type(1) span`).addClass("active");
  }, 1000);
  
  $(`.mot-timer-wrapper ${className} .timer:nth-of-type(1) span`).text(pad(name)[1]);
  

}




createTimer();
});

function pad(num) {
  return num < 10 ? "0" + num.toString() : num.toString();
}

