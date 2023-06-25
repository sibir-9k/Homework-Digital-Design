import Navigation from '../src/components/Navigation/index.js';
import PlugComponent from './components/Plug/index.js';
import projectItem from './components/Project-item/index.js';
import TaskItem from './components/Task-item/index.js';
import dropDownBtn from './utils/drop-down.js';
import toggleNavBtn from './utils/toggle-nav-btn.js';
import userAvatar from '@/assets/img/user.png';
import './style.scss';

function initApp() {
	let app = document.querySelector('.app');
	let content = document.createElement('div');
	content.classList.add('content');
	app.appendChild(content);

	app.insertAdjacentHTML('afterbegin', Navigation(userAvatar));
	content.insertAdjacentHTML('beforeend', projectItem());
	content.insertAdjacentHTML('beforeend', TaskItem(userAvatar));
	content.insertAdjacentHTML('beforeend', PlugComponent());
}

initApp();
dropDownBtn();
toggleNavBtn()
