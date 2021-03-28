// function myFunction() {
//     var x = document.getElementById("card product");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}