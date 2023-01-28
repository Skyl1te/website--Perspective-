var popup = document.getElementById('popup');
var popup_menu = document.getElementById('popup-menu');

popup_menu.onclick = function() {

    if (popup.style.display == 'none') {
        popup.style.display = 'block';
        popup_menu.style.transform = 'rotate(90deg)';
        popup_menu.style.transition = 'all .15s linear';
    } else {
        popup.style.display = 'none'
        popup_menu.style.transform = 'rotate(0deg)';
        popup_menu.style.transition = 'all .15s linear';
    };
};

