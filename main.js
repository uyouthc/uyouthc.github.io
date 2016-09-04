var main = function () {
    //setting about height
    if (window.innerHeight > 700) {
        $(".aboutImg").css("height", window.innerHeight - 80);
    }
    //setting up mobile menu
    $("#myMenu").css("height", window.innerHeight);

    $("#myMenu").css("width", window.innerWidth);

    //making events square
    var cw = $('.eventContain').width();
    $('.eventContain').css({
        'height': cw + 'px'
    });

    //setting jumbotron height
    $("#jumbotronImg").css("height", window.innerHeight);

    //setting when background should change
    var changePoint = ($('#jumbotronImg').offset().top + $('#jumbotronImg').height() / 6);

    $(window).on('scroll', function () {
        //top of the screen
        var top = Math.round($(window).scrollTop());

        //if past changePoint, change the style
        if (top > changePoint) {
            $(".topnav").addClass('changeStyle');
            document.getElementById('logo').src = 'img/logo-big2.svg'

        } else if (top < changePoint) {
            $('.topnav').removeClass('changeStyle');
            document.getElementById('logo').src = 'img/logo-big.svg'
        }

        //setting up mobile menu
        $("#myMenu").css("height", window.innerHeight);

        $("#myMenu").css("width", window.innerWidth);

    });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

}

$(document).ready(main);
