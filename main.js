window.addEventListener('DOMContentLoaded', () => {
    const BTN = document.querySelector('button');
    const H1 = document.querySelector('h1');

    const kim = function () {
        console.log(2)
    }

    const WN = function () {
        H1.innerHTML = '하이루...'
    }

    const HAHA = () => H1.innerHTML = '하이 화살표함수...';

    const S = function () {
        this.classList.toggle('on');
        console.log(this)
    }

    const AS = e => {
        //this.classList.toggle('on');
        console.log(this, e, e.target)
    }

    BTN.addEventListener('click', AS);

    function lee() {
        console.log(1);
    }



    //lee();
})
