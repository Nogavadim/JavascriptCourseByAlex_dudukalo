/* 
Это приложение - мессенджер. В нём вы сможете пообщаться со скромным и немногословным ботом, который может вас приветствовать. Но в будущем мы это исправим. Пока сосредоточимся на доработке кода.

Внимательно изучите программу и проверьте работу мессенджера, запустив его в браузере.

В данный момент в приложении доступна возможность отправлять пустые сообщения без ввода E-mail и текста сообщения. Так быть не должно.

Добавьте валидацию (проверку) ввода данных в этом приложении. 

Проверка E-mail:
- минимальное количество символов в E-mail - 6
- в E-mail обязательно должны присутствовать символы @ и .

Проверка текста сообщения:
- минимальное количество символов в сообщении - 3
- максимальное количество символов - 100

Если пользователь ввёл неверные данные, не соответствующие требованиям ввода, покажите окно alert() с соответствующим текстом.

Это еще не все. Сейчас в каждом сообщении есть кнопка "Удалить", и она не работает. Добавьте удаление сообщения при клике на кнопку, но перед удалением, покажите окно confirm("Вы уверены, что хотите удалить сообщение?") для подтверждения удаления.
*/

// Функция, возвращающая новую кнопку
function getButton(text) {
  let button = document.createElement("button")
  button.classList.add("send-box__btn")
  button.textContent = text
  return button
}

// Функция, возвращающая новый input
function getInput(type, placeholder) {
  let input = document.createElement("input")
  input.classList.add("send-box__inp")
  input.type = type
  input.placeholder = placeholder
  return input
}

// Функция, возвращающая новый textarea
function getTextarea(placeholder) {
  let textarea = document.createElement("textarea")
  textarea.classList.add("send-box__inp")
  textarea.placeholder = placeholder
  return textarea
}

// Функция, возвращающая карточку сообщения
function getMsgCard(email, msg, incoming = false) {
  let msgCard = document.createElement("div")
  msgCard.classList.add("msg-box__card")

  // Если сообщение входящее
  if (incoming === true) {
    // Добавляем класс
    msgCard.classList.add("msg-box__card_incoming")
  }

  let emailSpan = document.createElement("span")
  emailSpan.classList.add("msg-box__email")
  emailSpan.textContent = email

  let msgText = document.createElement("p")
  msgText.classList.add("msg-box__text")
  msgText.textContent = msg

  let removeBtn = document.createElement("button")
  removeBtn.classList.add("msg-box__remove-btn")
  removeBtn.textContent = "Удалить"


  removeBtn.onclick = function () {

    if (confirm('Вы хотите удалить сообщение?') === true) {
      msgCard.remove()
    }
  }

  msgCard.append(emailSpan, msgText, removeBtn)

  return msgCard
}

// Блок для сообщений
let msgBox = document.createElement("div")
msgBox.classList.add("msg-box")

// Блок для отправки сообщения
let sendBox = document.createElement("div")
sendBox.classList.add("send-box")

// Создание текстовых полей и кнопки
let emailInpDiv = document.createElement('div')
emailInpDiv.classList.add('email-inp-div')
let emailInpSpan = document.createElement('span')
emailInpSpan.classList.add('email-inp-span')
// emailInpSpan.textContent = 'Ошибка'//////////////////////////
let emailInp = getInput("email", "E-mail")


let msgTextInpDiv = document.createElement('div')
msgTextInpDiv.classList.add('email-inp-div')
let msgTextInpSpan = document.createElement('span')
msgTextInpSpan.classList.add('email-inp-span')
// msgTextInpSpan.textContent = 'Ошибка'
let msgText = getTextarea("Сообщение")


let sendBtn = getButton("Отправить сообщение")

sendBox.append(emailInpDiv,msgTextInpDiv, sendBtn) // Добавление в sendBox
emailInpDiv.append(emailInp, emailInpSpan)
msgTextInpDiv.append(msgText, msgTextInpSpan)

// Отправка сообщения
sendBtn.onclick = function () {
  let emailValue = emailInp.value
  let msgTextValue = msgText.value

  let validationResult = false

   emailInpSpan.textContent = ''
   if(emailValue.includes('@') === false || emailValue.includes('.') === false ) {
    emailInpSpan.textContent = 'в E-mail обязательно должны присутствовать символы @ и .'
    validationResult = true
  }

  // emailInpSpan.textContent = ''
  if(emailValue.length < 6) {
    emailInpSpan.textContent = 'минимальное количество символов в E-mail - 6'
    validationResult = true
  }

 msgTextInpSpan.textContent = ''
 if (msgTextValue.length > 100) {
  msgTextInpSpan.textContent = 'максимальное количество символов - 100' 
  validationResult = true
}

  // msgTextInpSpan.textContent = ''
  if (msgTextValue.length < 3) {
    msgTextInpSpan.textContent = 'минимальное количество символов в сообщении - 3'
    validationResult = true
  }

  

  if (validationResult === true) {
    return
  }

  // Отправка сообщения
  let newMsgCard = getMsgCard(emailValue, msgTextValue)
  msgBox.prepend(newMsgCard) // Добавляем в начало msgBox

  // Ответ от бота
  let botEmail = "bot@kurs.js"
  let botText = `Привет, ${emailValue}! Я Бот и я умею отвечать только приветственным сообщением. Но думаю скоро смогу научиться делать намного больше.`

  let botMsgCard = getMsgCard(botEmail, botText, true)
  msgBox.prepend(botMsgCard) // Добавляем в начало msgBox

  // Очищаем текст сообщения
  emailInp.value = ''
  msgText.value = ""
}

document.body.append(sendBox, msgBox)