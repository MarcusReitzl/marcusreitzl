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


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });



    var skillsTopOffset = $('.skillsSection').offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                basColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });  
        }
    });

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
        $(".counter").each(function() {
            var element = $(this);
            var endVal = parseInt(element.text());

            element.countUp(endVal);
        })

        countUpFinished = true;

    }

});