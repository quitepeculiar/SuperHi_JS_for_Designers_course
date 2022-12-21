// Pick all of the images and layer them based on the z-index

const slideArea = document.querySelector('div.slides');
const images = slideArea.querySelectorAll('img');

// We want to keep track of two things:
// Which slide are we currently talking about?
// What the z-index is?
let currentSlide = 0;
let z = 1;

// when I click the slide area, change the slide based on
// the z-index
slideArea.addEventListener('click', function () {
	currentSlide = currentSlide + 1;
	if (currentSlide > images.length - 1) {
		currentSlide = 0;
	}
	z = z + 1;

	// remove the animation from the style for EVERY IMAGE
	images.forEach((image) => {
		image.style.animation = '';
	});

	// pick the right image
	images[currentSlide].style.zIndex = z;
	images[currentSlide].style.animation = 'fade 0.5s';
});

// when i put my mouse over the slide area, put all the images
// in a random place

slideArea.addEventListener('mouseover', function () {
	images.forEach((image) => {
		const x = 25 * Math.floor(Math.random() * 5) - 50;
		const y = 25 * Math.floor(Math.random() * 5) - 50;

		image.style.transform = `translate(${x}px, ${y}px)`;
	});
});

// when I move my mouse away, put the images back
slideArea.addEventListener('mouseout', function () {
	images.forEach((image) => {
		image.style.transform = '';
	});
});
