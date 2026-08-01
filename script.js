console.log("Welcome to Dotcoms 🚀");

/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(section => {

    observer.observe(section);

});



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




/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 800);

});



/* ===========================
   MOUSE SPOTLIGHT
=========================== */

const spotlight = document.body;

window.addEventListener("mousemove", (e)=>{

    spotlight.style.setProperty(
        "--x",
        `${e.clientX}px`
    );

    spotlight.style.setProperty(
        "--y",
        `${e.clientY}px`
    );

    spotlight.style.setProperty(
        "--tx",
        `translate(${e.clientX}px, ${e.clientY}px)`
    );

});



/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("hover");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("hover");

    });

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