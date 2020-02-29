"use strict";

$(window).load(function() {
  // Scroll to website section if URL hash is valid.
  var $target = window.location.hash;
  if ($target.length) {
    if (['#home', '#problem', '#solution', '#team', '#sponsors', '#blog', '#contact'].indexOf($target) >= 0) {
      $('html, body').animate({scrollTop: $($target).offset().top}, 1000).promise().done(function() {
        $('html, body').animate({scrollTop: $($target).offset().top}, 1000);
      });
    }
  }

  $('.preloader').fadeOut(3000);
});

$(document).ready(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // Hide player and display a background picture instead of a video if on mobile.
    $('#home').css('display', 'none');
    $('#mobile-background').css({'background-image':'url(/img/mobile_bg.jpg)', 'display':'block'});
  } else {
    $('.player').YTPlayer();
  }

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
      if (['#home', '#problem', '#solution', '#team', '#sponsors', '#blog', '#contact'].indexOf($target) >= 0) {
        $('html, body').animate({scrollTop: $($target).offset().top}, 1000);
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

  /* Banner */
  function loadTall() {
    $('#home').css('height', $(window).height());
  }

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

  /* Counter */
  $.fn.countTo = function(options) {
    // merge the default plug-in settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});
    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
      increment = (options.to - options.from) / loops;

    return $(this).each(function() {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(Math.round(value).toLocaleString('en-US',{useGrouping:true}));

        if (typeof(options.onUpdate) === 'function') {
          options.onUpdate.call(_this, value);
        }
        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;
          if (typeof(options.onComplete) === 'function') {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

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

  /* Resize */
  function resizedw() {
    loadTall();
  }

  var doit;
  $(window).on('resize', function() {
    clearTimeout(doit);
    doit = setTimeout(resizedw, 1000);
  });

  /* Inview */
  function loadInview() {
    /* Stats Counter */
    var count = 0;
    $('.stat-counter').on('inview', function(event, visible) {
      if (visible === true && count === 0) {
        count++;
        $('.stat-counter').each(function() {
          var dataValue = $(this).attr('data-value');
          $(this).find('.stat-count').delay(6000).countTo({
            from: 0,
            to: dataValue,
            speed: 3000,
            refreshInterval: 50
          });
        });
      }
    });

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
