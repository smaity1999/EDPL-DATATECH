$('.future-projects').slick({
	dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    // cssEase: 'linear',
    infinite: true
});

$(document).on('click', '#all-gal-btn', function(){
	$('#services').css("display", "block");
	$('#products').css("display", "block");
});

$(document).on('click', '#gal-services', function(){
	// document.getElementById('services').style.display = 'block';
	// document.getElementById('products').style.display = 'none';
	$('#services').css("display", "block");
	$('#products').css("display", "none");
});

$(document).on('click', '#gal-projects', function(){
	$('#services').css("display", "none");
	$('#products').css("display", "block");
});