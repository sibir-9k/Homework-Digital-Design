import Navigation from "../src/components/Navigation/index.js"
import PlugComponent from "./components/Plug/index.js"
import projectItem from "./components/Project-item/index.js"
import TaskItem from "./components/Task-item/index.js"
import "./style.scss"

function initApp(){
  let app = document.querySelector('.app')
  app.insertAdjacentHTML("afterbegin",Navigation())
  app.insertAdjacentHTML("beforeend", PlugComponent())
  app.insertAdjacentHTML("beforeend", projectItem())
  app.insertAdjacentHTML("beforeend", TaskItem())
}

initApp()