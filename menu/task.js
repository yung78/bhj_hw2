(() => {
    let subMenu = document.getElementsByClassName("menu menu_sub");
    for(let i=0; i < subMenu.length; i++) {
        let activate = subMenu[i];
        let link = subMenu[i].closest(".menu__item").querySelector(".menu__link");
        
        link.onclick = () => {
            for (el of subMenu) {
                if ((el.className == "menu menu_sub menu_active") && (el !== activate)) {
                    el.className = "menu menu_sub";
                };
            };
            activate.className += " menu_active";
            return false;
        };
    };
})();
