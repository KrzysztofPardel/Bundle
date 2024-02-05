const ball = document.querySelector('.ball');
const input = document.querySelector('.questionInput');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	'Yes',
	'Not really',
	"You don't want to know",
	'I think so',
	'Aboslutely',
	'Most certainly',
	'Absolutely not',
	'No',
	'As for me, yes.',
	'Maybe, but I would have to ask.',
	'I used to think that way.',
];

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		check();
	}
};
const shake = () => {
	ball.classList.add('shake-animation');
	answer.textContent = answers[Math.floor(Math.random() * 10)];
	if (answer.textContent !== '') {
		setTimeout(function () {
			ball.classList.remove('shake-animation');
		}, 500);
	}
};
const check = () => {
	const question = input.value;
	if (question === '') {
		error.textContent = 'Ask a question first.';
		answer.textContent = '';
		console.log('Musisz zadać pytanie');
	} else {
		error.textContent = '';
		shake(question);
		console.log('Ok');
	}
};

ball.addEventListener('click', check);
input.addEventListener('keyup', enterKeyCheck);
