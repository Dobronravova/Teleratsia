window.globals = {
    gallery: "",
};
window.globalsParam = {
    galleryParams: {
        gallery:true,
        item:1,
        thumbItem:6,
        slideMargin: 0,
        vertical:true,
        verticalHeight:500,
        speed:500,
        loop:true,
        thumbMargin:5,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    },
    galleryParamsMobile: {
        gallery:false,
        item:1,
        thumb:false,
        slideMargin: 0,
        vertical:false,
        controls: true,
        speed:500,
        loop:true,
        thumbMargin:0,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    }
};

$(function () {
    if ($(".container-subheader-inside").length){
        $('.container-subheader-inside').css("z-index", "1040");
        var scrollPos = 0;
        $(window).scroll(function(){
           var st = $(this).scrollTop();
           if (st > scrollPos){
            $('body.inside .fixed-top').css("margin-top", "-45px");
            $('.container-subheader-inside').css("top", "45px").css("z-index", "1400").css("position", "fixed").css("transition", "all 0.2s linear 0s");
            $('.dropdown-menu').removeClass('show');
           } else {
            $('body.inside .fixed-top').css("margin-top", "0").css("position", "fixed");
            $('.container-subheader-inside').css("top", "45px").css("z-index", "998");
            $("body.inside").css("padding-top", "115px");

            }
           scrollPos = st;
        });
        $(window).scroll(function() {
        if ( $(window).scrollTop() >= $('body').offset().top ) {
            $('body.inside .fixed-top').css("margin-top", "0");
        }
    });
    }
});

$(function () {
    new WOW().init();
    if ($(".slider-for").length){
         $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          infinite: false,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          vertical: true,
          verticalSwiping: true,
          focusOnSelect: true
        });
    }
         $('.slider-nav .slick-slide').removeClass('slick-active');
         $('.slider-nav .slick-slide').eq(0).addClass('slick-active');
         $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var mySlideNumber = nextSlide;
            $('.slider-nav .slick-slide').removeClass('slick-active');
            $('.slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
        });

    if ($(".full_slide").length){
      $('.full_slide').slick({
        dots: true,
        arrows : false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
  }

    if ($(".slick_bottom_products_items").length){
      $('.slick_bottom_products_items').slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

    if ($(".partners").length){
      $('.partners').slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
}
    $('header .fa-search').click(function(e){
        e.stopPropagation();
        $('header .input_search').addClass('db');
        $('header .input_search').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
        $('.modal').addClass('animated fadeIn').addClass('modal_mobile');
    });

    $('.input_search').click(function(e){
        e.stopPropagation();
    })

    $(document,'body').on('click',function(e){
        $('header .input_search').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
        setTimeout(function () { $('header .input_search').removeClass('db');}, 500);
    })

    $('header .fa-search').click(function(e){
        $("header .input_search").focus();
    });

    $('header .cart-icon').click(function(){
        $('.shopping-cart-product-list').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css('right', '5px');
        $('.modal').addClass('modal_mobile').addClass('z-index');
    });
    $('.user-section').click(function(){
        $('.account-block').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css('right', '0');
    });
});



$(document).mousedown(function (e) {
    var container = $(".login-form-container");
    if (container.has(e.target).length === 0){
        $('.login-form-container').removeClass('fadeIn').css('display','none');
    }
    var container = $(".account-block");
    if (container.has(e.target).length === 0){
        $('.modal').removeClass('modal_mobile').removeClass('z-index');
    }
});

$(document).ready(function() {
    $(document).mousedown(function (e){
        var accountblock = $(".account-block");
        if (!accountblock.is(e.target)
            && accountblock.has(e.target).length === 0) {
            $('.account-block').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
        }
    });
});

$(function() {
    $('.list1 .placeholder').on('click', function (ev) {
      $('.list1 .list__ul').toggle();
    });
     $('.list1 .list__ul a').on('click', function (ev) {
       ev.preventDefault();
       var index = $(this).parent().index();
       $('.list1 .placeholder').text( $(this).text() );
       console.log($('.list__ul').find('li').eq(index).html());
       $('.list1 .list__ul').find('li').eq(index).prependTo('.list__ul');
       $('.list1 .list__ul').toggle();   
       
     });
    $('.list1 select').on('change', function (e) {
      $('.list1 .placeholder').text(this.value);
      $(this).animate({width: $('.list1 .placeholder').width() + 'px' });
    });

    $('.list2 .placeholder').on('click', function (ev) {
      $('.list2 .list__ul').toggle();
    });
     $('.list2 .list__ul a').on('click', function (ev) {
       ev.preventDefault();
       var index = $(this).parent().index();
       $('.list2 .placeholder').text( $(this).text() );
       console.log($('.list__ul').find('li').eq(index).html());
       $('.list2 .list__ul').find('li').eq(index).prependTo('.list__ul');
       $('.list2 .list__ul').toggle();   
       
     });
    $('.list2 select').on('change', function (e) {
      $('.list1 .placeholder').text(this.value);
      $(this).animate({width: $('.list2 .placeholder').width() + 'px' });
    });

    $('.list3 .placeholder').on('click', function (ev) {
      $('.list3 .list__ul').toggle();
    });
     $('.list3 .list__ul a').on('click', function (ev) {
       ev.preventDefault();
       var index = $(this).parent().index();
       $('.list3 .placeholder').text( $(this).text() );
       console.log($('.list__ul').find('li').eq(index).html());
       $('.list3 .list__ul').find('li').eq(index).prependTo('.list__ul');
       $('.list3 .list__ul').toggle();   
       
     });
    $('.list3 select').on('change', function (e) {
      $('.list3 .placeholder').text(this.value);
      $(this).animate({width: $('.list3 .placeholder').width() + 'px' });
    });
});





$(function() {
    $(".tab_item").not(":first").hide();
    $(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});


$(function () {
    $("#open_modal").click(function() {
        $(".modal").fadeIn('easy');
    });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".modal-form"); // тут указываем ID элемента
    var close = $(".close");
    if (!div.is(e.target)// если клик был не по нашему блоку
        && div.has(e.target).length === 0  ||  close.is(e.target)) // и не по его дочерним элементам
    { 
    $(".modal").fadeOut('easy'); // скрываем его
    }
  });

    $("button.registration_submit:not([disabled])").click(function() {
        $(".modal").fadeIn('easy');
    });
});



$(function() {
    function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
    };

    function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
        $('body').toggleClass('hidden');
    };

    function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
    };

    init()
});

$(function () {
    if ($(".gallery-link").length){
        $('.gallery-link').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.find('figcaption').text() || item.el.attr('title');
                } },

            zoom: {
                enabled: false },

            // duration: 300
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                tCounter: '' },
        });
    }
});


$(function() {
    if ($(".gallery-link").length){
        var magnificPopup = $.magnificPopup.instance;
        $(".gallery-link").click(function(e) {
            setTimeout(function() {
                $(".mfp-container").swipe( {
                    swipeLeft:function(event, direction, distance, duration, fingerCount) {
                        console.log("swipe right");
                        magnificPopup.next();
                    },
                    swipeRight:function(event, direction, distance, duration, fingerCount) {
                        console.log("swipe left");
                        magnificPopup.prev();
                    },
                    swipeUp:function(event, direction, distance, duration, fingerCount) {
                        console.log("swipe up");
                        magnificPopup.close();
                    },
                });
            }, 500);
        });
    }
});



$(function() {
    if ($(".gallery-link").length){
        $('.youtube-link').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    }
                },
                srcAction: 'iframe_src',
            }
        });
    }
});



