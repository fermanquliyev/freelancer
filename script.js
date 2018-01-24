
		$("a.content-splash").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		});

		$("#portfolioLink").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#portfolio").offset().top
		    }, 1000);
		});

		$("#aboutLink").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});

		$("#contactLink").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 1000);
		});

		$("#portfolioLinkMenu").click(function() {
			$(".nav-dropdown-menu").slideToggle();
		    $('html, body').animate({
		        scrollTop: $("#portfolio").offset().top
		    }, 1000);
		});

		$("#aboutLinkMenu").click(function() {
			$(".nav-dropdown-menu").slideToggle();
		    $('html, body').animate({
		        scrollTop: $("#about").offset().top
		    }, 1000);
		});

		$("#contactLinkMenu").click(function() {
			$(".nav-dropdown-menu").slideToggle();
		    $('html, body').animate({
		        scrollTop: $("#contact").offset().top
		    }, 1000);
		});

		$(window).scroll(function(){
			if ($(window).scrollTop()>100) {
				$("#header").addClass("header-scroll");
				$("#logo").addClass("logo-fontsize");
				$("#nav-menu").addClass("nav-menu-scroll");
				$("#nav-button").addClass("line-height-scroll");
			}
			else {
				$("#header").removeClass("header-scroll");
				$("#logo").removeClass("logo-fontsize");
				$("#nav-menu").removeClass("nav-menu-scroll");
				$("#nav-button").removeClass("line-height-scroll");
			}
			if ($(window).scrollTop()>700&&$(window).scrollTop()<1600) {
				$("#portfolioLink").addClass("bg-green");
			}
			else {
				$("#portfolioLink").removeClass("bg-green");
			}
			if ($(window).scrollTop()>1600&&$(window).scrollTop()<2260) {
				$("#aboutLink").addClass("bg-green");
			}
			else {
				$("#aboutLink").removeClass("bg-green");
			}
			if ($(window).scrollTop()>2260&&$(window).scrollTop()<3200) {
				$("#contactLink").addClass("bg-green");
			}
			else {
				$("#contactLink").removeClass("bg-green");
			}
		});
		
		$("#nav-button").click(function(){
			$(".nav-dropdown-menu").slideToggle();
		});
		$(window).resize(function(){
			if($( document ).width()>992){
				$(".nav-dropdown-menu").css("display","none");
			}
		});