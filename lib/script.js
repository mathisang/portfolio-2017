$(document).ready(function () {
  $('.js-scrollTo').on('click', function () { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed); // Go
    return false;
  });
  
  $(".home").hover(
    function () {
      $(".home>img").attr("src", "./images/home-hover.png");
    },
    function () {
      $(".home>img").attr("src", "./images/home.png");
    }
  );

  $(".footer_twitter").hover(
    function () {
      $(".footer_twitter>img").attr("src", "./images/twitter-hover.png");
    },
    function () {
      $(".footer_twitter>img").attr("src", "./images/twitter.png");
    }
  );

  $(".footer_vimeo").hover(
    function () {
      $(".footer_vimeo>img").attr("src", "./images/vimeo-hover.png");
    },
    function () {
      $(".footer_vimeo>img").attr("src", "./images/vimeo.png");
    }
  );

  $(".footer_linkedin").hover(
    function () {
      $(".footer_linkedin>img").attr("src", "./images/linkedin-hover.png");
    },
    function () {
      $(".footer_linkedin>img").attr("src", "./images/linkedin.png");
    }
  );

  $(".footer_behance").hover(
    function () {
      $(".footer_behance>img").attr("src", "./images/behance-hover.png");
    },
    function () {
      $(".footer_behance>img").attr("src", "./images/behance.png");
    }
  );

  var triItem = $(".tri ul li"),
    portfolioItem = $(".portfolio .crea");

  triItem.click(function () {
    var toSortId = $(this).attr("id");
    $(".active").removeClass("active");
    $(this).addClass("active");
    if (toSortId == "all") {
      portfolioItem.each(function () {
        $(this).show(); 
          $(this).delay(300).queue( function(next){ 
            $(this).removeClass("sortedDown");
        next(); 
      });
      });
    } else {
      portfolioItem.each(function () {
        if ($(this).hasClass(toSortId)) {
          $(this).delay(300).queue( function(next){ 
        $(this).show(); 
        next(); 
      });
          $(this).delay(300).queue( function(next){ 
            $(this).removeClass("sortedDown");
        next(); 
      });
        } else {
          $(this).addClass("sortedDown");
          $(this).delay(300).queue( function(next){ 
        $(this).hide(); 
        next(); 
      });
        }
      });
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() < 500) {
    $('.navigation').removeClass("animate_bar");
    }
    if ($(window).scrollTop() > 500) {
    $('.navigation').addClass("animate_bar");
    }   
    if ($(window).scrollTop() < 700) {
      $('.menu2').removeClass("selected");
    }
    if ($(window).scrollTop() > 700) {
      $('.menu2').addClass("selected");
      $('.menu3').removeClass("selected");
    }
    if ($(window).scrollTop() > 1500) {
      $('.menu3').addClass("selected");
      $('.menu2').removeClass("selected");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $('#book').css({
        transform: 'translate(0, 0)',
      });
      $('#book').fadeTo(.7, 1);
    }
    if ($(window).scrollTop() >= 1100) {
      $('#contact .size').css({
        transform: 'translate(0, 0)',
      });
      $('#contact .size').fadeTo(.7, 1);
    }

  });

  $('.envoyer').on('click', function (e) {
    e.preventDefault()

    $('.envoyer').val('Bientôt disponible !')
  });

})
