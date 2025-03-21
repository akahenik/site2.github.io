document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('start');
    const startPauseButton1 = document.getElementById("start-pause-1");
    const startPauseButton2 = document.getElementById("start-pause-2");

    // Обработчик для кнопки "Проверка"
   startButton.addEventListener('click', () => {
    startButton.classList.toggle('active');
    
    if (startButton.classList.contains('active')) {
        startButton.textContent = 'Стоп';
    } else {
        startButton.textContent = 'Проверка';
    }
});

    // Обработчик для первой кнопки "Пуск"
    startPauseButton1.addEventListener("click", () => {
        toggleStartPause(startPauseButton1);
        toggleStartPause(startPauseButton2); // Синхронизируем с другой кнопкой
    });

    // Обработчик для второй кнопки "Пуск"
    startPauseButton2.addEventListener("click", () => {
        toggleStartPause(startPauseButton2);
        toggleStartPause(startPauseButton1); // Синхронизируем с другой кнопкой
    });
});

// Функция для переключения состояния кнопки
function toggleStartPause(button) {
    button.classList.toggle("active");
    
    if (button.classList.contains("active")) {
        button.textContent = "Пауза";
    } else {
        button.textContent = "Пуск";
    }
}