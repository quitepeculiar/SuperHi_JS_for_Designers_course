const irisLeft = document.querySelector('div.iris-left');
const irisRight = document.querySelector('div.iris-right');

let interval = null;

// move the eyes every 3s
const startInterval = function () {
	clearInterval(interval);
	interval = setInterval(() => {
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;

		moveEye(irisLeft, x, y);
		moveEye(irisRight, x, y);
	}, 3000);
};

const moveEye = function (tag, mouseX, mouseY) {
	// Get the centre of the eye!
	const eyeMidX = tag.getBoundingClientRect().left;
	const eyeMidY = tag.getBoundingClientRect().top;

	// move the eyes every 3s
	const startInterval = function () {
		clearInterval(interval);
		interval = setInterval(() => {
			const x = Math.random() * window.innerWidth;
			const y = Math.random() * window.innerHeight;

			moveEye(irisLeft, x, y);
			moveEye(irisRight, x, y);
		}, 3000);
	};

	// find the difference btw eye and mouse cursor
	const diffX = mouseX - eyeMidX;
	const diffY = mouseY - eyeMidY - window.pageYOffset;

	// Pythagorus Theorem
	const diff = Math.sqrt(diffX * diffX + diffY * diffY);

	// what is the capped radius
	const radius = Math.min(3, diff);

	// tan in math
	const angle = Math.atan2(diffY, diffX);

	// get the capped version of this, based on the angle
	const cappedX = radius * Math.cos(angle);
	const cappedY = radius * Math.sin(angle);

	const eyeTag = tag.querySelector('div');

	eyeTag.style.left = cappedX + 'px';
	eyeTag.style.top = cappedY + 'px';
};

startInterval();

document.addEventListener('mousemove', function (event) {
	startInterval();
	moveEye(irisLeft, event.pageX, event.pageY);
	moveEye(irisRight, event.pageX, event.pageY);
});
