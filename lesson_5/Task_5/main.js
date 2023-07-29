let index = 0 // переменная
let totalCalories = 0


// Вывод текта 
function printText ( text ) {
    document.write(text)
}


// Функция карточки

function card ( index, productName, kilocalories, weightInGrams ) {
        let productCalories = kilocalories * weightInGrams
        totalCalories = totalCalories + productCalories

        printText(`
        <li class="list__item">
        <p>
        ${index}) ${productName}, калорийность:  ${kilocalories} ккал, вес ${weightInGrams} гр, всего: ${productCalories} ккал
        </p>
        </li>`)
}

// Функция всего калорий
function printTotalCalories(value) {
   printText(`<p class="text">Калорийность всего блюда: ${value} ккал</p>`)    
}


// структура

printText(`  
<div class="container">
<h1 class="h1">Калькулятор калорийности блюда</h1>
<ul class="list">
`)

// Продукт 1
index++
card(index, prompt(`Введите название продукта ${index}`),
Number(prompt(`Кол-во килокалорий в граме продукта ${index} `)),
Number(prompt(`Введите вес продукта ${index}`) )) 

// Продукт 2
index++
card(index, prompt(`Введите название продукта ${index}`),
Number(prompt(`Кол-во килокалорий в граме продукта ${index} `)),
Number(prompt(`Введите вес продукта ${index}`) )) 

// Продукт 3
index++
card(index, prompt(`Введите название продукта ${index}`),
Number(prompt(`Кол-во килокалорий в граме продукта ${index} `)),
Number(prompt(`Введите вес продукта ${index}`) )) 


printText(`
</ul>
`)

printTotalCalories(totalCalories)
printText(`</div>`)



