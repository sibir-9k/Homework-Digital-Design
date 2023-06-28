import { BASE_URL, token } from '../../index.js';

let taskId = null
const executor = '648af1fb7287972ce8676f0e';

// POST Создание задачи
const postTasksAxios = async () => {
	try {
		const response = await axios.post(
			`${BASE_URL}/tasks`,
			{
				name: 'Egor F.',
				description: 'task-axios-post',
				projectId: `${localStorage.getItem('project_Id-axios')}`,
				executor: `${executor}`,
			},
			{
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const result = response.data;
    taskId = result._id
		console.log('postTasksAxios - POST Создание проекта');
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

// GET Поиск задачи по id
const getTasksAxios = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/tasks/${taskId}`, {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(`getTasksAxios -- GET Получение проекта по id`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

// PUT Редактирование задачи
const putTasksAxios = async () => {
	try {
		const response = await axios.put(
			`${BASE_URL}/tasks`,
			{
        "_id": `${taskId}`,
        "name": "Egor F",
        "description": "task-put-axios",
        "projectId": `${localStorage.getItem('project_Id-axios')}`,
        "executor": `${executor}`,
        "status": "IN_PROCESS" // см. рест /statuses
			},
			{
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(`putTasksAxios -- PUT Изменение проекта`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

// DELETE Удаление проекта по id
const deleteTasksAxios = async () => {
	try {
		const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`, {
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(`deleteTasksAxios -- DELETE Удаление проекта по id`);
		console.log(response.data);
	} catch (error) {
		console.log(error);
	}
};

export default { postTasksAxios, putTasksAxios, deleteTasksAxios, getTasksAxios };
