let index = 0


document.write(`
<div class="container">

<h1 class="h1">Доход водителя</h1>

<table class="table">
    <tr>
        <th>№</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Поездок в месяц</th>
        <th>Доход в месяц</th>
        <th>Средняя стоимость поездки</th>
    </tr>
`)

// водитель 1
index++
let nameDrives1 = prompt(`Введите имя водителя ${index}`)
let nameFio1 = prompt(`Введите фамилию водителя ${index}`)
let ordersMonth1 = Number(prompt(`Сколько ${nameDrives1} ${nameFio1} обработал заказов  в месяц?`))
let sumOrdersMonth1 = Number(prompt(`Какой доход  ${nameDrives1} ${nameFio1} получил в месяц?`)) 
let mediumPrice1 = Math.round(sumOrdersMonth1 / ordersMonth1) 


document.write(`
<tr>
                <td>${index}</td>
                <td>${nameDrives1}</td>
                <td>${nameFio1}</td>
                <td>${ordersMonth1}</td>
                <td>${sumOrdersMonth1}</td>
                <td>${mediumPrice1}</td
</tr>
`)

// водитель 2
index++
let nameDrives2 = prompt(`Введите имя водителя ${index}`)
let nameFio2 = prompt(`Введите фамилию водителя ${index}`)
let ordersMonth2 = Number(prompt(`Сколько ${nameDrives2} ${nameFio2} обработал заказов  в месяц?`)) 
let sumOrdersMonth2 = Number(prompt(`Какой доход  ${nameDrives2} ${nameFio2} получил в месяц?`)) 
let mediumPrice2 = Math.round(sumOrdersMonth2 / ordersMonth2) 

document.write(`
<tr>
                <td>${index}</td>
                <td>${nameDrives2}</td>
                <td>${nameFio2}</td>
                <td>${ordersMonth2}</td>
                <td>${sumOrdersMonth2}</td>
                <td>${mediumPrice2}</td
</tr>
`)


// водитель 3
index++
let nameDrives3 = prompt(`Введите имя водителя ${index}`)
let nameFio3 = prompt(`Введите фамилию водителя ${index}`)
let ordersMonth3 = Number(prompt(`Сколько ${nameDrives3} ${nameFio3} обработал заказов  в месяц?`)) 
let sumOrdersMonth3 = Number(prompt(`Какой доход  ${nameDrives3} ${nameFio3} получил в месяц?`)) 
let mediumPrice3 = Math.round(sumOrdersMonth3 / ordersMonth3) 

document.write(`
<tr>
                <td>${index}</td>
                <td>${nameDrives3}</td>
                <td>${nameFio3}</td>
                <td>${ordersMonth3}</td>
                <td>${sumOrdersMonth3}</td>
                <td>${mediumPrice3}</td
</tr>
`)






// средние числа
let ordersMonthAll = Math.round((ordersMonth1 + ordersMonth2 + ordersMonth3) / index) 
let mediumPriceAll = Math.round((mediumPrice1 + mediumPrice2 + mediumPrice3) / index ) 
let sumOrdersMonthAll = Math.round((sumOrdersMonth1 + sumOrdersMonth2 + sumOrdersMonth3) / index ) 


document.write(`
<tr>
                <td colspan="3">Средние показатели всех водителей</td>
                <td>${ordersMonthAll}</td>
                <td>${sumOrdersMonthAll}</td>
                <td>${mediumPriceAll}</td>
                
 </tr>
`)



document.write(`
</table>
    </div>
`)