//轮播1
function lunbo1() {
    var swiper = new Swiper('.swiper-lunBo', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.lunBo_r',
            prevEl: '.lunBo_l',
        },
    });
}
lunbo1();
//轮播2
function lunbo2() {
    var swiper = new Swiper('.lunbo-three', {
        loop: true,
        navigation: {
            nextEl: '.lunbo-three-next',
            prevEl: '.lunbo-three-prev',
        },
    });
}
lunbo2();