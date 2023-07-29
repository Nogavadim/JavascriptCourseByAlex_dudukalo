// Дом
// Обявление переменных и добавление класов

// контейнер
let container = document.createElement('div')
container.classList.add('container')
// Хеадер
let header = document.createElement('div')
header.classList.add('header')
// инпут
let taskInp = document.createElement('input')
taskInp.placeholder = 'Введите задачу'
taskInp.type = 'text'
taskInp.classList.add('input-task')
// Кнопка
let appTaskBtn = document.createElement('button')
appTaskBtn.classList.add('btn-reset', 'header-btn')
appTaskBtn.textContent = 'Создать задачу'
// майн
let list = document.createElement('ul')
list.classList.add('list', 'list-reset')


// Добавление в дом
document.body.append(container)
container.append(header, list)
header.append(taskInp, appTaskBtn)
// list.append(list__item)
let index = 0


// ФУнкции

// Функция создание кнопки
function getButton (text, className) {
  let button = document.createElement('button')
  button.textContent = text
  button.classList.add('btn-reset', 'btn', className)
  return button
}

// функция добавления карточки
appTaskBtn.onclick = function() {
  index++



  let list__item = document.createElement('li')
  list__item.classList.add('list__item')

  let titleH2 = document.createElement('h2')
  titleH2.classList.add('h2')
  titleH2.textContent = `№${index}. ${taskInp.value}`
  taskInp.value = ''

  let ListBtn = document.createElement('div')
  ListBtn.classList.add('List-btn')

 // кнопка готово
  let doneBtn = getButton('Выполнено', 'btn-done')
  doneBtn.onclick = function() {

    list__item.style = 'background-color: green; color: white;'
    editBtn.remove()
    doneBtn.remove()
  }

  // кнопка изменить
  let editBtn = getButton('Изменить')
  editBtn.onclick = function () {
    let newName = prompt("Изменить задачу", titleH2.textContent)
    titleH2.textContent = newName
  }

  // кнопка удалить
  let delBtn = getButton('Удалить')
  delBtn.onclick = function () {
    list__item.remove()
  }

  list.append(list__item)
  list__item.append(titleH2, ListBtn)
  ListBtn.append(doneBtn, editBtn, delBtn )


  return list__item
}



window.localStorage.setItem('Obj_List', 'list__item')


