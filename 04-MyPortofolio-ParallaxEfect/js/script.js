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
    }, 1250, 'easeOutBounce');

    e.preventDefault();

});