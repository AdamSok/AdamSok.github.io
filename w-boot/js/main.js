const nav = $('#nav');

$(window).on('scroll', function(){
if($(window).scrollTop() >  50){
    nav.addClass('scroll');
} else {
    nav.removeClass('scroll');
}
})