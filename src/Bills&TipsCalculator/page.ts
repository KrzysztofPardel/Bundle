/*
//I select the element that I need
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');
const result = document.querySelector('.cost-info');
const error = document.querySelector('.error');
const contributionCost = document.querySelector('.cost');

const isFilled = () => {
	const billValue = price.value;
	const amountPeople = people.value;
	const amountTip = tip.value;
	if (billValue === '' || amountPeople === '' || amountTip === '') {
		error.textContent = 'Please fill out all sections.';
		error.style.color = 'red';
	} else {
		countTip(billValue, amountPeople, amountTip);
	}
};

const countTip = (billValue, amountPeople, amountTip) => {
	// const everyonesContribution = Math.round((billValue * (billValue * (1 + amountTip / 100))) / amountPeople);
	if (amountPeople !== 0) {
		const everyonesContribution = Math.round((billValue * (1 + amountTip / 100)) / amountPeople);
		contributionCost.textContent = everyonesContribution;
	} else {
		error.textContent = 'Number of people cannot be zero.';
		error.style.color = 'red';
	}
	const everyonesContribution = Math.round((billValue * (1 + amountTip / 100)) / amountPeople);
	result.textContent = everyonesContribution;
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		isFilled();
	}
};
//I add event listener;

btnCount.addEventListener('click', isFilled);
btnCount.addEventListener('keyup', enterKeyCheck);
*/
//version2
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('#error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Fill out all of the sections';
		costInfo.style.display = 'none';
	} else {
		countBill();
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value); //zmiana na number+przybliżenie
	const newPeople = parseInt(people.value); //zmiana na number
	const newTip = parseFloat(tip.value);
	const sum = (newPrice + newPrice * newTip) / newPeople;
	costInfo.style.display = 'block';

	cost.textContent = sum.toFixed(2);
};

countBtn.addEventListener('click', showBill);
