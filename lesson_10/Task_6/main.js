// Сделайте код программы короче, используя цикл.

let students = [] // Массив студентов

// let index = 0 // Счетчик

for (let index = 0; index < 6; index++) {
  let student = prompt(`Введите имя студента ${index + 1}`)
  students.push(student)
  
}


// Студент 1
// {
//   index++
//   let student = prompt(`Введите имя студента ${index}`)
//   students.push(student)
// }

// // Студент 2
// {
//   index++
//   let student = prompt(`Введите имя студента ${index}`)
//   students.push(student)
// }

// // Студент 3
// {
//   index++
//   let student = prompt(`Введите имя студента ${index}`)
//   students.push(student)
// }

// // Студент 4
// {
//   index++
//   let student = prompt(`Введите имя студента ${index}`)
//   students.push(student)
// }

// // Студент 5
// {
//   index++
//   let student = prompt(`Введите имя студента ${index}`)
//   students.push(student)
// }

// // Студент 6
// {
//   index++
//   let student = prompt(`Введите финальное имя студента`)
//   students.push(student)
// }

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список студентов"

let list = document.createElement("ul") // Список

// Отрисовка списка студентов
for (let i = 0; i < students.length; i++) {
  let studentItem = document.createElement("li")
  studentItem.textContent = `${i + 1}) ${students[i]}`
  list.append(studentItem)
}

document.body.append(title, list)