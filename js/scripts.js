$(document).ready(function() {
  $(".expand").click(function() {
    $('.sec1-hidden').toggle();
    $('.sec1-showing').toggle();
    $('.expanded').show();
  });
  $(".expand2").click(function() {
    $('.sec2-hidden').toggle();
    $('.sec2-showing').toggle();
    $('.expanded2').show();
  });
});