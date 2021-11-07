/*When user scrolls down 80px from the top of the doc, the navbar's
padding and logo's size will change!*/
window.onscroll = function () {
    scrollFunction
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.padding = '30px 10px';
        document.getElementById('logo').style.fontSize = '25px';
    } else {
        document.getElementById('navbar').style.padding = '80px 10px';
        document.getElementById('logo').style.fontSize = '35px';
    }
}

