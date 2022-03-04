$(window).on('resize', function () {
    if ($(window).width() < 1400) {
        $(".card").css('width', '20em');

        if ($(window).width() < 1100) {
            $(".card").css('width', '14em');

            if ($(window).width() < 600) {
                $(".container-cards").css('display', 'absolute');
                $(".card").css('width', '20em');
            }
            else {
                $(".container-cards").css('display', 'flex');
            }
        }
        else {
            $(".card").css('width', '20em');
        }

    }
    else {
        $(".card").css('width', '25em');
    }
    // $(".container-cards").css('display', 'absolute');
});

$(window).ready(function () {
    if ($(window).width() < 1400) {
        $(".card").css('width', '20em');

        if ($(window).width() < 1100) {
            $(".card").css('width', '14em');

            if ($(window).width() < 600) {
                $(".container-cards").css('display', 'absolute');
                $(".card").css('width', '20em');
            }
            else {
                $(".container-cards").css('display', 'flex');
            }
        }
        else {
            $(".card").css('width', '20em');
        }

    }
    else {
        $(".card").css('width', '25em');
    }
});