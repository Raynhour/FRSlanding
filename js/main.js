$(document).ready(function(){

      // hide our element on page load
  $('#list_1').css('opacity', 0);
  $("#list_2").css("opacity",0);
  $("#list_3").css("opacity",0);
  $("#list_4").css("opacity",0);

  $('#Openbit_anchors').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#list_1').addClass('fadeInUp');
      $('#list_1').removeClass('fadeOutDown');
    } else if (direction === 'up') {
      // hide our content
      $('#list_1').addClass('fadeOutDown');
      $('#list_1').removeClass('fadeInUp');
    }
 
  }, { offset: '100%' });

   $('#list_3').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#list_3').addClass('fadeInUp');
      $('#list_3').removeClass('fadeOutDown');
    } else if (direction === 'up') {
      // hide our content
      $('#list_3').addClass('fadeOutDown');
      $('#list_3').removeClass('fadeInUp');
    }
 
  }, { offset: '100%' });

 
  $('#modificator').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#list_4').addClass('fadeInUp');
      $('#list_4').removeClass('fadeOutDown');
    } else if (direction === 'up') {
      // hide our content
      $('#list_4').addClass('fadeOutDown');
      $('#list_4').removeClass('fadeInUp');
    } 
  }, { offset: '100%' }); 
  $('#shield').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#shield').addClass('zoomIn');
      $('#shield').removeClass('zoomOut');
    } else if (direction === 'up') {
      // hide our content
      $('#shield').addClass('zoomOut');
      $('#shield').removeClass('zoomIn');
    } 
  }, { offset: '100%' }); 
  $('#shield').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('#shield').addClass('zoomIn');
      $('#shield').removeClass('zoomOut');
    } else if (direction === 'up') {
      // hide our content
      $('#shield').addClass('zoomOut');
      $('#shield').removeClass('zoomIn');
    } 
  }, { offset: '100%' }); 

  $('#blocks').waypoint(function(direction) {
    if (direction === 'down') {
      // reveal our content
      $('.s6__left-1').css('transform', 'translateX('+ 0 +'%)');
      $('.s6__right-1').css('transform', 'translateX('+ 0 +'%)');
    } else if (direction === 'up') {
      // hide our content
      $('.s6__left-1').css('transform', 'translateX('+ 150 +'%)');
      $('.s6__right-1').css('transform', 'translateX('+ -150 +'%)');
    } 
  }, { offset: '50%' }); 
$(".promo__video").click(function(){
  var videosrc = $(this).data("video");
  $(".promo__modal").css("display","flex");
  $(".promo__iframe").attr("src", videosrc);
});
$(".promo__modal, .promo__close").click(function(){
  $(".promo__modal").css("display","none");
  $(".promo__iframe").attr("src", "none");
});
});

$(".header-mobile").click(function(){
    $(".header-nav").toggle();
});