// Объявляем исходный массив с мотивационными фразами
const motivationQuotes = [
    "У тебя нет денег",
    "У тебя все получится!",
    "Ты сильнее, чем думаешь!",
    "Не останавливайся ни перед чем!",
    "Ты заслуживаешь успеха!",
    "Будь настойчивым и целеустремленным!"
];

// Функция для получения случайной мотивационной фразы
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
    return motivationQuotes[randomIndex];
}

// Получаем ссылки на элементы
const outputTextArea = document.querySelector(".output-text");
const myButton = document.querySelector(".main button");

// Добавляем обработчик события на кнопку
myButton.addEventListener("click", function() {
    // Получаем случайную мотивационную фразу
    const randomQuote = getRandomQuote();
    // Устанавливаем мотивационную фразу в textarea
    outputTextArea.value = randomQuote;
});

