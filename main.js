const burgerMenu = document.getElementById('burger-menu');
const navigation = document.getElementById('nav');

burgerMenu.addEventListener('click', function () {
    navigation.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    const body = document.body;
    if (burgerMenu.classList.contains('open')) {
        body.classList.add('disable-scroll');
    } else {
        body.classList.remove('disable-scroll');
    }
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        navigation.classList.toggle('open');
        burgerMenu.classList.toggle('open');
    });
});

// Function to check if the device is mobile based on screen width
function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the width as needed
}

//Infinity scroll

const carousels = document.querySelectorAll('.carousel');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    carousels.forEach(carousel => {
        carousel.setAttribute('data-animated', true);
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselContent = Array.from(carouselTrack.children);
        carouselContent.forEach((item) => {
            const copy = item.cloneNode(true);
            copy.setAttribute('aria-hidden', true)
            carouselTrack.appendChild(copy)
        })
    })
}

//Modal form

// const modalButtons = document.querySelectorAll('.modal-toggle');
// const backdrop = document.querySelector('.backdrop');
//
// const handleOpenModal = () => {
//     backdrop.classList.add('show');
//     backdrop.classList.remove('hide');
// }
//
// const handleCloseModal = (e) => {
//     console.log('close', e.target)
//     backdrop.classList.add('hide');
//     backdrop.classList.remove('show');
//
//     backdrop.addEventListener('transitionend', () => {
//         if (backdrop.classList.contains('hide')) {
//             backdrop.style.display = 'none';
//         }
//     }, { once: true });
// }
//
// const toggleBackdrop = (e) => {
//     backdrop.style.display = 'flex';
//     backdrop.style.alignItems = 'center';
//     backdrop.style.justifyContent = 'center';
//     setTimeout(handleOpenModal, 10);
// }
//
// modalButtons.forEach(button => {
//     button.addEventListener('click', toggleBackdrop)
// })
//
// window.addEventListener('click', event => {
//     if (event.target === backdrop) {
//         handleCloseModal(event);
//     }
// });

//scroll zoom

const targetElement = document.getElementById('slogan');

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        if(isMobileDevice()) {
            return
        }
        const scrollPosition = window.scrollY;
        if (scrollPosition > window.innerHeight / 2) {
            targetElement.style.opacity = '0.2';
            targetElement.style.fontSize = '2em';
        } else {
            targetElement.style.opacity = '1';
            targetElement.style.fontSize = '5em';
        }
    });
})

// Accordion list

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    const accordionItem = header.parentElement;
    accordionItem.addEventListener('click', () => {
        const accordionContent = accordionItem.querySelector('.accordion-content');

        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }

        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherItem.querySelector('.accordion-content');
                otherItem.classList.remove('active');
                otherContent.style.maxHeight = '0';
            }
        });
    });
});

const observerHeroSection = document.getElementById('hero-section');
const headerLogo = document.getElementById('header-logo');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    if(isMobileDevice()) {
        return
    }
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerLogo.style.opacity = '0'
            setTimeout(() => {
                headerLogo.style.display = 'none';
            }, 100);
        } else {
            headerLogo.style.display = 'flex';
            setTimeout(() => {
                headerLogo.style.opacity = '1'
            }, 100);
        }
    });
}, {
    threshold: 0.5
});

sectionObserver.observe(observerHeroSection);

const cardContainerObserver = document.getElementById('grid-card-container');
const cards = document.querySelectorAll('.card');

const cardsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach(el => {
                el.classList.add('show')
            })
            observer.unobserve(entry.target);
        } else {
            cards.forEach(el => {
                el.classList.remove('show')
            })
        }
    });
}, {
    threshold: 0.2
});

cardsObserver.observe(cardContainerObserver)

 document.addEventListener("DOMContentLoaded", function(event) {
    const handleFixVideos = () => {
        let userAgentString = navigator.userAgent;
        let chromeAgent = userAgentString.indexOf('Chrome') > -1;
        let safariAgent = userAgentString.indexOf('Safari') > -1;
        if ((chromeAgent) && (safariAgent)) safariAgent = false;
        const video = document.getElementById('services-video');
        const videos = document.querySelectorAll('video');
        if (videos.length > 0) {
            if (safariAgent) {
                video.setAttribute('src', 'assets/videos/fixed-earth-mov.mov')
            }
        }
    };
    handleFixVideos();
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


