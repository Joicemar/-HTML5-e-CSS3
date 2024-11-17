// script.js
let isRunning = false;
let isFocusTime = true;
let timerInterval;
let focusTime = 25 * 60; // 25 minutos
let breakTime = 5 * 60;  // 5 minutos
let currentTime = focusTime;

// Atualizar o relógio na tela
function updateClock() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Atualizar os tempos com base nos inputs do usuário
function applySettings() {
    // Capturar valores para Work Time
    const workMinutes = parseInt(document.getElementById('work-minutes').value, 10) || 0;
    const workSeconds = parseInt(document.getElementById('work-seconds').value, 10) || 0;

    // Capturar valores para Break Time
    const breakMinutes = parseInt(document.getElementById('break-minutes').value, 10) || 0;
    const breakSeconds = parseInt(document.getElementById('break-seconds').value, 10) || 0;

    // Validar e converter para segundos
    focusTime = workMinutes * 60 + workSeconds;
    breakTime = breakMinutes * 60 + breakSeconds;

    // Validar se o tempo é maior que zero
    if (focusTime <= 0) {
        focusTime = 25 * 60; // Valor padrão de 25 minutos
    }
    if (breakTime <= 0) {
        breakTime = 5 * 60; // Valor padrão de 5 minutos
    }

    resetTimer(); // Reseta o temporizador para aplicar os novos valores
}

// Função para iniciar o timer
function startTimer() {
    startTimer();
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            currentTime--;
            updateClock();

            if (currentTime <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                isFocusTime = !isFocusTime;
                currentTime = isFocusTime ? focusTime : breakTime;
                document.getElementById('status').textContent = isFocusTime ? "Focus Time" : "Break Time";
                startTimer(); // Iniciar o próximo ciclo automaticamente
            }
        }, 1000);
    }
}

// Função para pausar o timer
function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

// Função para resetar o timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isFocusTime = true;
    currentTime = focusTime;
    document.getElementById('status').textContent = "Focus Time";
    updateClock();
}

// Adicionar eventos aos botões
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('apply-settings').addEventListener('click', applySettings);

// Inicializar o relógio na carga da página
updateClock();

/*===============audio=======================*/
// Carregar sons no formato OGG
const workSound = new Audio('transition.mp3');
const breakSound = new Audio('transition.mp3');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            currentTime--;
            updateClock();

            if (currentTime <= 0) {
                clearInterval(timerInterval);
                isRunning = false;

                // Alternar entre trabalho e descanso
                isFocusTime = !isFocusTime;

                // Tocar som ao alternar
                if (isFocusTime) {
                    workSound.play(); // Toca som de trabalho
                } else {
                    breakSound.play(); // Toca som de descanso
                }

                // Atualizar status e redefinir o tempo
                currentTime = isFocusTime ? focusTime : breakTime;
                document.getElementById('status').textContent = isFocusTime ? "Focus Time" : "Break Time";
                startTimer(); // Reiniciar o temporizador
            }
        }, 1000);
    }
}
