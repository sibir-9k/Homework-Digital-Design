const projectItem = () => {
	return `
  <div class="project-item">
     <div class="project-item__title">Название</div>       
     <div class="project-item__block">
        <div class="project-item__block-left">
           #1 <span> Иванов И.И. создал 1 час назад</span> 
        </div>
        <div class="project-item__block-right">
           <span>Баранов В.В. изменил 1 минуту назад</span>
          <button class="project-item__options">
            <img src="../../assets/svg/dots.svg" alt="">
           </button>
         </div>     
      </div>         
   </div>`;
};

export default projectItem;
