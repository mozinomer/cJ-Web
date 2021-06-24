$('.flexBox').click( function(e) {
    $('.flexBox').removeClass('active');
    $(this).addClass('active');
})
$('.sliderTestimonials').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
})
$('.innerSliderFor').click( function(e){
    var slideNumber = $(this).attr('data-id');
    $('.innerSliderFor').removeClass('active');
    $(this).addClass('active');
    $('.sliderInnerContainer').removeClass('active');
    $('.sliderInnerContainer#'+slideNumber).addClass('active');
})