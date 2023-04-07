(() =>{
    const dot = document.getElementsByClassName("slider__dot");
    const item = document.getElementsByClassName("slider__item");
    const prev = document.getElementsByClassName("slider__arrow slider__arrow_prev")[0];
    const next = document.getElementsByClassName("slider__arrow slider__arrow_next")[0];


    function slide(index) {
        for (let i = 0; i < item.length; i++) {
            dot[i].className = "slider__dot";
            item[i].className = "slider__item";
        };
        dot[index].className += " slider__dot_active";
        item[index].className +=" slider__item_active";
    };


    function findActive() {
        for (let i = 0; i < item.length; i++) {
            if (item[i].className == "slider__item slider__item_active") {
                return i
            }
        }
    };
    

    //start active dot&item
    slide(0) 


    // dot clicker
    for (let i = 0; i < dot.length; i++) {
        dot[i].onclick = () => {
            slide(i);
        };
   };


    next.onclick = () => {
        // let id = item.findIndex(function (element) {
        //      if (element.className == "slider__item slider__item_active") {
        //         return element
        //      };
        // }); 
        let id = findActive()
        if (id == item.length - 1) {
            id = 0;
        } else {id +=1};
        
        slide(id)
    };

    prev.onclick = () => {
        // let id = item.findIndex(element => element.className == "slider__item slider__item_active");
        let id = findActive()
        if (id == 0) {
            id = item.length - 1;
        } else {id -=1};
        
        slide(id)
    };
})();