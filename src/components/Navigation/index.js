import '@/assets/svg/user-arrow-down.svg'
function Navigation(userAvatar) {
	return `
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <button class="nav-btn">Проекты</button>
      </li>
      <li class="navigation__item">
        <button class="nav-btn">Задачи</button>
      </li>
      <li class="navigation__item">
        <button class="nav-btn">Пользователи</button>
      </li>
    </ul>
    <div class="user-block">
      <button class="user-img setting-btn" data-path="user">
        <img src=${userAvatar} alt="" width="24" height="24">
        <svg>
          <use xlink:href="#user-arrow-down" />
        </svg>
      </button>
      <ul data-target="user" class="setting-drop-down__list">
        <li class="drop-down__item">Профиль</li>
        <li class="drop-down__item">Выход</li>
      </ul>
    </div>
  </nav>
  `;
}
export default Navigation;
