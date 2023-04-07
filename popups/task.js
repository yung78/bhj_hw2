(() => {
    let popup = document.getElementById("modal_main");
    let close = document.getElementsByClassName("modal__close_times");
    let show = document.getElementsByClassName("show-success");
    let show2 = document.getElementById("modal_success");

    popup.className += " modal_active";

    show[0].onclick = () => {
        popup.className = "modal";
        show2.className += " modal_active";
    };

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = () => {
            show2.className = "modal";
            popup.className = "modal";
        };
    };
})();