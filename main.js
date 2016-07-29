$(document).ready(function(){
  $(window).resize(function(){
    if ($(window).width() <= 1500) {
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#welcome').css("color", colors);
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#journey').css("color", colors);
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#meet').css("color", colors);
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#CH').css("color", colors);
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#train').css("color", colors);
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('#history').css("color", colors);
    }
  });
});
