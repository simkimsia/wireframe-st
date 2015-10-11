import $ from 'jquery';

$(document).ready(function() {
	if(window.location.href.indexOf("/book") > -1) {
       $(".jsReadBook").show();
    }
	$('.jsMobileMenu').on('click', 'button', function (event) {
		//console.log(this);
		var triggeredElement = $(this).attr('ref');
		$(".jsSubBar").not(triggeredElement).removeClass('is-open');
		//console.log($(triggeredElement));
		$(triggeredElement).toggleClass('is-open');
	});
});