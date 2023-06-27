import { BASE_URL, token } from '../../index.js';

let projectID = null;

// POST Создание проекта
const postPrjectsFetch = async () => {
	let response = await fetch(`${BASE_URL}/projects`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			name: 'Egor Frolov -- projectFetch',
			code: '42',
		}),
	});

	let result = await response.json();
	let project_Id = result._id;
	projectID = localStorage.setItem('project_Id-fetch', JSON.stringify(project_Id))
	console.log('postPrjectsFetch - POST Создание проекта');
	console.log(result);
};

// GET Получение проекта по id
const getProjectsFetch = async () => {
	let response = await fetch(`${BASE_URL}/projects/${projectID}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	let result = await response.json();
	console.log('getProjectsFetch - GET Получение проекта по id');
	console.log(result);
};

// PUT Изменение проекта
const putProjectsFetch = async () => {
	let response = await fetch(`${BASE_URL}/projects`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			_id: `${projectID}`,
			name: 'Поменял',
			code: '42 поменял',
		}),
	});

	let result = await response.json();
	console.log('gputProjectsFetch - PUT Изменение проекта');
	console.log(result);
};

// DELETE Удаление проекта по id
const deleteProjectsFetch = async () => {
	let response = await fetch(`${BASE_URL}/projects/${projectID}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
	let result = await response.json();
	console.log('deleteProjectsFetch - DELETE Удаление проекта по id');
	console.log(result);
};

export default { postPrjectsFetch, putProjectsFetch, deleteProjectsFetch, getProjectsFetch };
