// A $( document ).ready() block.
$( document ).ready(function() {
    AOS.init();
      
    if ($(window).width() <= 768) {
        $('.single-item').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 1000,
            cssEase: 'linear'
        });
    }

});