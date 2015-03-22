(function(){
   "use strict";

   var sections = $("section");
   var navigation_links = $("#nav-wrap a");

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
      var nav = $('#nav-wrap');

      if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
         nav.fadeOut('fast');
      } else {
         if (y < h * 0.20) {
            nav.removeClass('opaque').fadeIn('fast');
         } else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

   });

   // Smooth Scrolling
   $('.smoothscroll').on('click', function(e) {
      e.preventDefault();

      var target = this.hash,
         $target = $(target);

      $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 600, 'swing', function() {
         window.location.hash = target;
      });
   });

   sections.waypoint({
      handler: function(event, direction) {
         var active_section = $(this);
         var active_link;

         if (direction === "up") {
            active_section = active_section.prev();
         }

         active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
         active_link.parent().addClass("current");
      },
      offset: '35%'
   });
}(window));
