const TaskItem = () => {
  return `
   <div class="task-item">
     <div class="task-item__title">Название</div>
     <div class="task-item__block">
       <div class="task-item__author">
         #1 <span class="task-item__author-name">Иванов И.И. создал 1 час назад</span> 
           <div class="status status--draft">Черновик</div>    
       </div>
       <div class="task-item__block-right">
         <div class="task-item__editor">
           <img src="../../assets/img/user.png" class="task-item__editor-avatar" alt="User" width="24" height="24">
         <span class="task-item__editor-name">Баранов В.В. изменил 1 минуту назад</span>
         </div>
         <button class="task-item__options">
           <img src="../../assets/svg/dots.svg" alt="">
         </button>
       </div>
     </div>  
   </div>  
  </div>`
}

export default TaskItem
