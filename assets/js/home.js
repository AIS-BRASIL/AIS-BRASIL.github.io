window.addEventListener('scroll', function() {
	var bannerHeight = document.getElementById('banner').offsetHeight;
	var ctaHeight = document.getElementById('cta').offsetHeight;
	var scrollPosition = window.scrollY;

	if (scrollPosition > bannerHeight / 3) {
		document.getElementById('header').style.display = 'none';
	}
	 else {
		document.getElementById('header').style.display = 'flex';
	}

	if(scrollPosition > ctaHeight / 3){
		document.getElementById('homebuttons').style.display = 'block';
		if(scrollPosition > bannerHeight){
			document.getElementById('homebuttons').style.display = 'none';
		}
	}
	else{
		document.getElementById('homebuttons').style.display = 'none';
	}
});