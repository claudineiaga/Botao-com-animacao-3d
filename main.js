$(window).ready(function(){
	$(".botao").wrapInner('<div class=botaotext></div>');
        $(".botaotext").clone().appendTo( $(".botao") );
    	$(".botao").append('<span class="girar"></span><span class="girar"></span><span class="girar"></span><span class="girar"></span>');
	$(".girar").css("width", "25%").css("width", "+=3px");
});