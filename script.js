document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu-item");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Adjust offset if necessary
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach((link) => {
            const icon = link.querySelector("i");
            const text = link.querySelector("span")
            if (icon && text) {
                if (link.getAttribute("href").includes(currentSection)) {
                    icon.classList.add("active");
                    text.classList.add("active-text")
                } else {
                    icon.classList.remove("active");
                    text.classList.remove("active-text")
                }
            }
        });
    });
});
