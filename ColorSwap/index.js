function addEvents() {
	const colorOption = document.querySelectorAll('.color-option');
	colorOption.forEach(node => {
		const { classList } = node;
		node.addEventListener('click', changeBgColor.bind(this, classList[1]));
	});
}

addEvents();

function changeBgColor(classToBeApplied) {
	const colorBox = document.querySelector('.color-box');
	colorBox.classList = `color-box ${classToBeApplied}`;
	// console.log('classes:: ', colorBox.classList, classToBeApplied);
}
