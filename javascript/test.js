alert('Hello');

$("#button").on("click", function(e) {
    if ($(".card-hidden").length > 0) {
       $(".card-hidden").first().slideToggle(function() {
         $(this).removeClass("card-hidden");
       });
    } else {
      console.log("No more cards to show.");
    }
   });

   