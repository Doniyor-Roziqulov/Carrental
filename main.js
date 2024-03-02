var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-menu-btn");
var elChangeColorBtn = document.querySelector(".js-switch-btn");

elMenuBtn.addEventListener("click", function () {
    elSiteHeader.classList.toggle("open-menu");
    document.body.classList.toggle("unscrollbody");
});

elChangeColorBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
