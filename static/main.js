// Change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Show/Hide FAQ answer and toggle icon
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // Correctly toggle Font Awesome icons
        const icon = faq.querySelector('.faq__icon i');
        if (faq.classList.contains('open')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

// Show/Hide Nav Menu on mobile
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// Close nav menu function
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);

// Testimonials Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        // Show 2 slides on tablets
        600: {
            slidesPerView: 2,
        },
        // Show 3 slides on desktops
        1024: {
            slidesPerView: 3,
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper only if the .mySwiper element exists
    if (document.querySelector('.mySwiper')) {
        new Swiper('.mySwiper', {
            loop: true, // Optional: loop the slides
            autoplay: {
                delay: 5000, // Optional: auto-advance slides every 5 seconds
                disableOnInteraction: false, // Keep autoplaying even after user interaction
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Optional: responsive breakpoints
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1, // You might want 2 or 3 slides for desktop
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1, // Adjust as needed
                    spaceBetween: 40,
                },
            },
        });
    }
});