$(document).ready(function(){

//declare common selectors as variables
var infoButton = $(".info-button"), overlay = $(".overlay-wrapper"), img = $(".item"), x = $(".x");

//make info-button point at cursor ;-)
    var center_x;
    var center_y;

    var offset = infoButton.offset();
function mouse(evt){
        center_x = (offset.left) + (infoButton.width()/2);
        center_y = (offset.top) + (infoButton.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 0;
        infoButton.css('-moz-transform', 'rotate('+degree+'deg)', '2s');
        infoButton.css('-webkit-transform', 'rotate('+degree+'deg)', '2s');
        infoButton.css('-o-transform', 'rotate('+degree+'deg)');
        infoButton.css('-ms-transform', 'rotate('+degree+'deg)');
}

    $(document).mousemove(mouse);

//view info
$(".info-button").click(function(){

      $(".info-button").toggleClass("info-button-active");
      $(".main-wrapper").toggleClass("main-wrapper-info-active");
      $(".main-wrapper").toggleClass("no-scroll");
      $(".info-wrapper").toggleClass("info-wrapper-active");
      $(".resume-wrapper").toggleClass("resume-wrapper-info-active");

      $(".main-wrapper").removeClass("main-wrapper-resume-active");
      $(".info-wrapper").removeClass("info-wrapper-resume-active");
      $(".resume-wrapper").removeClass("resume-wrapper-active");

});

//view resume
$(".resume").click(function(){

      $(".resume-wrapper").toggleClass("resume-wrapper-active");
      $(".info-wrapper").toggleClass("info-wrapper-resume-active");
      $(".main-wrapper").toggleClass("main-wrapper-resume-active");

});

//mobile remove info
$(".info-x").click(function(){

      $(".main-wrapper").removeClass("main-wrapper-info-active");
      $(".main-wrapper").removeClass("no-scroll");
      $(".info-wrapper").removeClass("info-wrapper-active");

});

//mobile remove resume
$(".resume-x").click(function(){

      $(".resume-wrapper").toggleClass("resume-wrapper-active");
      $(".info-wrapper").toggleClass("info-wrapper-resume-active");
      $(".main-wrapper").toggleClass("main-wrapper-resume-active");

});


//image zoom overlay
img.click(function(){

      var backImg = $(this).children().prop('src');
      var cap = $(this).children('.hidden-cap').html();
      $('.zoom').css('background-image' , 'url(' + backImg + ')');
      $('.shown-cap').html('');
      $('.shown-cap').html(cap);
      overlay.fadeIn(400);
      $(".info-button").toggleClass("info-button-active");

});

x.click(function(){
      overlay.fadeOut(400);
      $(".info-button").toggleClass("info-button-active");
});

//form submit
var $form = $('form');

$form.submit(function(){
   $.post($(this).attr('action'), $(this).serialize(), function(response){
         $("form").html("");
         $(".form-message").css("visibility","visible").hide().fadeIn(2000);
   },'json');
   return false;
});

});
