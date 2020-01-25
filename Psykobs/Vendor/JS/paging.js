$('#bs4-slide-carousel').carousel({
    interval: 7000
});

$('#btnPrev').on('click', function () {
    $('#bs4-slide-carousel').carousel('prev');
});

$('#btnNext').on('click', function () {
    $('#bs4-slide-carousel').carousel('next');
});