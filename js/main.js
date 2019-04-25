$(function() {
    $(".nav-link").on('click', function() {
        $("#navbar").removeClass("responsive");
        $("#main-doc").removeClass("responsive");
        //$(".icon-closed").css("display", "block");
        //$(".icon-open").css("display", "none");
        //$("#container").css("width", "100%");
        //$(".line").addClass("hidden");
        //$(".fas").removeClass("fa-times");
        //$(".fas").addClass("fa-bars");
    })
})

//var menuOpened = false;

function toggleMenu() {
    $("#navbar").toggleClass("responsive");
    $("#main-doc").toggleClass("responsive");
    /*$("#main").css("display", "inline-block");*/
    if ($("#navbar").hasClass("responsive")) {
        //$("#container").css("width", "50%");
        //$(".line").removeClass("hidden");
        //$(".fas").removeClass("fa-bars");
        //$(".fas").addClass("fa-times");
    } else {
        //$("#container").css("width", "100%");
        //$(".line").addClass("hidden");
        //$(".fas").removeClass("fa-times");
        //$(".fas").addClass("fa-bars");
    }
}

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth > 806) {
        $("#navbar").removeClass("responsive");
        $("#main-doc").removeClass("responsive");
        //$(".icon-closed").css("display", "none");
        //$(".icon-open").css("display", "none");
        //$("#container").css("width", "100%");
        //$(".line").addClass("hidden");
        //$(".fas").removeClass("fa-times");
        //$(".fas").addClass("fa-bars");
    }
});