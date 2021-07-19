function switchCard() {
  var element = $("#switch-card");
  element.toggleClass("active");
}

function closeSwitchCard() {
  var element = $("#switch-card");
  element.addClass("active");
}


function switchSite() {
  window.open("https://banyanrestaurant.co.uk/");
}

function contactModal() {
  // $('#contact-us-modal').fadeToggle('slow', 'linear');
  $("#contact-us-modal").addClass("btn-active");
  var html = $('html');
  html.data('previous-overflow', html.css('overflow'));
  html.css('overflow', 'hidden');
}

function contactModalClose() {
  // $('#contact-us-modal').fadeToggle('slow', 'linear');
  $("#contact-us-modal").removeClass("btn-active");
  var html = $('html');
  html.css('overflow', html.data('previous-overflow'));
}

$(function () {
  var $animation_elements = $(".animation-element");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("in-view");
      } else {
        $element.removeClass("in-view");
      }
    });
  }

  function resizeLogFunction() {
    var logo = $("#logo")
    if(logo && logo[0]){
      var window_top_position = $window.scrollTop();
      if (window_top_position > 50) {
        logo[0].className = "addclass";
      } else {
        logo[0].className = "removeclass";
      }
    }
  }

  $window.on("scroll resize", check_if_in_view);
  $window.on("scroll resize", resizeLogFunction);
  $window.trigger("scroll");

  $("#trigger").click(function () {
    $("#dialog").dialog();
  });
});


$(function () {
  'use strict';
  $('.menu').hide();
  $('.navbar').removeClass('shadow-sm');
  $('.navbar-brand').css("display", "block")

  $('.hamburger-menu-wrapper').click(function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('.menu-overlay').fadeToggle('fast', 'linear');
          $('.menu').slideToggle('slow');
      } else {
          $(this).addClass('active');
          $('.menu-overlay').fadeToggle('fast', 'linear');
          $('.menu').slideToggle('slow');
          $(this).addClass('active');

      }
  })

  // if (on_index == "home") {
  //     $('.navbar-brand').hide();
  // }

  const $menu = $('.navbar');

  $(document).mouseup(e => {
      if (!$menu.is(e.target)
          && $menu.has(e.target).length === 0) {
          $('.ham').removeClass('active');
          $('.menu').hide();
      }
  });

  $(window).scroll(function () {
      $('.ham').removeClass('active');
      $('.menu').hide();

      if ($(this).scrollTop() > 0) {
          $('.navbar').addClass('shadow-sm');
          $('.navbar-brand').show();
      }
      else {
          $('.navbar').removeClass('shadow-sm');
          // if (on_index == "home") {
          //     $('.navbar-brand').hide();
          // }
      }

  });

});

//gallery

function openModal() {
  document.getElementById("myModal").style.display = "block";
  $('body').css("overflow", "hidden");
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  $('body').css("overflow", "auto");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumb-img");
  if(slides.length > 0){
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }

}

$(window).on('load', function () {
  setTimeout(closeSwitchCard, 2000);
});