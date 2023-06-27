import { BASE_URL, token } from '../../index.js';

const projectId = JSON.parse(localStorage.getItem('project_Id-xhr'));
let taskId = null;

// POST Создание проекта
const postPrjectsXHR = () => {
	const xhr = new XMLHttpRequest();
	const createPost = {
		name: 'Egor F.',
		description: 'task-xhr-post',
		projectId: `${projectId}`,
		executor: 'id',
	};
	xhr.open('POST', `${BASE_URL}/tasks`);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('postPrjectsXHR - POST Создание проекта', xhr.response);
		taskId = xhr.response._id;
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send(JSON.stringify(createPost));
};

// GET Получение проекта по id
const getTasksXHR = async () => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${BASE_URL}/tasks/${taskId}`);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('getTasksXHR - GET Получение проекта по id', xhr.response);
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send();
};

// PUT Изменение проекта
const putTasksXHR = () => {
	const xhr = new XMLHttpRequest();
	const updPost = {
    "_id": `${taskId}`,
    "name": "Egor. F.",
    "description": "task-put-xhr",
    "projectId": `${projectId}`,
    "executor": "id",
    "status": "IN_PROCESS" // см. рест /statuses
	};
	xhr.open('PUT', `${BASE_URL}/tasks`);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('putTasksXHR - PUT Изменение проекта', xhr.response);
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send(JSON.stringify(updPost));
};

// DELETE Удаление проекта по id
const deleteTasksXHR = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('DELETE', `${BASE_URL}/tasks/${projectId}`);
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = function () {
		var data = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == '200') {
			console.log('deleteTasksXHR - DELETE Удаление проекта по id', data);
		} else {
			console.log(`Error: ${xhr.status}`);
		}
	};
	xhr.send();
};

export default { postPrjectsXHR, putTasksXHR, deleteTasksXHR, getTasksXHR };
