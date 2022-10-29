var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ! window scrool header fixed ===============
window.onscroll = function () {
    myFunction()
};

let header = $(".header");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

/// dark mode rejimi============
const elDarkBtn = $('.dark__img');
const elBody = $('body');

elDarkBtn.addEventListener('click', (e) => {
    elBody.classList.toggle('dark')
    elDarkBtn.classList.toggle('img_root')
})
//  ! dark mode end 