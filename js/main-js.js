// ===== HEADER =====
$(document).ready(function() {
	// handling Hold header on top
	$(window).scroll(function() {
		if($(window).scrollTop() >= 150 ) {
			$("#header").addClass('sticky-top').css({'opacity':'0.9'});
		} else $("#header").removeClass('sticky-top').css('opacity','1');
	});

	// handling add border navbar menu
	$(window).resize(function() {
		if($(window).width() <= 992) {
			$("li.nav-item").removeClass('position-static');
			$("#dropdown").addClass('respon');

			$("#main-nav ul.navbar-nav").addClass('border-top');
		} else {
			$("li.nav-item").addClass('position-static');
			$("#dropdown").removeClass('respon');
			$("#main-nav ul.navbar-nav").removeClass('border-top')
		};
	})

	// handling show sub menu
	$("#main-nav ul.navbar-nav li").hover(function(){
		$(this).children('ul.sub-menu').stop().fadeIn(200).addClass('show');
	}, function() {
		$(this).children('ul.sub-menu').stop().fadeOut().removeClass('show');
	});

	// handling dropdown menu
	$("#main-nav ul.navbar-nav li").hover(function(){
		$(this).children('#dropdown').stop().fadeIn(200).addClass('show');
	} ,function(){
		$(this).children('#dropdown').stop().fadeOut().removeClass('show');
	});
});


// ===== BANNER =====
$(document).ready(function() {
	$("#home-slide").carousel({
		interval : 2000,
		ride : 'carousel'
	});
});


// ===== BACKTOP =====
$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() >= 300){
			$("#backtop").addClass('show');
		} else $("#backtop").removeClass('show');
	});
	$("#backtop").click(function() {
		$("html, body").animate({
			scrollTop : '0'
		},800)
	});
});

// ===== GENEREAL =====
// tooltip
$(document).ready(function() {
	$("[data-toggle='tooltip']").tooltip({
		placement : 'bottom',
		trigger : 'hover focus',
		html : true
	})
});
