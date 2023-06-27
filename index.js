const BASE_URL = 'http://45.12.239.156:8081/api';
let token = null;

export { BASE_URL, token };

const user = {
	login: 'frolov.e',
	password: 'jc63fk',
};

const saveToken = (tokenUser) => {
	localStorage.setItem('Token', tokenUser);
	token = tokenUser;
};

fetch(`${BASE_URL}/login`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
	body: JSON.stringify(user),
})
	.then((response) => {
		return response.json();
	})
	.then((data) => saveToken(data.token))
	.catch((error) => console.log('er', error));


