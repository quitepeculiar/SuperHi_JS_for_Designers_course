const toggleTag = document.querySelector('a.toggle-nav');
const mainTag = document.querySelector('main');

// when I click the toggle tag, toggle a class of open on the main tag
// and if it is open, make the toggle tag say closed
// and if not, make the toggle tag say open
toggleTag.addEventListener('click', function () {
	mainTag.classList.toggle('open');

	if (mainTag.classList.contains('open')) {
		toggleTag.innerHTML = `<img src="close.svg"> Close`;
	} else {
		toggleTag.innerHTML = `<img src="menu.svg"> Menu`;
	}
});
