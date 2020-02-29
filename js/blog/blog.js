"use strict";

$(window).load(function() {
  $('.preloader').fadeOut(1000);
  // Open project content if a user attempts to go directly to a project.
  var $target = window.location.hash;
  if ($target.length) {
    if ($target.indexOf('update-') >= 0) {
      $('html, body').animate({scrollTop: $($target).offset().top - 100}, 1000).promise().done(function() {
        $('html, body').animate({scrollTop: $($target).offset().top - 100}, 1000);
      });
    }
  }
});

$(document).ready(function() {
  /* Menu Headers */
  $('.header').sticky({topSpacing: 0});
  // Navigation handler.
  $('a[href*=#]').click(function() {
    var $target = $(this.hash);
    if ($target.length) {
      var targetOffset = $target.offset().top - 50;
      $('html, body').animate({scrollTop: targetOffset}, 1000).promise().done(function() {
        if (history.pushState) {
          history.pushState(null, null, $target.selector);
        } else {
          location.hash = $target.selector;
        }
      });
      return false;
    }
  });

  // Hash handling when the hash is changed.
  $(window).on('hashchange', function() {
    var $target = window.location.hash;
    if ($target.length) {
      if ($target.indexOf('update-') >= 0) {
        $('html, body').animate({scrollTop: $($target).offset().top - 100}, 1000);
      }
    }
  });

  /* Validation */
  $('.contactForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 20,
      },
    },
  });

  /* Jump Menu */
  function loadJump() {
    $('.jump-menu').click(function() {
      if ($('#navbar').hasClass('active')) {
        $('#navbar').removeClass('active');
      } else {
        $('#navbar').addClass('active');
      }
    });
    $('#navbar ul li a').click(function() {
      $('#navbar').removeClass('active');
    });
  }

  /* Main Menu Section Selector */
  $("#mobile-nav > li > a").first().click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
    return false;
  });

  $(".logo").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
    return false;
  });

  $('#nav').onePageNav({
    currentClass: 'current',
  });

  $('#mobile-nav').onePageNav({
    currentClass: 'mobile-current',
  });

  /* Scroll Parallax */
  $(window).on('scroll', function() {
    /* Scroll to top button */
    if ($(this).scrollTop() > $(window).height() - 1) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  /* Inview */
  function loadInview() {
    /* Fade In Elements */
    $('.hideme').on('inview', function(event, visible) {
      if (visible === true) {
        $(this).removeClass('hideme');
      }
    });
  }

  /* Load Functions */
  loadJump();
  loadInview();
});
