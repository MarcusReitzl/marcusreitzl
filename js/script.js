$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

    var typed = new Typed(".typed ", {
        strings: ["Software Engineer", "Data Scientist",  "Student"],
        typeSpeed: 90,
        loop: true,
        startDelay: 100,
        showCursor: false

    });

});