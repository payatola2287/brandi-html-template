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
        var scroll = $(this).scrollTop();
        if(!$(".main-header").hasClass("scrolled")){
            if(scroll >= windowHeight){
                $(".main-header").addClass("scrolled");
            }        
        }else{
            if(scroll <= windowHeight){
                $(".main-header").removeClass("scrolled");
            }
        }
    });
    
    $(".menu-toggle").click(function(){
        $($(this).data('menu')).toggleClass('open');
    });
});
