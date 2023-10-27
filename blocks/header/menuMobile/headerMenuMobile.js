window.addEventListener('load', () => {
    let div = document.createElement('div');

    div.className = "header__menu-mobile";
    div.innerHTML = `<div class="row">
        <a href="#" class="header__logo"></a>
    <div class="header__menu-btn mobile">
        <div class="header__menu-btn-line top"></div>
        <div class="header__menu-btn-line bottom"></div>
    </div>
</div>
    <ul class="header__menu header__menu_direction_column" role="navigation">
        <li class="header__menu-item"><a href="#" class="link">Прямая трансляция</a></li>
        <li class="header__menu-item"><a href="#" class="link">Ханты-Мансийск</a>
            <ul class="header__dropdown">
                <li class="header__dropdown-item"><a class="link" href="#">О Ханты-Мансийске</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">История кубка мира</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">Информация для участников</a></li>
            </ul>
        </li>
        <li class="header__menu-item"><a href="#" class="link">Новости</a>
            <ul class="header__dropdown">
                <li class="header__dropdown-item"><a class="link" href="#">О Ханты-Мансийске</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">История кубка мира</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">Информация для участников</a></li>
            </ul>
        </li>
        <li class="header__menu-item"><a href="#" class="link">Участники</a></li>
        <li class="header__menu-item"><a href="#" class="link">Основная информация</a>
            <ul class="header__dropdown">
                <li class="header__dropdown-item"><a class="link" href="#">О Ханты-Мансийске</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">История кубка мира</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">Информация для участников</a></li>
            </ul>
        </li>
        <li class="header__menu-item"><a href="#" class="link">Результаты</a></li>
        <li class="header__menu-item"><a href="#" class="link">Медиа</a></li>
        <li class="header__menu-item"><a href="#" class="link">Контакты</a>
            <ul class="header__dropdown">
                <li class="header__dropdown-item"><a class="link" href="#">О Ханты-Мансийске</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">История кубка мира</a></li>
                <li class="header__dropdown-item"><a class="link" href="#">Информация для участников</a></li>
            </ul>
        </li>
    </ul>
    <a href="#" class="header__slow-vision"></a>
    <div class="header__languages">
        <a href="#" class="link header__language-item link_active_green">Ru</a>
        <a href="#" class="link header__language-item">En</a>
    </div>
    <div class="header__contacts">
        <a href="tel:+7 (3467) 555-321" class="link header__tel">+7 (3467) <b>555-321</b></a>
        <div class="header__place">Ханты-Мансийск Лопарева, 6</div>
    </div>
</div>`;
    document.body.getElementsByTagName('header')[0].appendChild(div);
});

