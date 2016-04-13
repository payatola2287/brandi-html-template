function doCarouselContentAnimations(elements){
    var animEndEv = 'webkitAnimationEnd animationend';

    elements.each(function(){
        var $this = $(this),
            $animationType = $this.data('animation');
        
        $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
        });
    });
    /*var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
        var $this = $(this),
            $animationType = $this.data('animation');

        // Add animate.css classes to
        // the elements to be animated 
        // Remove animate.css classes
        // once the animation event has ended
        $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
        });
    });*/
}

jQuery(document).ready(function(){
    windowHeight = $(window).height();
    $('#main-menu a[href*="#"]:not([href="#"])').click(function() {
        $(this).closest(".menu-item").addClass("selected").siblings(".menu-item").removeClass("selected");
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 450);
                return false;
            }
        }
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop() + 50;
        if(!$(".main-header").hasClass("scrolled")){
            if(scroll > windowHeight){
                $(".main-header").addClass("scrolled");
            }        
        }else{
            if(scroll < windowHeight){
                $(".main-header").removeClass("scrolled");
            }
        }
        if($("#main-menu").hasClass('open')){
            $("#main-menu").removeClass('open');
        }
    });
    $('.animated').viewportChecker({
        classToAdd : 'fadeInUp'
    });
    $(".menu-toggle").click(function(){
        $($(this).data('menu')).toggleClass('open');
    });
    $("#works-showcase .row").mixItUp({
        selectors : {
            target : '.work'
        }
    });

    var $heroCarousel = $('#hero-carousel');

    $heroCarousel.carousel({
        interval: 4000
    });

    var $heroOnloadElements = $heroCarousel.find('.item:first').find('[data-animation ^= "animated"]')

    doCarouselContentAnimations($heroOnloadElements);


    $("#hero-carousel").on('slide.bs.carousel',function(element){
        var $animatingElems = $(element.relatedTarget)
        .find("[data-animation ^= 'animated']");
        doCarouselContentAnimations($animatingElems);
    });
});
