(function ($) {

$(function() {

$('<span id="menu">&#9776;</span>').insertAfter('.home-icon');
$('#menu').toggle(function() {
  $(this).next().show();
}, function() {
  $(this).next().hide();
});

});


})(jQuery);
