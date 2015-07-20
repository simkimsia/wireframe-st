var $ = require('jquery');

$(document).ready(function() {
	$('.jsMobileMenu').on('click', 'button', function (event) {
		console.log(this);
		var triggeredElement = $(this).attr('ref');
		console.log($(triggeredElement));
		$(triggeredElement).toggleClass('is-open');
	})
});