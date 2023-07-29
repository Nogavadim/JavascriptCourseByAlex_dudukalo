// Сделайте программу вывода рецепта приготовления пельменей короче:

// Используйте более короткий способ вывода, объединив несколько команд document.write() в одну

// Определите повторяющийся фрагмент кода и создайте для этого фрагмента отдельную функцию с параметрами (аргументами). Вызывайте функцию с параметрами в нужной части программы.

document.write('<div class="container">')
document.write('<h1 class="main-title">Приготовление пельменей</h1>')

let index = 0 // Счетчик этапов

document.write('<ul class="list">')


function identicalBlocks (text, className = '') {
    index++
    document.write(`
    <li class="list__item ${className}">
    <span class="list__index">${index}</span>
    <p class="list__text">${text}</p> 
    </li>
    `)
}

identicalBlocks('Налейте в кастрюлю воду') // Этап 1
identicalBlocks('Достаньте из холодильника пельмени') // Этап 2
identicalBlocks('Забросьте пельмени в горячую воду. ОСТОРОЖНО, НЕ ОБОЖГИТЕСЬ!', 'list__item_warning') // Этап 3
identicalBlocks('Посолите и поперчите по вкусу') // Этап 4
identicalBlocks('Ждите готовности') // Этап 5
identicalBlocks('Приятного аппетита!', 'list__item_finish') // Этап 6


document.write('</ul>')
document.write('</div>')