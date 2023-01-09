const headerTag = document.querySelector('header');

const toggleHeader = function () {
	const pixels = window.pageYOffset;
	if (pixels > 60) {
		headerTag.classList.add('scrolled');
	} else {
		headerTag.classList.remove('scrolled');
	}
};

const fadeBox = function () {
	const pixels = window.pageYOffset;
	const alpha = Math.min(pixels / 1000, 0.4);
	headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

fadeBox();
toggleHeader();

document.addEventListener('scroll', function () {
	fadeBox();
	toggleHeader();
});
