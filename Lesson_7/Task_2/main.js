// Реализуйте в документе (в body) следующую структуру HTML-элементов с помощью встроенных функция создания элементов в Javascript:

/*
<h1>Что я узнал в видео</h1>
<ul>
  <li>1) Как создавать HTML-элементы</li>
  <li>2) Узнал, как добавлять текст и HTML-код в элемент</li>
  <li>3) Как добавлять и удалять классы</li>
  <li>4) Узнал, как вложить один элемент в другой</li>
  <li>5) Узнал, что такое событие и обработчик события</li>
  <li>6) Как назначить обработчик события</li>
</ul>
*/

// Для создания элементов необходимо использовать:
// document.createElement()
// textContent
// append()

// document.write() мы уже не используем


let container = document.createElement('div')
container.classList.add('container')

let title = document.createElement('h1')
title.textContent = 'Что я узнал в видео'


let list = document.createElement('ul')
list.classList.add('list')

let index = 0

let listItem = function (index, text) {
  index++
   let listItem = document.createElement('li')
  listItem.textContent = `${index}) ${text}`
  return listItem
}

let listItem1 = listItem(index, 'Как создавать HTML-элементы')
index++
let listItem2 = listItem(index, 'Узнал, как добавлять текст и HTML-код в элемент')
index++
let listItem3 = listItem(index, 'Как добавлять и удалять классы')
index++
let listItem4 = listItem(index, 'Узнал, как вложить один элемент в другой')
index++
let listItem5 = listItem(index, 'Узнал, что такое событие и обработчик события')
index++
let listItem6 = listItem(index, 'Как назначить обработчик события')



document.body.append(container)
container.append(title, list)
list.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6)