const input = document.querySelector('.search');
const liElements = document.querySelectorAll('li');

const getResults = (e) => {
	const insideInput = e.target.value.toLowerCase();
	console.log(insideInput);
	liElements.forEach((item) => {
		const conditions = item.textContent.toLowerCase().indexOf(insideInput);
		conditions !== -1 ? (item.style.display = 'block') : (item.style.display = 'none');
	});
};

input.addEventListener('keyup', getResults);
