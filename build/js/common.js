$(document).ready(function() {

	$('.btn-menu').on('click' , function(){
		$('body').toggleClass('is-overflow');
		$('.right-section').toggleClass('is-hide');

	});

});