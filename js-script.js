function darkMode() {
    var body = document.body;
        body.classList.toggle("dark-mode");
}

window.alert("Javascript Example: Error 404");

$(document).ready (function(){


$(".cosmetology-img").mouseenter (function() {
    $(this).css("width", "85%");
});
$(".cosmetology-img").mouseleave (function() {
    $(this).css("width", "80%");
}
);

$(".brand").mouseenter (function() {
    $(this).css("width", "105%");
});
$(".brand").mouseleave (function() {
    $(this).css("width", "100%");
}
);

$("#pageTitle").css ("color", "#02447e");



});


