$('header a').click( function(e){
    e.preventDefault();
    let id = $(this).attr('href'),
        targetOffset =$(id).offset().top,
        menuHeight = $('header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 700);
});