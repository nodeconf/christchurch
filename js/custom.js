/* Scroll the background layers */

function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  //$('.fotorama').css('margin-top',(0+(scrolled*.7))+'px');
  $('.fotorama').css({transform: 'translateY(' + (0+(scrolled*.7)) + 'px)'})
}


$(document).ready(function() {
if (!Modernizr.touch) { 
  parallaxScroll(); 
}

if ($(window).width() > 1000) {
  $('#navigation a').click(function(){
    var a_href = $(this).attr('href');
    $(a_href).stop().ScrollTo({
      duration: 1000
      });
  });
  
  $('.smooth-scroll').click(function(){
    var a_href = $(this).attr('href');
    $(a_href).stop().ScrollTo({
      duration: 1000
      });
  });
};
$('.mobile-nav').click(function(){
  $('#navigation ul').slideToggle('fast');
  $('#navigation ul').toggleClass('expanded');
})

$('#navigation ul').click(function(evt){
  if($(evt.currentTarget).attr('class') === 'expanded') {
    $('#navigation ul').slideToggle('fast');
    $('#navigation ul').removeClass('expanded');
  }  
})

})

$(window).scroll(function() {      
  if (!Modernizr.touch) { 
    parallaxScroll(); 
  }
});


$(window).resize(function() {  
  if (!Modernizr.touch) { 
    parallaxScroll(); 
  }
});	

$(window).load(function () {
 if ($(window).width() > 1000) {
  $('.fotorama').fadeIn(2000);
 }
});