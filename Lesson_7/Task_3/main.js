// Эта программа выводит в документ список достижений в Javascript. Ваша задача изменить способ вывода, используя встроенные функции создания, стилизации и настройки HTML-элементов. 
// document.write() в итоговой реализации быть не должно.

// Напомню, что функции - удобный инструмент сокращения кода. Используйте функции, аргументы функций и return для оптимизации кода. Найдите повторяющиеся фрагменты кода в программе и используйте функции для сокращения кода.

// document.write('<div class="container">')

// document.write('<h1 class="main-title">Достижения в изучении Javascript</h1>')

// document.write('<ul class="list">')


let container = document.createElement('div')
container.classList.add('container')

let title = document.createElement('h1')
title.classList.add("main-title")
title.textContent = 'Достижения в изучении Javascript'

let list = document.createElement('ul')
list.classList.add("list")


let cardAll =  function(i, text) {
 i++
  let cardText = document.createElement('li')
  cardText.classList.add("list__item")

  let list__index = document.createElement('span')
  list__index.classList.add("list__index")
  list__index.textContent = `${i}`

  let list__desc = document.createElement('p')
  list__desc.classList.add("list__desc")
  list__desc.textContent = `${text}`

  cardText.append(list__index, list__desc)

return cardText

}

let i = 0 // Счетчик

// Карточка 1

let card1 = cardAll(i, 'Знаю, что такое вывод и ввод информации')

// Карточка 2
i++
let card2 = cardAll(i, 'Знаю, что такое вывод и ввод информации')

// Карточка 3
i++
let card3 = cardAll(i, 'Знаю, что такое вывод и ввод информации')

// Карточка 4
i++
let card4 = cardAll(i, 'Знаю, что такое вывод и ввод информации')

// Карточка 5
i++
let card5 = cardAll(i, 'Знаю, что такое вывод и ввод информации')



document.body.append(container)
container.append(title)
container.append(list)
list.append(card1, card2, card3, card4, card5)




// // Карточка 1
// i++
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю, что такое вывод и ввод информации
//                   </p>
//                 </li>`)

// // Карточка 2
// i++
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю о способах вывода информации
//                   </p>
//                 </li>`)

// // Карточка 3
// i++
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Знаю, что такое числа, строки, и переменные
//                   </p>
//                 </li>`)

// // Карточка 4
// i++
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Умею создавать функции и пользоваться ими
//                   </p>
//                 </li>`)

// // Карточка 5
// i++
// document.write(`<li class="list__item">
//                   <span class="list__index">${i}</span>
//                   <p class="list__desc">
//                     Учусь создавать HTML - элементы с помощью встроенных функций
//                   </p>
//                 </li>`)