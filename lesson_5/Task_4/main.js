// Это программа вывода списка учеников. Внимательно изучите код и добавьте возможность ввода имени и года рождения каждого ученика, используя клавиатуру, и команду prompt().

let currentYear = 2023 // Текущий год

// Функция выводит текст в документ
function printText(text) {
  document.write(text)
}

// Функция выводит в документ strong c текстом
function printStrong(text) {
  document.write(`<strong>${text}</strong>`)
}

// Функция вычисляет возраст, и выводит его в том месте, где ее вызывают (запускают)
function printAge(year) {
  document.write(`<strong>${currentYear - year} лет</strong>`)
}

// Функция выводит одного ученика, используя доступные функции
function printStudent(index, name, year) {
  printText("<p>")
  printText(`${index}) `)
  printStrong(name)
  printText(`, год рождения: `)
  printStrong(year)
  printText(", возраст: ")
  printAge(year)
  printText("</p>")
}

document.write("<h1>Список учеников</h1>")

let index = 0



// Ученик 1
index++
printStudent(index, prompt(`Введите имя ученика ${index}`), Number(prompt(`Введите год рождения ${index}`)))

// Ученик 2
index++
printStudent(index, prompt(`Введите имя ученика ${index}`), Number(prompt(`Введите год рождения ${index}`)))


// Ученик 3
index++
printStudent(index, prompt(`Введите имя ученика ${index}`), Number(prompt(`Введите год рождения ${index}`)))


// function students ( studentName, studentYear  ) {
//   index++
//   // let studentName = "Маша"
//   // let studentYear = 2010
//   printStudent(index, studentName, studentYear)
// }

// students( prompt("Укажите имя"), prompt("Укажите год рождения"))
// students( prompt("Укажите имя"), prompt("Укажите год рождения"))
// students( prompt("Укажите имя"), prompt("Укажите год рождения"))


// // Ученик 1
// {
//   index++
//   // let studentName = "Маша"
//   let studentName = prompt('Введите Имя')
//   let studentYear = Number(prompt("Укажите год рождения"))
//   printStudent(index, studentName, studentYear)
//   printStudent(index, studentName, studentYear)
//   printStudent(index, studentName, studentYear)
// }

// Ученик 2
// {
//   index++
//   let studentName = "Рита"
//   let studentYear = 2009
//   printStudent(index, studentName, studentYear)
// }

// // Ученик 3
// {
//   index++
//   let studentName = "Вася"
//   let studentYear = 2007
//   printStudent(index, studentName, studentYear)
// }
