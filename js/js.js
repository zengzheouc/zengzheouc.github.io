window.onload = function(){
    var current = 0;
    document.getElementById('logo_img').onclick = function(){
        current = (current+90)%360;
        this.style.transform = 'rotate('+current+'deg)';
    }
};