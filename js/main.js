function doCarouselContentAnimations(a){var b="webkitAnimationEnd animationend";a.each(function(){var a=$(this),c=a.data("animation");a.addClass(c).one(b,function(){a.removeClass(c)})})}jQuery(window).resize(function(){Modernizr.mq("all and (min-width: 768px)")?$(".reveal-footer .site-footer").prev().css("marginBottom",footerHeight):Modernizr.mq("all and (max-width: 768px)")&&$(".reveal-footer .site-footer").prev().css("marginBottom",0)}),jQuery(document).ready(function(){windowHeight=$(window).height(),footerHeight=$(".site-footer").outerHeight(),Modernizr.mq("all and (min-width: 768px)")&&$(".reveal-footer .site-footer").prev().css("marginBottom",footerHeight),$('#main-menu a[href*="#"]:not([href="#"])').click(function(){if($(this).closest(".menu-item").addClass("selected").siblings(".menu-item").removeClass("selected"),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},450),!1}}),$(window).scroll(function(){var a=$(this).scrollTop()+50;$(".main-header").hasClass("scrolled")?a<windowHeight&&$(".main-header").removeClass("scrolled"):a>windowHeight&&$(".main-header").addClass("scrolled"),$("#main-menu").hasClass("open")&&$("#main-menu").removeClass("open")}),$(".feature").waypoint(function(){$(this.element).removeClass("invisible").addClass("fadeInUp")},{offset:"bottom-in-view"}),$(".member").waypoint(function(){$(this.element).removeClass("invisible").addClass("fadeInUp")},{offset:"bottom-in-view"}),$(".fact").waypoint(function(){$(this.element).removeClass("invisible").addClass("fadeInUp")},{offset:"bottom-in-view"}),$(".count-to").waypoint(function(){$(".count-to").each(function(){$this=$(this),$countTo=$this.data("to"),$(this).numerator({duration:1e3,toValue:$countTo})})},{offset:"bottom-in-view"}),$(".menu-toggle").click(function(){$($(this).data("menu")).toggleClass("open")}),$("#works-showcase .row").mixItUp({selectors:{target:".work"}});var a=$("#hero-carousel");a.carousel({interval:4e3});var b=a.find(".item:first").find('[data-animation ^= "animated"]');doCarouselContentAnimations(b),$("#hero-carousel").on("slide.bs.carousel",function(a){var b=$(a.relatedTarget).find("[data-animation ^= 'animated']");doCarouselContentAnimations(b)})});