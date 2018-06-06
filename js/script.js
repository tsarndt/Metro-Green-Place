$(document).ready(function(){

	//Parallax scrolling images
	$(window).scroll(function(){
		var bodyTop=$(this).scrollTop();
		var descriptionTop=$('#guide-description').offset().top;
		var goalsFooter=$("#goals-footer").offset().top;

		if(bodyTop>descriptionTop && bodyTop<goalsFooter){
			$("#background-plx").css("background-image","url('images/melendrez_greening.jpg')");
		} 
		else if(bodyTop>goalsFooter){
			$("#background-plx").css("background-image","url('images/melendrez_placemaking_neighborhood.jpg')");
		}
		else{
			$("#background-plx").css("background-image","url('images/melendrez_mango_placemaking_4.jpg')");
		}
	});

    //click the collapsed navbar button
    $(".collapsed").click(function(){
    	$("#navbar").css("border-top", "none");
    	$('.collapsed').css({
    		"background-color":"white",
    		"border":"none"
    	});
    });

    //click the drop-down navigations
    $(".dropdown").click(function(){
    	$(this).children("a").css("background-color", "transparent");
    });

    //click the home arrow to scroll to navigation
    $("#homeArrow").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#navbar-main").offset().top
	    }, 1100, 'easeInOutSine');
	});

	//sticky navigation var
	var mn=$('#navbar-main');
	var jumbotron=$('.jumbotron');

	$(window).scroll(function(){
		if ($(this).scrollTop()>=1210){
			mn.addClass('navbar-main-scrolled');
		}
		else{
			mn.removeClass('navbar-main-scrolled');
		}
	});

	//click on circle menu div
	$('#circleMenu div img').click(function(){
		var content=$(this).parents().attr("data-id");
		var contentTop=$("#"+ content).offset().top;

		contentTop = contentTop - 50;

		$('html,body').animate({
			scrollTop: contentTop
		}, 1100, 'easeInOutSine');
	});

	//click on Up Arrows
	$(".upArrow").click(function(){
		var navTop=$("#jumbotron").height();

		$("html,body").animate({
			scrollTop: navTop
		}, 1500, 'easeInOutSine');
	});
	
});