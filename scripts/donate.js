//document.getElementById("main").style.backgroundImage = "url('img/donate.png')";
//alert(document.getElementById("main"));
//document.getElementsByClassName("main__title").style.color = "#fff";

// var h1Elements = document.getElementsByTagName("main__title");

// for(var i = 0; i < h1Elements.length; i++)
// {
//     h1Elements[i].style.color = "#fff";
// }

//$(".main__title").text("Select the donation amount");

var headerPage = $("<div class='page'></div>");
var headerContainer = $("<div class='container'></div>");
var header = $("<div class='header'></div>");
var headerLogo = $("<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' class='header__logo'></a>");
var headerLogoImage = $("<img class='header__logo_image' src='img/logo.jpg' alt='Logo'>");
var headerMenu = $("<ul class='header-menu'></ul>");

// for (step = 0; step < 5; step++)
// {
//     var li = $("<li>class='header-menu__list'</li>");
// }

let headerMenuList = [
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='index.html'>Dungeon</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='https://ru.wikipedia.org/wiki/%D0%A5%D0%B5%D1%80%D1%80%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD,_%D0%91%D0%B8%D0%BB%D0%BB%D0%B8'>The Best Master</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='#'>Why Billy</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='help.html'>Help</a></li>"),
    $("<li class='header-menu__list'><a class='header-menu__list_link' href='donate.html'>Donate</a></li>")
];


for (step = 0; step <= 5; step++) {
    headerMenu.append(headerMenuList[step]);
}

var headerButtons = $("<div class='header-btns'></div>");

let buttons = [
    $("<button class='header-btns__login' onclick='window.location='logIn.html''>Log in</button>"),
    $("<button class='header-btns__register' onclick='window.location='register.html''>Register</button>"),
    $("<button class='btn' id='header_btn'>Get $300</button>")
];

for (i = 0; i < 3; i++) {
    headerButtons.append(buttons[i]);
}

// $(".container").css
// {
//     'background-color', 'purple',
//     'max-width', '1500px'
// };

var pageMain = $("<div class='page-main'></div>");
var mainContainer = $("<div class='container'></div>");
var main = $("<div class='main'></div>");
var mainWrapper = $("<div class='main__wrapper'></div>");
var mainAuthor = $("<div class='main__author'>MEET BILLY</div>");
var mainTitle = $("<h1 class='main__title'>Enter the donation amount</h1>");
var mainSubtitle = $("<p class='main__subtitle'>All donations will be used to improve the site and the dungeon</p>");
var inputDonate = $("<input class='donate' type='text' placeholder='Donate' id='inputDonate'>");
var get300BucksBtn = $("<button name='getBucks' id='btn_orange' class='btn'>Donate&rarr;</button>");



header.append(headerLogo.append(headerLogoImage)).append(headerMenu).append(headerButtons);

headerPage.append((headerContainer.append(header)));
$("body").append(headerPage);

mainWrapper.append(mainAuthor).append(mainTitle).append(mainSubtitle).append(inputDonate).append(get300BucksBtn);
main.append(mainWrapper);
mainContainer.append(main);
pageMain.append(mainContainer);
$("body").append(pageMain);

// $(document).ready(function ($) {
//     var cookieOptions = { expires: 3, path: '/' };
//     if ($.cookie('visit') == undefined) {
//         setTimeout(function () {
//             $.cookie('visit', true, cookieOptions);
//             $.magnificPopup.open({
//                 items: {
//                     src: $('#text-popup-load-window'), // может быть HTML строкой, jQuery объектом, или CSS селектором 
//                 },
//                 type: 'inline',
//                 removalDelay: 300
//             });
//         }, 10000);
//     }
// });

$(".header-btns__login").click(function() {
    window.open("logIn.html", "_self");
});

$(".header-btns__register").click(function() {
    window.open("register.html", "_self");
});

$(".container").css({
    "max-width": "1500px",
    "margin": "0 auto"
});

$(".header").css({
    "display": "flex",
    "height": "100%",
    "justify-content": "space-between",
    "align-items": "center",
    "font-size": "16px",
    "line-height": "19px",
    "backgroundColor": "white"
});

$(".header__logo").css({
    "width": "75px",
    "height": "35px",
    "padding-left": "10px"
});

$(".header__logo_image").css({
    "width": "75px",
    "height": "35px",
    "padding-left": "10px"
});

$(".header-menu").css({
    "list-style-type": "none",
    "display": "flex",
    "align-items": "center",
    "flex-grow": "1",
    "margin": "10px"
});

$(".header-menu__list_link").css({
    "color": "#0f0b0b",
    "text-decoration": "underline",
    "font-size": "large",
    "font-weight": "bold"
});

$(".header-menu__list").css({
    "padding-right": "35px"
});

// $( document ).ready(function(){
//     $(".header-menu__list").hover(function() {
//     $(".header-menu__list").css("color", "purple");});
// });

$(".header-btns__login").css({
    "border": "none",
    "backgroundColor": "white",
    "cursor": "pointer",
});

$(".header-btns__register").css({
    "border": "none",
    "backgroundColor": "white",
    "cursor": "pointer",
});

$(".btn").css({
    "font-weight": "600",
    "font-size": "14px",
    "line-height": "17px",
    "text-transform": "uppercase",
    "backgroundColor": "#fff",
    "padding": "13px, 31px, 14px",
    "border": "1px solid rgba(29, 37, 60, 0.2)",
    "box-sizing": "border-box",
    "border-radius": "4px",
    "margin-left": "39px",
    "cursor": "pointer"
});

$("#header_btn").css({
    "height": "40px",
    "margin": "5px 0 5px 5px",
    "width": "120px",
    "margin-left": "35px"
});

$(".btn").mouseenter(function () {
    $("#header_btn").css("backgroundColor", "grey");
});

$(".btn").mouseleave(function () {
    $("#header_btn").css("backgroundColor", "#fff");
});

$(".page-main").css({
    "background-image": "url('img/donate.jpg')",
    "background-repeat": "no-repeat",
    "background-position-x": "right",
    "padding-left": "150px",
    "background-size": "736px 800px",
    "backgroundColor": "#101419"
});

$(".main").css({
    "height": "775px",
    "padding-top": "223px",
    "box-sizing": "border-box"
});

$(".main__author").css({
    "font-weight": "600",
    "font-size": "18px",
    "line-height": "27px",
    "text-transfom": "uppercase",
    "color": "red"
});

$(".main__title").css({
    "color": "red"
});

$(".main__subtitle").css({
    "font-weight": "500",
    "font-size": "22px",
    "line-height": "33px",
    "color": "#5A6482",
    "width": "441px",
    "margin-bottom": "40px"
});

$("#btn_orange").css({
    "backgroundColor": "red",
    "color": "#fff",
    "border": "none",
    "margin-left": "0",
    "margin": "0 auto",
    "height": "45px",
    "border-radius": "20px"
});

$("#inputDonate").css({
    "padding": "10px",
    "margin": "10px 10px 0 0",
    "border": "0",
    "box-shadow": "0 0 15px 4px rgba(0,0,0,0)",
    "border-radius": "20px",
    "width": "400px"
});

// $("body").css({
//     "font-family": "'Work Sans', sans-serif",
//     "font-weight": 400,
//     "color": "white"
// });