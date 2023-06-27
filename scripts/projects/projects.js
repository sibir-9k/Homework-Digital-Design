import projectsXML from './xml.js';
import projectsFetch from './fetch.js';
import projectsAxios from './axios.js';

/////// XMLHttpRequest ///////

// POST Создание проекта
const postXML = document.getElementById('create-xml');
postXML.addEventListener('click', projectsXML.postPrjectsXHR);

// GET Получение проекта по id
const getXML = document.getElementById('get-xml');
getXML.addEventListener('click', projectsXML.getProjectsXHR);

// PUT Изменение проекта
const putXML = document.getElementById('put-xml');
putXML.addEventListener('click', projectsXML.putProjectsXHR);

// DELETE Удаление проекта по id
const delXML = document.getElementById('del-xml');
delXML.addEventListener('click', projectsXML.deleteProjectsXHR);

/////// Fetch ///////

// POST Создание проекта
const postFetch = document.getElementById('create-fetch');
postFetch.addEventListener('click', projectsFetch.postPrjectsFetch);

// GET Получение проекта по id
const getFetch = document.getElementById('get-fetch');
getFetch.addEventListener('click', projectsFetch.getProjectsFetch);

// PUT Изменение проекта
const putFetch = document.getElementById('put-fetch');
putFetch.addEventListener('click', projectsFetch.putProjectsFetch);

// DELETE Удаление проекта по id
const delFetch = document.getElementById('del-fetch');
delFetch.addEventListener('click', projectsFetch.deleteProjectsFetch);

/////// Axios ///////

// POST Создание проекта
const postAxios = document.getElementById('create-axios');
postAxios.addEventListener('click', projectsAxios.postPrjectsAxios);

// GET Получение проекта по id
const getAxios = document.getElementById('get-axios');
getAxios.addEventListener('click', projectsAxios.getProjectsAxios);

// PUT Изменение проекта
const putAxios = document.getElementById('put-axios');
putAxios.addEventListener('click', projectsAxios.putProjectsAxios);

// DELETE Удаление проекта по id
const delAxios = document.getElementById('del-axios');
delAxios.addEventListener('click', projectsAxios.deleteProjectsAxios);







