// function toggle() {
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active');

//     var popup = document.getElementById('popup');
//     popup.classList.toggle('active');
// }


function openPopup(cardNum) {
    var el = document.getElementById('popup'+cardNum);
    var BG = document.getElementById('bgcover');
    el.style.display = 'block';
    BG.style.display = 'block';
  }
  
  function closePopup(cardNum) {
      if(!cardNum) {
          var el = document.getElementsByClassName('popup');
          for (var i = 0; i < el.length; i++) {
              el[i].style.display = 'none';
            } 
      } else {
          var el = document.getElementById('popup'+cardNum);
          el.style.display = 'none';
      }
    var BG = document.getElementById('bgcover');
    BG.style.display = 'none';
  }
  

  // NAVBAR STICK
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// COUNTDOWN

var countDownDate = new Date("Sept 30, 2021 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if(distance < 0) {
    clearInterval(x);
    document.getElementById("launch").innerHTML = "EXPIRED";
  }
}, 1000);