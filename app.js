// const cursor_circle = document.querySelector(".cursor-circle"),
//     cursor = document.querySelectorAll(".cursor");



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Mathematician', 'Front-End <br/> Developer', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


window.addEventListener('click', () => {
    document.getElementsById("song").play();
});

let blabla = document.getElementById('tlf').value;
function p() {
    if (blabla.legnth < 10 || blabla.legnth > 10) {
        throw new Error('invalind number');
    };
};

// window.addEventListener("mousemove", (e) => {
//     let xPosition = e.clientX;
//     let yPosition = e.clientY;

//     cursor.forEach((el) => {
//         el.style.transform = 'translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))';
//     });
// });

let time = document.getElementById("time-zone")
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000)

