const ball: HTMLElement | null = document.querySelector('.ball');
const questionInput: HTMLInputElement | null = document.querySelector('.questionInput');
const answer: HTMLElement | null = document.querySelector('.answer');
const mistake: HTMLElement | null = document.querySelector('.error');

const answers: string[] = [
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

const enterKeyCheck = (e: KeyboardEvent): void => {
	if (e.key === 'Enter') {
		check();
	}
};
const shake = (): void => {
	if (ball && answer) {
		ball.classList.add('shake-animation');
		answer.textContent = answers[Math.floor(Math.random() * 10)];
		if (answer.textContent !== '') {
			setTimeout(function () {
				ball?.classList.remove('shake-animation');
				//check if ball is not null before attmpting
				//to access its classList property
			}, 500);
		}
	}
};
const check = (): void => {
	if (questionInput && mistake && answer) {
		const question = questionInput.value;
		if (question === '') {
			mistake.textContent = 'Ask a question first.';
			answer.textContent = '';
			console.log('Musisz zadać pytanie');
		} else {
			mistake.textContent = '';
			shake(); //question?
			console.log('Ok');
		}
	}
};
if (ball) {
	ball.addEventListener('click', check);
}
if (questionInput) {
	questionInput.addEventListener('click', check);
}
