// event pada saat link di click
$('.halaman-scroll').on('click', function(e) {
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(tujuan);

    // tangkap element si dia
    var elementTujuan = $(tujuan);
    // console.log(elementTujuan);
    // console.log(elementTujuan.offset().top);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 55
    }, 1250, 'easeOutBounce');       //easeOutBounce

    e.preventDefault();

});


// parallax effect untuk jumbotron
$(window).scroll(function() {
    var wScroll = $(this) .scrollTop();
    // console.log(wScroll);

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.75 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });


    // portfolio
    // if (wScroll > 1000) {
    if (wScroll > $('.portfolio').offset().top - 350) {
        // console.log('ok');
        
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * (i+1));
        });
    }
});



// parallax effect untuk About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});