window.addEventListener('scroll', function() {
	var header = document.getElementById('header');
	var bannerHeight = document.getElementById('banner').offsetHeight;
	var scrollPosition = window.scrollY;

	if (scrollPosition > bannerHeight) {
	header.classList.add('none');
	} else {
	header.classList.remove('none');
	}
});