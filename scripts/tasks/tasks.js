import tasksXML from './xml.js';
import tasksFetch from './fetch.js';
import tasksAxios from './axios.js';

/////// XMLHttpRequest ///////

// POST Создание проекта
const postXML = document.getElementById('create-xml-tasks');
postXML.addEventListener('click', tasksXML.putTasksXHR);

// GET Получение проекта по id
const getXML = document.getElementById('get-xml-tasks');
getXML.addEventListener('click', tasksXML.getTasksXHR);

// PUT Изменение проекта
const putXML = document.getElementById('put-xml-tasks');
putXML.addEventListener('click', tasksXML.putTasksXHR);

// DELETE Удаление проекта по id
const delXML = document.getElementById('del-xml-tasks');
delXML.addEventListener('click', tasksXML.deleteTasksXHR);

/////// Fetch ///////

// POST Создание проекта
const postFetch = document.getElementById('create-fetch-tasks');
postFetch.addEventListener('click', tasksFetch.postTasksFetch);

// GET Получение проекта по id
const getFetch = document.getElementById('get-fetch-tasks');
getFetch.addEventListener('click', tasksFetch.getTasksFetch);

// PUT Изменение проекта
const putFetch = document.getElementById('put-fetch-tasks');
putFetch.addEventListener('click', tasksFetch.putTasksFetch);

// DELETE Удаление проекта по id
const delFetch = document.getElementById('del-fetch-tasks');
delFetch.addEventListener('click', tasksFetch.deleteTasksFetch);

/////// Axios ///////

// POST Создание проекта
const postAxios = document.getElementById('create-axios-tasks');
postAxios.addEventListener('click', tasksAxios.postTasksAxios);

// GET Получение проекта по id
const getAxios = document.getElementById('get-axios-tasks');
getAxios.addEventListener('click', tasksAxios.getTasksAxios);

// PUT Изменение проекта
const putAxios = document.getElementById('put-axios-tasks');
putAxios.addEventListener('click', tasksAxios.putTasksAxios);

// DELETE Удаление проекта по id
const delAxios = document.getElementById('del-axios-tasks');
delAxios.addEventListener('click', tasksAxios.deleteTasksAxios);
