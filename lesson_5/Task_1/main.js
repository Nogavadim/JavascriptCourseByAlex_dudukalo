// Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.

document.write("<h1>Список товаров</h1>")

document.write("<ul>")

let index = 0
let totalWeight = 0

function product(weight) { // обьявление функции
  index++
  weight = Number(prompt(`Введите вес товара ${index}`))
  totalWeight = totalWeight + weight

  document.write(`<li>
                    Товар ${index}, вес: <strong>${weight}</strong> кг
                  </li>`)
}

product() // Вызов функции 1
product() // Вызов функции 2
product() // Вызов функции 3

document.write("</ul>")

document.write('<hr>')
document.write(`<p>Общий вес товаров: ${totalWeight} кг</p>`)