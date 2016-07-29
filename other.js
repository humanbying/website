$(document).ready(function(){
  $(window).resize(function(){
    if ($(window).width() <= 2000) {
      var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.one').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.two').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.three').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.four').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.five').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.six').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.seven').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.eight').css("background-color", colors);
      colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $('.nine').css("background-color", colors);
    }
  });
});
