
/* =========================================
   IRONVAULT FITNESS
   INTERACTIONS & FUTURE-READY JS
========================================= */


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;

            const target =
                Number(counter.dataset.target);

            const suffix =
                counter.dataset.suffix || "";

            let current = 0;

            const duration = 1300;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const progress =
                    Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                counter.textContent =
                    current.toLocaleString() + suffix;


                if (progress < 1) {

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target.toLocaleString() + suffix;

                }

            }


            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);

        });

    },
    {
        threshold: 0.8
    }
);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   TOAST
========================================= */

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

let toastTimer;


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =========================================
   MEMBERSHIP BUTTONS
========================================= */

document.querySelectorAll(".plan-btn").forEach(button => {

    button.addEventListener("click", () => {

        const plan =
            button.textContent
                .replace("CHOOSE ", "")
                .trim();

        showToast(
            `${plan} plan selected — contact form coming next.`
        );

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    if (!name) {

        showToast("Please enter your name.");

        return;

    }

    showToast(
        `Thanks ${name}! Your message is ready to connect.`
    );

    contactForm.reset();

});


/* =========================================
   HERO BUTTON INTERACTION
========================================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.setProperty(
            "--hover-x",
            "10px"
        );

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   KEYBOARD ACCESSIBILITY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        navLinks.classList.remove("open");

    }

});

