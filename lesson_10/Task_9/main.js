// Это приложение для создания списка покупок. Сейчас в список можно добавить только название товара. Добавьте в программу возможность ввода количества продукта в prompt() после ввода названия. 

// Для хранения количества продукта придется создать еще один массив. Количество товара должно отображаться в списке с каждым продуктом.

// Список товаров в котором уже есть три продукта
let productArray = ["Молоко", "Варенье", "Кофе"]
let amountProductArray = [ 2, 3, 4]

function getProductItem(index, product, amountProduct) {
  let productItem = document.createElement("li")
  productItem.textContent = `${index + 1}) ${product}, кол-во: ${amountProduct}`

  // Кнопка удаления товара
  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Удалить"

  deleteBtn.onclick = function () {
    productArray.splice(index, 1) // Удаляем элемент из массива
    amountProductArray.splice(index, 1) // Удаляем элемент из массива

    render(productArray, amountProductArray) // Перерисовываем список
  }

  productItem.append(deleteBtn)

  return productItem
}

// Заголовок
let title = document.createElement("h1")
title.textContent = "Список покупок"

// Кнопка добавления
let addProductBtn = document.createElement("button")
addProductBtn.textContent = "Добавить продукт"

addProductBtn.onclick = function () {
  let newProduct = prompt("Введите название товара")
  let newAmountProduct = Number(prompt("Введите кол-во товара")) 

  productArray.push(newProduct) // Добавляем продукт в массив
  amountProductArray.push(newAmountProduct) // Добавляем продукт в массив
  render(productArray, amountProductArray) // Перерисовываем список
  console.log(productArray, amountProductArray);
}




let list = document.createElement("ul") // Список

// Функция отрисовки списка
function render(arr, arr2) {
  list.innerHTML = "" // Очищаем список перед отрисовкой

  // Начинаем отрисовку, используя массив и цикл
  for (let i = 0; i < arr.length; i++) {
    let productItem = getProductItem(i, arr[i], arr2[i]) // Создаем элемент списка
    list.append(productItem)
  }
}

// Запускаем отрисовку списка при загрузке страницы
render(productArray, amountProductArray)

document.body.append(title, addProductBtn, list)