$(document).ready(function(){
  $(".boop").hide();
  $(".swiper").hide();
  $(".utonium").hide();

  $("form").submit(function(event){
    $(".quiz").hide();

    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var colorInput = $("input:radio[name=color]:checked").val();

    $(".name").text(nameInput);

    event.preventDefault();

    if (colorInput === "red"){
      $(".boop").show();
    } else if (colorInput === "yellow"){
      $(".swiper").show();
    } else if (colorInput === "blue"){
      $(".utonium").show();
    }
  });
});
