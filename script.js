$(document).ready(function(){

  var img = $('.info-button');

    var center_x;
    var center_y;


    var offset = img.offset();
    function mouse(evt){
        center_x = (offset.left) + (img.width()/2);
        center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 0;
        img.css('-moz-transform', 'rotate('+degree+'deg)', '2s');
        img.css('-webkit-transform', 'rotate('+degree+'deg)', '2s');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);





    $(".info-button").click(function(){

        $(".info-button").toggleClass("info-button-active");
        $(".main-wrapper").toggleClass("main-wrapper-info-active");
        $(".main-wrapper").toggleClass("no-scroll");
        $(".info-wrapper").toggleClass("info-wrapper-active");
        $(".resume-wrapper").toggleClass("resume-wrapper-info-active");

        $(".main-wrapper").removeClass("main-wrapper-resume-active");
        $(".info-wrapper").removeClass("info-wrapper-resume-active");
        $(".resume-wrapper").removeClass("resume-wrapper-active");


            // center_x = (offset.left) + (img.width()/2) + 400;
            // center_y = (offset.top) + (img.height()/2);

    });

    $(".resume").click(function(){

        $(".resume-wrapper").toggleClass("resume-wrapper-active");
        $(".info-wrapper").toggleClass("info-wrapper-resume-active");
        $(".main-wrapper").toggleClass("main-wrapper-resume-active");

    });




    //image zoom

    $(".item-test").click(function(){

      $(".section-first").removeClass("section-first-active");

      $(".item-test > img").height("225");
      $(this).children("img").height("400");

      if(($(this).parent().children(".vertical-rule-active").length > 0)){
        console.log("test1");

      } else {

        console.log("test");

        $(".vertical-rule").removeClass("vertical-rule-active");

        $(this).parent().children(".vertical-rule").addClass("vertical-rule-active");
      }

    });
  //

//changes top-margin for first section when active

    $(".section-first").click(function(){
      $(".section-first").addClass("section-first-active");
    })

//smooth scroll

$('.section').click( function() {

  //console.log($(this).position().top);

    //$(".main-wrapper").animate({ scrollTop: $(this).offset().top}, 200);

});

var $form = $('form');
$form.submit(function(){
   $.post($(this).attr('action'), $(this).serialize(), function(response){
         $("form").html("");
         $(".form-message").css("visibility","visible").hide().fadeIn(2000);
   },'json');
   return false;
});




});
