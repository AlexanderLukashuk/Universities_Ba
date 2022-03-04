
// $("#btn_orange").click(function() {
//     var donateWindow = window.open("about:blank", "hello", "width=200,height=200");

//     donateWindow.document.write("Привет, мир!");

//     var donateWindow = window.open('/', 'donate', 'width=600,height=400');

//     alert(donateWindow.location.href);

//     donateWindow.onload = function() {
//         var div = donateWindow.document.createElement('div'),
//             body = donateWindow.document.body;

//         div.innerHTML = 'Welcome';
//         div.style.fontSize = '30px';

//         body.insertBefore(div, body.firstChild);
//     }
// });


$(window).on('resize', function () {
    var dropDown = $("<div class='dropdown'></div");
    var dropDownBtn = $("<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Menu</button>");
    //var dropDownBtn = $("<button class='dropdownbtn' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Dropdown button</button>");
    //var dropdownContent = $("<div class='dropdown-content'>");
    var dropDownMenu = $("<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'></ul>");

    let dropDownMenuList = [
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='home' href='index.html'>Home</a></li>"),
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='top_universities' href='universities.html'>The Best Universities</a></li>"),
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='videos' href='videos.html'>Videos</a></li>")
    ];

    for (step = 0; step < 5; step++) {
        dropDownMenu.append(dropDownMenuList[step]);
    }

    var headerMenu = $("<ul class='header-menu'></ul>");

    let headerMenuList = [
        $("<li class='header-menu__list'><a class='menu-item' id='home'>Home</a></li>"),
        $("<li class='header-menu__list'><a class='menu-item' id='top_universities'>The Best Universities</a></li>"),
        $("<li class='header-menu__list'><a class='menu-item' id='videos'>Videos</a></li>")
    ];

    for (step = 0; step <= 5; step++) {
        headerMenu.append(headerMenuList[step]);
    }

    // let arr = [
    //     $("<a href='#'>Link 1</a>"),
    //     $("<a href='#'>Link 2</a>"),
    //     $("<a href='#'>Link 3</a>")
    // ];

    // for (step = 0; step <= 2; step++) {
    //     dropdownContent.append(arr[step]);
    // }

    dropDown.append(dropDownBtn).append(dropDownMenu);

    if ($(window).width() < 1010) {
        $(".header-menu").remove();
        $(".dropdown").remove();
        $(".header").append(dropDown);
        // $(".page-main").css({
        //     "backgroundColor": "red"
        // });
    }
    else {
        $(".dropdown").remove();
        $(".header-menu").remove();
        $(".header").append(headerMenu);
    }

    if ($(window).width() < 500) {
        $(".main__subtitle").css({
            "width": "200px"
        });
    }
    else {
        $(".main__subtitle").css({
            "width": "250px"
        });
    }

    if ($(window).width() < 500) {
        $("#inputDonate").css({
            "width": "200px"
        });
    }
    else {
        $("#inputDonate").css({
            "width": "400px"
        });
    }
});

$(window).ready(function () {
    var dropDown = $("<div class='dropdown'></div");
    var dropDownBtn = $("<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Menu</button>");
    //var dropDownBtn = $("<button class='dropdownbtn' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Dropdown button</button>");
    //var dropdownContent = $("<div class='dropdown-content'>");
    var dropDownMenu = $("<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'></ul>");

    let dropDownMenuList = [
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='home' href='index.html'>Home</a></li>"),
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='top_universities' href='universities.html'>The Best Universities</a></li>"),
        $("<li class='dropdown-menu__list'><a class='dropdown-item' id='videos' href='videos.html'>Videos</a></li>")
    ];

    for (step = 0; step < 5; step++) {
        dropDownMenu.append(dropDownMenuList[step]);
    }

    var headerMenu = $("<ul class='header-menu'></ul>");

    let headerMenuList = [
        $("<li class='header-menu__list'><a class='menu-item' id='home'>Home</a></li>"),
        $("<li class='header-menu__list'><a class='menu-item' id='top_universities'>The Best Universities</a></li>"),
        $("<li class='header-menu__list'><a class='menu-item' id='videos'>Videos</a></li>")
    ];

    for (step = 0; step <= 5; step++) {
        headerMenu.append(headerMenuList[step]);
    }

    // let arr = [
    //     $("<a href='#'>Link 1</a>"),
    //     $("<a href='#'>Link 2</a>"),
    //     $("<a href='#'>Link 3</a>")
    // ];

    // for (step = 0; step <= 2; step++) {
    //     dropdownContent.append(arr[step]);
    // }

    dropDown.append(dropDownBtn).append(dropDownMenu);

    if ($(window).width() < 1010) {
        $(".header-menu").remove();
        $(".dropdown").remove();
        $(".header").append(dropDown);
        // $(".page-main").css({
        //     "backgroundColor": "red"
        // });
    }
    else {
        $(".dropdown").remove();
        $(".header-menu").remove();
        $(".header").append(headerMenu);
    }

    if ($(window).width() < 500) {
        $(".main__subtitle").css({
            "width": "200px"
        });
    }
    else {
        $(".main__subtitle").css({
            "width": "250px"
        });
    }

    if ($(window).width() < 500) {
        $("#inputDonate").css({
            "width": "200px"
        });
    }
    else {
        $("#inputDonate").css({
            "width": "400px"
        });
    }
});

$(".dropdownbtn").css({
    "color": "white",
    "padding": "16px",
    "font-size": "16px",
    "border": "none"
});

$(".dropdown").css({
    "position": "relative",
    "display": "inline-block"
});

$(".dropdown-menu").css({
    "isplay": "none",
    "position": "absolute",
    "backgroundColor": "#f1f1f1",
    "min-width": "160px",
    "box-shadow": "0px 8px 16px 0px rgba(0,0,0,0.2)",
    "z-index": "1"
});

$(".dropdown-menu__list").css({
    "color": "black",
    "padding": "12px 16px",
    "text-decoration": "none",
    "display": "block"
});

$(".dropdown").mouseenter(function () {
    $(".dropdown-menu").css("display", "block");
});

$(".btn").mouseleave(function () {
    $("#header_btn").css("backgroundColor", "#fff");
});