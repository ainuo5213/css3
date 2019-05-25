var timer = setTimeout(function () {
    $('.wrapper').removeClass('init')
}, 0);

$('.item').on('click', function () {
    $('.wrapper').addClass('wrapper-active');
    $(this).addClass('active');
});

$('.close').on('click' , function (e) {
    e.stopPropagation();
    $('.wrapper').removeClass('wrapper-active');
    $('.active').removeClass('active');
});