
console.log("JavaScript is working");

let lastScrollTop = 0;

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > 100) {

        if (currentScroll > lastScrollTop) {
            navbar.classList.add("hide");
        } else {
            navbar.classList.remove("hide");
        }

    } else {
        navbar.classList.remove("hide");
    }

    lastScrollTop = currentScroll;

});


const columns = document.querySelectorAll('.explination .column');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

columns.forEach((column, index) => {
    column.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(column);
});


const cityImages = document.querySelectorAll(".city-image");

const touchDevice = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
).matches;

cityImages.forEach(image => {

    if (touchDevice) {

        image.addEventListener("click", () => {

            const isActive = image.classList.contains("active");

            cityImages.forEach(otherImage => {
                otherImage.classList.remove("active");
                otherImage.setAttribute("aria-expanded", "false");
            });

            if (!isActive) {
                image.classList.add("active");
                image.setAttribute("aria-expanded", "true");
            }

        });

    }

});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show-button');
    } else {
        backToTop.classList.remove('show-button');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});