window.addEventListener('load', () => {
    const menuItem = document.querySelector(".header__menu-item");
    const dropdownMenu = document.querySelector(".header__menu-mobile .header__dropdown");
    const dropdownMenuItem = document.querySelector(".header__dropdown-item");
    const arrow = document.querySelector(".header__menu-mobile .header__menu-item::after");
    const accordion = menuItem.contains(dropdownMenu);
    // console.log(accordion);


    for (let i = 0; i < dropdownMenu.length; i +=1) {
        console.log(dropdownMenu[i]);
    }
    // if (accordion === false) {
    //     arrow.style['display'] = 'block';
    // }
    //
    // function leftMenu() {
    //     if (menuItem.classList.contains("active")) {
    //         alert(123);
    //     } else {
    //         menuItem.classList.add("active");
    //         dropdownMenu.classList.add("active");
    //     }
    // }
    //
    // menuItem.addEventListener("click", leftMenu);
});