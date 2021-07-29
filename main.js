$(document).ready(function (){
    $('.fa-bars').click(function (){
        //this is for the hamburger menu when the screen is <= 768 px
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle'); // X sign 
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        //since the header is fixed, I used jQuery to change the color of the header when we scroll 
        //instead of having a transparent background 
        if($(window).scrollTop() > 30){
            //
            $('header').css({
                'background': '#2DD25A',
                'box-shadow': '0 .2rem .5rem rgba(0,0,0,0.4)'
            });
        }

        //if we are not scrolling for more than 30, the header remains as it is 
        //this basically retuns the header as it initially was when we go back to home section
        else {
            $('header').css({
                'background': 'none'
            });
        }
    });

    $('.accordion-header').click(function(){
        //jQuery(this).siblings(".accordion-body").slideToggle();
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });
    
}); //ready