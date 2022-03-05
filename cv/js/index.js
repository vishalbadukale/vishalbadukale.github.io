$(document).on("click", "a.scroller", function(event){
	var target = $(this).attr("id");
	$("html, body").animate({
	scrollTop: $(target).offset().top
	}, 1000);
	return false;
});

