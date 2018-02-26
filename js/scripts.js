$(document).ready(function(){
  $("#guard").click(function(){
    $("#guard").fadeOut();
    $("#show").fadeIn();
    $("body").removeClass();
  });
  $("h2").click(function(){
    $("body").removeClass();
    $("body").addClass("office");
    $("#hidden").slideToggle();
  });
  $("form#formal").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var age = $("input#age").val();
    var day = parseInt($("input#day").val());
    var question = $("select#question").val();
    var yummy = $("select#yummy").val();

    if(yummy === 'no'){
      $("#formal").fadeOut();
      $("h1").fadeOut();
      $("h2").fadeOut();
      $("#red").fadeIn();
      $("body").removeClass();
      $("body").addClass("red");
    }
    else if (day < 8 && question === 'yes' || question === 'maybe'){

      $("#formal").fadeOut();
      $("h1").fadeOut();
      $("h2").fadeOut();
      $("#yellow").fadeIn();
      $("body").removeClass();
      $("body").addClass("yellow");
    }
    else if (day > 8 && question === 'yes' || question === 'maybe'){

      $("#formal").fadeOut();
      $("h1").fadeOut();
      $("h2").fadeOut();
      $("#yellow").fadeIn();
      $("body").removeClass();
      $("body").addClass("yellow");
    }
    else if(day >= 8 && question === 'no' && yummy ==='yes'){
      $("#formal").fadeOut();
      $("h1").fadeOut();
      $("h2").fadeOut();
      $("#blue").fadeIn();
      $("body").removeClass();
      $("body").addClass("blue");
    }
    else if(day < 8 && question === 'no' && yummy ==='yes'){
      $("#formal").fadeOut();
      $("h1").fadeOut();
      $("h2").fadeOut();
      $("#blue").fadeIn();
      $("body").removeClass();
      $("body").addClass("blue");
    }
    $(".name").text(name);
    $(".age").text(age);
    $("#output").fadeIn();
  });
});
