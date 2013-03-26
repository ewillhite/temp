(function ($) {

$(function() {

$(".front #main-content > div, .media-youtube-video").fitVids();

$('<span id="menu">&#9776;</span>').insertAfter('.home-icon');
$('#menu').toggle(function() {
  $(this).next().show();
}, function() {
  $(this).next().hide();
});

});


})(jQuery);
