function toggleMenu() {
    $('#navbar').toggleClass('responsive');
    $('#main-doc').toggleClass('responsive');
}

function closeMenuOnClick() {
    $('.nav-link').on('click', function() {
        $('#navbar').removeClass('responsive');
        $('#main-doc').removeClass('responsive');
    });
}

$(window).resize(function () {
    let viewportWidth = $(window).width();
    if (viewportWidth > 806) {
        $('#navbar').removeClass('responsive');
        $('#main-doc').removeClass('responsive');
    }
});

//Run on page load
$(function() {
    closeMenuOnClick();
});