import '@/assets/svg/dots.svg';
const TaskItem = (userAvatar) => {
	return `
  <div class="task-item">
    <div class="task-item__container">
      <div class="task-item__block">
        <div class="item-block__header">
          <p class="header-message">
            Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли
            верстка.
            И еще раз очень длинное название проекта, создано специально чтоб проверить не ломается ли
            И еще раз очень длинное название проекта, создано специально чтоб проверить не ломается ли
            И еще раз очень длинное название проекта, создано специально чтоб проверить не ломается ли
            И еще раз очень длинное название проекта, создано специально чтоб проверить не ломается ли
          </p>
          <div class="header-userAvatar">
            <img src=${userAvatar} class="task-item__editor-avatar" alt="User" width="24" height="24">
          </div>
        </div>
        <div class="item-block__footer">
          <div class="footer-author">
            #1 <span class="footer-author__name">Иванов И.И. создал 1 час назад</span>
            <div class="status status--draft">Черновик</div>
          </div>
          <div class="footer__block-right">
            <div class="footer__editor">
              <span class="footer-author__name">Баранов В.В. изменил 1 минуту назад</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="task-item__setting">
      <button class="setting-btn" data-path="task-item">
        <svg>
          <use xlink:href="#dots" />
        </svg>
      </button>
      <ul data-target="task-item" class="setting-drop-down__list">
        <li class="drop-down__item">Редактировать</li>
        <li class="drop-down__item delete">Удалить</li>
      </ul>
    </div>
  </div>
`
}

export default TaskItem;
