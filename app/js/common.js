$(function() {
    // Custom JS
    $('.places-private > a').on('click', function(e) {
        e.preventDefault();
        $('.places-public').removeClass('active');
        $(this).addClass('active');
        $('.social').hide();
    });

    $('.places-public > a').on('click', function(e) {
        e.preventDefault();
        $('.places-private').removeClass('active');
        $(this).addClass('active');
        $('.social').show();
    });

    $('.places-item-close').click(function(){
        $(this).toggleClass("active");
    });
    $('.burgermenu').on('click', function () {
        $('body').toggleClass('toggled');
    });
});
