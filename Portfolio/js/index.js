$(document).ready(function(){
    $('.menu-burger').click(function(event){
        $('.menu-burger, .navbar').toggleClass('active');
    })
})


    $('.photography-list__link').on('click', function(){

        $('.photography-list__link').removeClass('active');
        $(this).addClass('active');


        const some = $(this).attr('id');
        $('.photography-box').removeClass('active');
        $(document.getElementsByClassName(some)).addClass('active');

    });
