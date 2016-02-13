jQuery(document).ready(function(){
    $(".menu-toggle").click(function(){
        $($(this).data('menu')).toggleClass('open');
    });
});
