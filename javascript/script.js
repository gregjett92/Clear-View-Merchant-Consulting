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
  