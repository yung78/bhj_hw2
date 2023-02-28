(() => {
    let menuLink = document.getElementsByClassName("menu__link");
    for(let i=0; i < menuLink.length; i++) {
        let parent = menuLink[i].parentElement;
        
        menuLink[i].onclick = () => {
            if (parent.childNodes.length > 3) {
                for (let j=0; j < parent.childNodes.length; j++) {
                    if (parent.childNodes[j].className = "menu menu_sub") {
                        parent.childNodes[j].className += " menu_active";
                        
                    };
                }
            };
        };
    };
})();
