/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavigation() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavigation);


/***/ }),

/***/ "./src/components/Plug/index.js":
/*!**************************************!*\
  !*** ./src/components/Plug/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PlugComponent = () => {
	return `
    <div class="plug">
      <div class="container">
        <div class="plug__block">
          <span class="plug__message">Не создан ни один проект</span>  
          <button class="plug__btn">Добавить</button>   
        </div>  
     </div>
   </div>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlugComponent);


/***/ }),

/***/ "./src/components/Project-item/index.js":
/*!**********************************************!*\
  !*** ./src/components/Project-item/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectItem);


/***/ }),

/***/ "./src/components/Task-item/index.js":
/*!*******************************************!*\
  !*** ./src/components/Task-item/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskItem);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_Navigation_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Navigation/index.js */ "./src/components/Navigation/index.js");
/* harmony import */ var _components_Plug_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Plug/index.js */ "./src/components/Plug/index.js");
/* harmony import */ var _components_Project_item_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Project-item/index.js */ "./src/components/Project-item/index.js");
/* harmony import */ var _components_Task_item_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Task-item/index.js */ "./src/components/Task-item/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");






function initApp(){
  let app = document.querySelector('.app')
  app.insertAdjacentHTML("afterbegin", (0,_src_components_Navigation_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
  app.insertAdjacentHTML("beforeend", (0,_components_Plug_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
  app.insertAdjacentHTML("beforeend", (0,_components_Project_item_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
  app.insertAdjacentHTML("beforeend", (0,_components_Task_item_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
}

initApp()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7OztVQ3ZCdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0U7QUFDZDtBQUNNO0FBQ047QUFDakM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtFQUFnQjtBQUN2RCxzQ0FBc0MscUVBQWE7QUFDbkQsc0NBQXNDLDZFQUFXO0FBQ2pELHNDQUFzQywwRUFBUTtBQUM5QztBQUNBO0FBQ0EsUyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWV3b3JrLWQtZC0yLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaG9tZXdvcmstZC1kLTIvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2hvbWV3b3JrLWQtZC0yLy4vc3JjL2NvbXBvbmVudHMvUGx1Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob21ld29yay1kLWQtMi8uL3NyYy9jb21wb25lbnRzL1Byb2plY3QtaXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob21ld29yay1kLWQtMi8uL3NyYy9jb21wb25lbnRzL1Rhc2staXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob21ld29yay1kLWQtMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21ld29yay1kLWQtMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXdvcmstZC1kLTIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21ld29yay1kLWQtMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWV3b3JrLWQtZC0yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb24oKSB7XHJcblx0cmV0dXJuIGBcclxuICAgIDxuYXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXZpZ2F0aW9uX19saXN0XCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj5cclxuICAgICAgICA8YnV0dG9uPtCf0YDQvtC10LrRgtGLPC9idXR0b24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5hdmlnYXRpb25fX2l0ZW1cIj5cclxuICAgICAgICA8YnV0dG9uPtCX0LDQtNCw0YfQuDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJuYXZpZ2F0aW9uX19pdGVtXCI+XHJcbiAgICAgICAgPGJ1dHRvbj7Qn9C+0LvRjNC30L7QstCw0YLQtdC70Lg8L2J1dHRvbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwidXNlci1pbWdcIj5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1nL3VzZXIucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XHJcbiAgICAgIDxidXR0b24+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvc3ZnL3VzZXItYXJyb3ctZG93bi5zdmdcIiBhbHQ9XCJcIj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgPC9uYXY+XHJcbiAgICBgO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdmlnYXRpb247XHJcbiIsImNvbnN0IFBsdWdDb21wb25lbnQgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJwbHVnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGx1Z19fYmxvY2tcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGx1Z19fbWVzc2FnZVwiPtCd0LUg0YHQvtC30LTQsNC9INC90Lgg0L7QtNC40L0g0L/RgNC+0LXQutGCPC9zcGFuPiAgXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGx1Z19fYnRuXCI+0JTQvtCx0LDQstC40YLRjDwvYnV0dG9uPiAgIFxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PmA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbHVnQ29tcG9uZW50O1xyXG4iLCJjb25zdCBwcm9qZWN0SXRlbSA9ICgpID0+IHtcclxuXHRyZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWl0ZW1cIj5cclxuICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pdGVtX190aXRsZVwiPtCd0LDQt9Cy0LDQvdC40LU8L2Rpdj4gICAgICAgXHJcbiAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaXRlbV9fYmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pdGVtX19ibG9jay1sZWZ0XCI+XHJcbiAgICAgICAgICAgIzEgPHNwYW4+INCY0LLQsNC90L7QsiDQmC7QmC4g0YHQvtC30LTQsNC7IDEg0YfQsNGBINC90LDQt9Cw0LQ8L3NwYW4+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWl0ZW1fX2Jsb2NrLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgPHNwYW4+0JHQsNGA0LDQvdC+0LIg0JIu0JIuINC40LfQvNC10L3QuNC7IDEg0LzQuNC90YPRgtGDINC90LDQt9Cw0LQ8L3NwYW4+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1pdGVtX19vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL3N2Zy9kb3RzLnN2Z1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgPC9kaXY+YDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RJdGVtO1xyXG4iLCJjb25zdCBUYXNrSXRlbSA9ICgpID0+IHtcclxuICByZXR1cm4gYFxyXG4gICA8ZGl2IGNsYXNzPVwidGFzay1pdGVtXCI+XHJcbiAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbV9fdGl0bGVcIj7QndCw0LfQstCw0L3QuNC1PC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbV9fYmxvY2tcIj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1fX2F1dGhvclwiPlxyXG4gICAgICAgICAjMSA8c3BhbiBjbGFzcz1cInRhc2staXRlbV9fYXV0aG9yLW5hbWVcIj7QmNCy0LDQvdC+0LIg0Jgu0JguINGB0L7Qt9C00LDQuyAxINGH0LDRgSDQvdCw0LfQsNC0PC9zcGFuPiBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzIHN0YXR1cy0tZHJhZnRcIj7Qp9C10YDQvdC+0LLQuNC6PC9kaXY+ICAgIFxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1pdGVtX19ibG9jay1yaWdodFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1pdGVtX19lZGl0b3JcIj5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWcvdXNlci5wbmdcIiBjbGFzcz1cInRhc2staXRlbV9fZWRpdG9yLWF2YXRhclwiIGFsdD1cIlVzZXJcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrLWl0ZW1fX2VkaXRvci1uYW1lXCI+0JHQsNGA0LDQvdC+0LIg0JIu0JIuINC40LfQvNC10L3QuNC7IDEg0LzQuNC90YPRgtGDINC90LDQt9Cw0LQ8L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFzay1pdGVtX19vcHRpb25zXCI+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvc3ZnL2RvdHMuc3ZnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+ICBcclxuICAgPC9kaXY+ICBcclxuICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tJdGVtXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZU5hdmlnYXRpb24gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vaW5kZXguanNcIlxyXG5pbXBvcnQgUGx1Z0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1BsdWcvaW5kZXguanNcIlxyXG5pbXBvcnQgcHJvamVjdEl0ZW0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0LWl0ZW0vaW5kZXguanNcIlxyXG5pbXBvcnQgVGFza0l0ZW0gZnJvbSBcIi4vY29tcG9uZW50cy9UYXNrLWl0ZW0vaW5kZXguanNcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5cclxuZnVuY3Rpb24gaW5pdEFwcCgpe1xyXG4gIGxldCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwJylcclxuICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjcmVhdGVOYXZpZ2F0aW9uKCkpXHJcbiAgYXBwLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBQbHVnQ29tcG9uZW50KCkpXHJcbiAgYXBwLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBwcm9qZWN0SXRlbSgpKVxyXG4gIGFwcC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgVGFza0l0ZW0oKSlcclxufVxyXG5cclxuaW5pdEFwcCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9