/*Animations*/

document.addEventListener("DOMContentLoaded", function () {
    let navbarLinks = document.querySelectorAll(".navbar a");
    let sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        navbarLinks.forEach(nav => {
            nav.classList.remove("active");
            if (nav.getAttribute("href").includes(currentSection)) {
                nav.classList.add("active");
            }
        });

        const skillBars = document.querySelectorAll(".skill-bar");
        skillBars.forEach(bar => {
            if (bar.classList.contains("active")) return;
            const barPosition = bar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (barPosition < screenHeight * 0.9) {
                bar.classList.add("active");
            }
        });
    });
});
