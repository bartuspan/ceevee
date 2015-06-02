(function() {
    "use strict";

    $(document).foundation();

    // Be sure that #header-background-image height is = to the browser height
    $('header').css({
        'height': $(window).height()
    });

    $(window).on('resize', function() {
        $('header').css({
            'height': $(window).height()
        });
        $('body').css({
            'width': $(window).width()
        });
    });

    // Fade In/Out Primary Navigation
    $(window).on('scroll', function() {
        var h = $('header').height();
        var y = $(window).scrollTop();
        var $nav = $('#nav-wrap');

        if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
            $nav.fadeOut('fast');
        } else {
            if (y < h * 0.20) {
                $nav.removeClass('opaque').fadeIn('fast');
            } else {
                $nav.addClass('opaque').fadeIn('fast');
            }
        }
    });
    
    $("section").waypoint({
        handler: function(event, direction) {
            var $activeSection = $(this.element);

            if (event === "up") {
                $activeSection = $activeSection.prev();
            }

            $("#nav-wrap a").parent().removeClass("current");
            $('#nav-wrap a[href="#' + $activeSection.attr("id") + '"]').parent().addClass("current");
        },
        offset: '35%'
    });
}(window));
