// CFERDINANDI - github smooth scroll

//Q QUERY EXAMPLE - DAY5
$(document).ready(function () {
    $(window).scroll(function () {\
        if($(document).scrollTop() > 50) {
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('solid');
            $('.navbar-brand').addClass('navbar-brandActive')
        } else if($(document).scrollTop() < 50) {
            $('.navbar').removeClass('solid');
            $('.navbar-brand').removeClass('navbar-brandActive')
            $('.navbar').addClass('navbar-light');
        }