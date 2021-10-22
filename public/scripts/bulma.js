$(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
});



$(".add-comment-button").on('click',function(){
    $('#comment-text-box').css("display", "block");
});          

