window.addEventListener('load', () => {
    // hamburger and navigation transition
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    //hide fixed logo image in header
    const imgLogo = document.querySelector(".logo");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if(lastScrollY < window.scrollY) {
            imgLogo.classList.add("navup");
        }else {
            imgLogo.classList.remove("navup");
        }
    })

    lastScrollY = window.scrollY;

});