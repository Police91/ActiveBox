$(function(){
        /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    
    let posScrol = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = intro.height();
        posScrol = $(this).scrollTop();

        if( posScrol > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show")

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    /*Nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

/*Reviews Slider ----https://kenwheeler.github.io/slick/*/
    let slider = ("#reviewsSlider");
    
        $(slider).slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });


});