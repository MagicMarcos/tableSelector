document.querySelector('button').addEventListener('click', shuffleController);

function shuffle(arr) {
	let j, x, index;
	for (index = arr.length - 1; index > 0; index--) {
		j = Math.floor(Math.random() * (index + 1));
		x = arr[index];
		arr[index] = arr[j];
		arr[j] = x;
	}
	return arr;
}

const house = [
	'Bethel',
	'Ciara',
	'Daniel',
	'Daphny',
	'Ernest',
	'Gabrielle',
	'Julie',
	'Marcos',
	'Monica',
	'Shana',
	'Tarafinah',
];
let shuffledHouse;
function shuffleController() {
	shuffledHouse = shuffle(house);

	document.querySelector(
		'h1'
	).innerText = `ALL HAIL OUR DEAR LEADER: ${shuffledHouse[5]}`;
	console.log(`DEAR LEADER: ${shuffledHouse[5]}`);
	tableOneSort();
	tableTwoSort();
	getVice();
}

function tableOneSort() {
	const contributors1 = shuffledHouse.slice(
		0,
		Math.ceil((shuffledHouse.length - 1) / 2)
	);
	let str = '';
	const table = `table1`;
	const table1Display = document.getElementById('tableOne');
	for (const name of contributors1) {
		let li = document.createElement('li');
		table1Display.appendChild(li);
		li.innerHTML = `${name}`;
		str += `${name}, `;
	}
	str = str.substring(0, str.length - 2);
	console.log(`${table} ${str}`);
}

function tableTwoSort() {
	const contributors2 = shuffledHouse.slice(
		Math.ceil(shuffledHouse.length / 2)
	);
	let str = '';
	const table = `table2`;
	const table2Display = document.getElementById('tableTwo');
	for (const name of contributors2) {
		let li = document.createElement('li');
		table2Display.appendChild(li);
		li.innerHTML = `${name}`;
		str += `${name}, `;
	}
	str = str.substring(0, str.length - 2);
	console.log(`${table} ${str}`);
}

function getVice() {
	let vice = Math.floor(Math.random() * shuffledHouse.length);
	console.log(vice);
	if (vice == 5) {
		getVice();
	} else {
		showVice(vice);
	}
}

function showVice(vice) {
	document.querySelector('h2').innerText = `VP: ${shuffledHouse[vice]}`;
	console.log(`VP: ${shuffledHouse[vice]}`);
}
