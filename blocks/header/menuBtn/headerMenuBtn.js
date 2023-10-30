window.addEventListener('load', () => {
    const menu = document.querySelector(".header__menu-mobile");
    const menuBtn = document.querySelector(".header__menu-btn");

    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");

        } else {
            menu.classList.add("active");
            menuBtn.classList.add("active");
        }

    }

    menuBtn.addEventListener("click", toggleMenu);
});