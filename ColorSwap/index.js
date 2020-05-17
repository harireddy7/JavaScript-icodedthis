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
	const colorOptions = document.querySelectorAll('.color-option');
	colorOptions.forEach(node => {
		if (node.classList.toString().includes(classToBeApplied)) {
			node.classList.add('selected');
		} else {
			node.classList.remove('selected');
		}
	});
}
