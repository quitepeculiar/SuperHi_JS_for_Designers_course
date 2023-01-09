const animatedTags = document.querySelectorAll(
	'h2, h3, p, section img, a.button'
);

// fade out on load
animatedTags.forEach((tag) => {
	tag.style.opacity = 0;
});

const fadeIn = function () {
	let delay = 0.25;
	// loop through all animated tags
	// see with getBoundingClientRect to see if it's in window
	animatedTags.forEach((tag) => {
		// we want the bottom and top position of window
		const tagTop = tag.getBoundingClientRect().top;
		const tagBottom = tag.getBoundingClientRect().bottom;

		if (tagTop < window.innerHeight && tagBottom) {
			tag.style.animation = `fadein 1s ${delay}s both`;
			delay = delay + 0.25;
		} else {
			tag.style.opacity = 0;
			tag.style.animation = '';
		}
	});
};

// on load, run fadeIn
fadeIn();

// on scroll, run fadeIn
document.addEventListener('scroll', function () {
	fadeIn();
});

// on browser/viewport resize, run fadeIn
window.addEventListener('resize', function () {
	fadeIn();
});
