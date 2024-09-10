const burgerMenu = document.getElementById('burger-menu');
const navigation = document.getElementById('nav');

burgerMenu.addEventListener('click', function () {
    navigation.classList.toggle('open');
    burgerMenu.classList.toggle('open');
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

//Swiper

// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
//
// let currentIndex = 0;
//
// function updateSlide() {
//     const offset = -currentIndex * 100;
//     document.querySelector('.slide-wrapper').style.transform = `translateX(${offset}%)`;
// }
//
// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//     updateSlide();
// });
//
// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//     updateSlide();
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

// const observerH1 = document.getElementById('slogan');
// window.addEventListener('DOMContentLoaded', () => {
//     const h1Observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 observerH1.style.fontSize = '144px';
//             } else {
//                 observerH1.style.fontSize = '72px';
//             }
//         });
//     }, {
//         threshold: 0.5
//     });
//     h1Observer.observe(observerH1);
// })


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

//Observer

// const observerTarget = document.getElementById('price-card');
//
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//             observer.unobserve(entry.target);
//         }
//     });
// }, {
//     threshold: 0.5
// });
//
// observer.observe(observerTarget);

const observerHeroSection = document.getElementById('hero-section');
const headerLogo = document.getElementById('header-logo');

const sectionObserver = new IntersectionObserver((entries, observer) => {
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
            console.log('isIntersecting')
            cards.forEach(el => {
                el.classList.add('show')
            })
            // observer.unobserve(entry.target);
        } else {
            console.log('isIntersecting - No!')
            cards.forEach(el => {
                el.classList.remove('show')
            })
        }
    });
}, {
    threshold: 0.5
});

cardsObserver.observe(cardContainerObserver)

// const pins = document.querySelectorAll('.map-point');
// const tooltip = document.getElementById('tooltip');
// pins.forEach(pin => {
//     pin.addEventListener('mouseenter', function(event) {
//         const rect = pin.getBoundingClientRect();
//         tooltip.classList.add('active');
//
//         tooltip.style.left = `${rect.left + rect.width / 2}px`;
//         tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
//         event.stopPropagation();
//     });
//     pin.addEventListener('mouseleave', function(event) {
//         // const rect = pin.getBoundingClientRect();
//         tooltip.classList.remove('active');
//
//         // tooltip.style.left = `${rect.left + rect.width / 2}px`;
//         // tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
//         event.stopPropagation();
//     });
// })
// window.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         toggleBackdrop()
//     }, 10000)
// })

// const svgObject = document.getElementById('svgMap');
// svgObject.addEventListener('load', function() {
// const svgDoc = svgObject.getSVGDocument();
// if (!svgDoc) {
//     return;
// }
// const pins = svgDoc.querySelectorAll('.map-point')
// pins.forEach(pin => {
// })
// });


// function IsInViewport(t) {
//     let e = t.position();
//     return wh = e.height,
//         h = window.innerHeight,
//     e.top <= h && e.top + wh > 0
// }


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
                video.setAttribute('src', '/assets/videos/fixed-earth-mov.mov')
            }
        }
    };
    handleFixVideos();
});



