$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click", "li span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

$("input").on("keypress", function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>' + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle();	
});

