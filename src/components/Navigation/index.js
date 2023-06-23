function Navigation() {
	return `
    <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <button>Проекты</button>
      </li>
      <li class="navigation__item">
        <button>Задачи</button>
      </li>
      <li class="navigation__item">
        <button>Пользователи</button>
      </li>
    </ul>
    <div class="user-img">
      <img src="../../assets/img/user.png" alt="" width="24" height="24">
      <button>
        <img src="../../assets/svg/user-arrow-down.svg" alt="">
      </button>
    </div>
    <div></div>
  </nav>
    `;
}
export default Navigation;
