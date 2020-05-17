function addEvents() {
	const inc = document.getElementById('increment');
	const dec = document.getElementById('decrement');

	inc.addEventListener('click', increment);
	dec.addEventListener('click', decrement);
}

addEvents();

let count = 0;
const countEl = document.querySelectorAll('.count')[0];
countEl.innerHTML = count;

function increment() {
	if (count < 100) count += 1;
	countEl.textContent = count;
}

function decrement() {
	if (count > -100) count -= 1;
	countEl.textContent = count;
}
