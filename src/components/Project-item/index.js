import "@/assets/svg/dots.svg"
const projectItem = () => {
	return `
  <div class="project-item">
  <div class="project-item__container">
    <div class="project-item__block">
      <div class="item-block__header">
        <p class="header-message">
          Название
        </p>
      </div>
      <div class="item-block__footer">
        <div class="footer-author">
          #1 <span class="footer-author__name">Иванов И.И. создал 1 час назад</span>
        </div>
        <div class="footer__block-right">
          <div class="footer__editor">
            <span class="footer-author__name">Баранов В.В. изменил 1 минуту назад</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="project-item__setting">
    <button class="setting-btn" data-path="project-item">
      <svg>
        <use xlink:href="#dots" />
      </svg>
    </button>
    <ul data-target="project-item" class="setting-drop-down__list">
      <li class="drop-down__item">Редактировать</li>
      <li class="drop-down__item delete">Удалить</li>
    </ul>
  </div>
</div>
`
};

export default projectItem;
