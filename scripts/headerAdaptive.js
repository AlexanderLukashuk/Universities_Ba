$(window).on('resize', function () {
    var dropDown = $("<div class='dropdown'></div");
    var dropDownBtn = $("<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Menu</button>");
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

    dropDown.append(dropDownBtn).append(dropDownMenu);

    
    if ($(window).width() < 1300) {
        $(".page-main").css({
            "background-image": "none"
        });
                    
        if ($(window).width() < 700) {
            $(".header-menu").remove();
            $(".dropdown").remove();
            $(".header").append(dropDown);
            $(".main__subtitle").css({
                "width": "100px"
            });
        }
        else {
            $(".dropdown").remove();
            $(".header-menu").remove();
            $(".header").append(headerMenu);
            $(".main__subtitle").css({
                "width": "250px"
            });
        }
    }
    else {
        $(".page-main").css({
            "background-image": "url('img/Nazarbayev_University.jpg')"
        });
    }
});

$(window).ready(function () {
    var dropDown = $("<div class='dropdown'></div");
    var dropDownBtn = $("<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>Menu</button>");
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

    dropDown.append(dropDownBtn).append(dropDownMenu);

    
    if ($(window).width() < 1300) {
        $(".page-main").css({
            "background-image": "none"
        });
                    
        if ($(window).width() < 700) {
            $(".header-menu").remove();
            $(".dropdown").remove();
            $(".header").append(dropDown);
            $(".main__subtitle").css({
                "width": "100px"
            });
        }
        else {
            $(".dropdown").remove();
            $(".header-menu").remove();
            $(".header").append(headerMenu);
            $(".main__subtitle").css({
                "width": "250px"
            });
        }
    }
    else {
        $(".page-main").css({
            "background-image": "url('img/Nazarbayev_University.jpg')"
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