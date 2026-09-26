// ============================================
// MOBILE NAVIGATION MENU
// ============================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");


// Open / close mobile menu

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ============================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ============================================

if (navLinks) {

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// ============================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// ============================================

document.addEventListener("click", (event) => {

    if (!menuButton || !navLinks) {
        return;
    }

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);


    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

    }

});


// ============================================
// UPDATE COPYRIGHT YEAR
// ============================================

const currentYear =
    new Date().getFullYear();

const footer =
    document.querySelector(".footer");

if (footer) {

    const footerParagraph =
        footer.querySelector("p");

    if (footerParagraph) {

        footerParagraph.innerHTML =
            `© ${currentYear} MD Azam. All Rights Reserved.`;

    }

}


// ============================================
// ADD ACTIVE EFFECT TO NAVIGATION LINKS
// ============================================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


// ============================================
// SIMPLE SCROLL REVEAL EFFECT
// ============================================

const revealElements =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .experience-card, .education-card, .certificate-card, .contact-card"
    );


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();