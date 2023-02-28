(() =>{
    var index = 0;
    const dot = document.getElementsByClassName("slider__dot");
    dot[0].className += " slider__dot_active";
    const item = document.getElementsByClassName("slider__item");
    const prev = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0];
    const next = document.getElementsByClassName("slider__arrow slider__arrow_next")[0];

   for (let i = 0; i < dot.length; i++) {
        dot[i].onclick = () => {
            dot[index].className = "slider__dot"
            item[index].className = "slider__item"
            index = i;
            item[index].className +=" slider__item_active"
        };
   };


    next.onclick = () => {
        dot[index].className = "slider__dot"
        item[index].className = "slider__item"
        if (index == 4) {
            index = 0;
        } else {index +=1};
        dot[index].className += " slider__dot_active"
        item[index].className +=" slider__item_active"
    }

    prev.onclick = () => {
        dot[index].className = "slider__dot"
        item[index].className = "slider__item"
        if (index == 0) {
            index = 4;
        } else {index -=1};
        dot[index].className += " slider__dot_active"
        item[index].className +=" slider__item_active"
    }
})();