console.log("Welcome to Dotcoms 🚀");





/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});




window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.classList.add("hide");

    setTimeout(() => {

        preloader.remove();

    }, 600);

});


/* ===========================
   SCROLL PROGRESS
=========================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ===========================
   MOBILE MENU
=========================== */

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            nav.classList.remove("active");
        });
    });
}


/* ==========================================
   AUTO REVEAL ANIMATIONS
========================================== */

const animatedElements = document.querySelectorAll(`
.hero-content,
.section-heading,
.service-card,
.why-card,
.process-card,
.about-content,
.stat-card,
.contact-card,
.project-card,
.pricing-card,
.feature-card,
.faq-item,
.cta-box,
.footer-content
`);

animatedElements.forEach((el, index) => {

    el.classList.add("reveal");

    el.style.transitionDelay = `${(index % 4) * 120}ms`;

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach(el => observer.observe(el));



/* ==========================================
   MAGNETIC CARD EFFECT
========================================== */

document.querySelectorAll(
".service-card,.why-card,.process-card,.project-card,.pricing-card,.feature-card,.contact-card,.stat-card"
).forEach(card=>{

    card.addEventListener("mousemove",e=>{

        if(window.innerWidth<992) return;

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*10;

        const rotateX=((rect.height/2-y)/rect.height)*10;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)
        scale(1.02)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});



/* ==========================================
   BUTTON GLOW FOLLOW
========================================== */

document.querySelectorAll(".btn,.btn-secondary").forEach(button=>{

    button.addEventListener("mousemove",e=>{

        const rect=button.getBoundingClientRect();

        button.style.setProperty(
            "--x",
            `${e.clientX-rect.left}px`
        );

        button.style.setProperty(
            "--y",
            `${e.clientY-rect.top}px`
        );

    });

});