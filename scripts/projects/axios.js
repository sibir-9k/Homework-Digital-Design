import { BASE_URL, token } from '../../index.js';

let projectID = null;

// POST Создание проекта
const postPrjectsAxios = async () => {
	try {
		const response = await axios.post(
			`${BASE_URL}/projects`,
			{
				name: 'Egor Frolov -- projectAxios',
				code: '42',
			},
			{
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const result = response.data;
		const project_Id = result._id;
		projectID = localStorage.setItem('project_Id-axios', JSON.stringify(project_Id))
		console.log('postPrjectsAxios - POST Создание проекта');
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

// GET Получение проекта по id
const getProjectsAxios = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/projects/${projectID}`, {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(`getProjectsAxios -- GET Получение проекта по id`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

// PUT Изменение проекта
const putProjectsAxios = async () => {
	try {
		const response = await axios.put(
			`${BASE_URL}/projects`,
			{
				_id: `${projectID}`,
				name: 'Поменял',
				code: '42 поменял',
			},
			{
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(`putProjectsAxios -- PUT Изменение проекта`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

// DELETE Удаление проекта по id
const deleteProjectsAxios = async () => {
	try {
		const response = await axios.delete(`${BASE_URL}/projects/${projectID}`, {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(`deleteProjectsAxios -- DELETE Удаление проекта по id`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};


export default { postPrjectsAxios, putProjectsAxios, deleteProjectsAxios, getProjectsAxios };
