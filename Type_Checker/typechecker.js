const sentenceTag = document.querySelector(`input[type="text"]`);

const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector('span.typesize-output');

const fontweightTag = document.querySelector(`input[name="fontweight"]`);
const fontweightOutput = document.querySelector('span.fontweight-output');

const lineheightTag = document.querySelector(`input[name="lineheight"]`);
const lineheightOutput = document.querySelector('span.lineheight-output');

const italicTag = document.querySelector(`input[name="italic"]`);

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const colorTags = document.querySelectorAll('div.colors div');

const outputTag = document.querySelector('textarea.output');
const originalText = outputTag.value;

// when I type in my sentence tag, update the output tag accordingly
sentenceTag.addEventListener('keyup', function () {
	if (this.value) {
		outputTag.value = this.value;
	} else {
		outputTag.value = originalText;
	}
});

// when I type in my output tag, update the sentence tag accordingly
outputTag.addEventListener('keyup', function () {
	if (this.value) {
		sentenceTag.value = this.value;
	} else {
		outputTag.value = originalText;
	}
});

// when I change the type size slider, update the text next to it
// and change the outputTag's font size
typesizeTag.addEventListener('input', function () {
	outputTag.style.fontSize = this.value + 'px';
	typesizeOutput.innerHTML = this.value + 'px';
});

fontweightTag.addEventListener('input', function () {
	outputTag.style.fontWeight = this.value;
	fontweightOutput.innerHTML = this.value;
});

lineheightTag.addEventListener('input', function () {
	outputTag.style.lineHeight = this.value;
	lineheightOutput.innerHTML = this.value;
});

// when I tick the italic checkbox, update the font style
// to either normal or italic
italicTag.addEventListener('change', function () {
	if (this.checked) {
		outputTag.style.fontStyle = 'italic';
	} else {
		outputTag.style.fontStyle = 'normal';
	}
});

// when I change my select for typeface, update font family

typefaceTag.addEventListener('input', function () {
	outputTag.style.fontFamily = this.value;
});

// go through all color tags, then when clicked, change
// background color + text color
// also change tag to be selected
colorTags.forEach((tag) => {
	tag.addEventListener('click', function () {
		outputTag.style.backgroundColor = this.style.backgroundColor;
		outputTag.style.color = this.style.color;

		// reset the classes
		colorTags.forEach((tag) => {
			tag.classList.remove('selected');
		});

		// add selected class to clicked one
		this.classList.add('selected');
	});
});
