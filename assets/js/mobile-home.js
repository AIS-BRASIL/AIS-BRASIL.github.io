window.addEventListener('scroll', function() {
	if(window.innerWidth <= 720)
	{
		var buttons = document.getElementById('homebuttons');
		var header = document.getElementById('header');

		var bannerHeight = document.getElementById('banner').offsetHeight;
		var ctaHeight = document.getElementById('cta').offsetHeight;
		var scrollPosition = window.scrollY;

		if (scrollPosition > bannerHeight / 3) {
			header.classList.add('animate__fadeOutUp');
		}
		 else {
		 	header.classList.remove('animate__fadeOutUp');
		 	buttons.classList.add('animate__fadeOutDown'); // not working
			document.getElementById('header').style.display = 'flex';
		}

		if(scrollPosition > ctaHeight / 3){
			buttons.classList.remove('animate__fadeOutDown');
			document.getElementById('homebuttons').style.display = 'block';

			if(scrollPosition > bannerHeight){
				buttons.classList.add('animate__fadeOutDown');
			}
		}
		else{
			buttons.classList.remove('animate__fadeOutDown');
		}
	}
});