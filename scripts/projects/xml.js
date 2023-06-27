import { BASE_URL, token } from '../../index.js';

let projectID = null;

// POST Создание проекта
const postPrjectsXHR = () => {
	const xhr = new XMLHttpRequest();
	const createPost = {
		name: 'Egor Frolov -- projectXML',
		code: '42',
	};
	xhr.open('POST', `${BASE_URL}/projects`);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('postPrjectsXHR - POST Создание проекта', xhr.response);
		let project_Id = xhr.response._id;
    projectID = project_Id
		localStorage.setItem('project_Id-xhr', JSON.stringify(project_Id));
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send(JSON.stringify(createPost));
};

// GET Получение проекта по id
const getProjectsXHR = async () => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${BASE_URL}/projects/${projectID}`);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('getProjectsXHR - GET Получение проекта по id', xhr.response);
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send();
};

// PUT Изменение проекта
const putProjectsXHR = () => {
	const xhr = new XMLHttpRequest();
	const updPost = {
		_id: `${projectID}`,
		name: 'Egor Frolov -- projectXML -- update',
		code: '42 -- update',
	};
	xhr.open('PUT', `${BASE_URL}/projects`);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = () => {
		console.log('putProjectsXHR - PUT Изменение проекта', xhr.response);
	};
	xhr.onerror = () => {
		console.log(xhr.response);
	};
	xhr.send(JSON.stringify(updPost));
};

// DELETE Удаление проекта по id
const deleteProjectsXHR = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('DELETE', `${BASE_URL}/projects/${projectID}`);
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.onload = function () {
		var data = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == '200') {
			console.log('deleteProjectsXHR - DELETE Удаление проекта по id', data);
		} else {
			console.log(`Error: ${xhr.status}`);
		}
	};
	xhr.send();
};

export default { postPrjectsXHR, putProjectsXHR, deleteProjectsXHR, getProjectsXHR };
