import { BASE_URL, token } from '../../index.js';

const projectId = JSON.parse(localStorage.getItem('project_Id-axios'));
let taskId = null;

// POST Создание задачи
const postTasksFetch = async () => {
	let response = await fetch(`${BASE_URL}/tasks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			name: 'Egor F.',
			description: 'task-fetch-post',
			projectId: `${projectId}`,
			executor: 'id',
		}),
	});

	let result = await response.json();
	taskId = result._id
	console.log('postPrjectsFetch - POST Создание проекта');
	console.log(result);
};

// GET Получение проекта по id
const getTasksFetch = async () => {
	let response = await fetch(`${BASE_URL}/tasks/${projectId}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	let result = await response.json();
	console.log('getTasksFetch - GET Получение проекта по id');
	console.log(result);
};

// PUT Изменение проекта
const putTasksFetch = async () => {
	let response = await fetch(`${BASE_URL}/tasks`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
      "_id": `${taskId}`,
      "name": "Egor. F.",
      "description": "task-put-fetch",
      "projectId": `${projectId}`,
      "executor": "id",
      "status": "IN_PROCESS" // см. рест /statuses
		}),
	});

	let result = await response.json();
	console.log('putTasksFetch - PUT Изменение проекта');
	console.log(result);
};

// DELETE Удаление проекта по id
const deleteTasksFetch = async () => {
	let response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
	let result = await response.json();
	console.log('deleteTasksFetch - DELETE Удаление проекта по id');
	console.log(result);
};

export default { postTasksFetch, putTasksFetch, deleteTasksFetch, getTasksFetch };
