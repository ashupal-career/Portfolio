const menuOpen = document.getElementById("menu-open-button");
const menuClose = document.getElementById("menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

menuOpen.onclick = () => document.body.classList.add("show-mobile-menu");
menuClose.onclick = () => document.body.classList.remove("show-mobile-menu");

navLinks.forEach(link =>
    link.onclick = () => document.body.classList.remove("show-mobile-menu")
);

const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
    link.addEventListener("click", () => {

        navLink.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

