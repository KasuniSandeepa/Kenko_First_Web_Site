
//--show and hide password inside an class(ed) div > a
$(document).ready(function () {
    $(".show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('.show_hide_password input').attr("type") == "text") {
            $('.show_hide_password input').attr('type', 'password');
            $('.show_hide_password i').addClass("fa-eye-slash");
            $('.show_hide_password i').removeClass("fa-eye");
        } else if ($('.show_hide_password input').attr("type") == "password") {
            $('.show_hide_password input').attr('type', 'text');
            $('.show_hide_password i').removeClass("fa-eye-slash");
            $('.show_hide_password i').addClass("fa-eye");
        }
    });
});

//--show and hide password inside an classed(ed) div > a
function ShowAndHidePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//--show and hide 'back-to-top' element on page scroll
window.onscroll = function () {
    var btt = document.getElementById('backToTop');
    if (pageYOffset >= 1000) {
        btt.style.visibility = 'visible';
    } else {
        btt.style.visibility = 'hidden';
    }
};

//--refine url
function refineUrl(url) {
    var refUrl = url.split('?')[0];
    return refUrl;
}

