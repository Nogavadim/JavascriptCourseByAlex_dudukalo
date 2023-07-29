// Товар 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара

// Товар 2
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара

// Товар 3
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара

// Стоимость доставки
let deliveryPrice = 400 //

let sumTotal = deliveryPrice + productPrice1 + productPrice2 + productPrice3 

let pageNumber = 1;

let pageNumber2 = pageNumber + 1;

let pageNumber3 = pageNumber2 + 1;





document.write(`

<div class="container">

        <h1 class="h1">Корзина</h1>
        
        <ul class="product__list">

            <li class="product__item">
                <h2 class="h2">${product1}</h2>
                <p class="text">${productDesc1}</p>
                <span class="price">${productPrice1} руб.</span>
                <span class="pageNumber">${pageNumber}</span>
            </li>

            <li class="product__item">
                <h2 class="h2">${product2}</h2>
                <p class="text">${productDesc2}</p>
                <span class="price">${productPrice2} руб.</span>
                <span class="pageNumber">${pageNumber2}</span>
            </li>

            <li class="product__item">
                <h2 class="h2">${product3}</h2>
                <p class="text">${productDesc2}</p>
                <span class="price">${productPrice3} руб.</span>
                <span class="pageNumber">${pageNumber3}</span>
            </li>
        </ul>

        <div class="product__itog">

            <span class="costOfDelivery">Стоимость доставки: ${deliveryPrice} руб.</span>
            <h3 class="h3">Стоимость полной доставки: ${sumTotal} руб.</h3>

        </div>


    </div>

`)



