$('.slideContainerBanner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.sliderFor'
});
$('.sliderFor').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slideContainerBanner',
    dots: false,
    centerMode: false,
    vertical: true,
    focusOnSelect: true
});
$('.flexBox').click( function(e) {
    $('.flexBox').removeClass('active');
    $(this).addClass('active');
})