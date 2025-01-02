const timerElement = document.getElementById('timer');
const countdownDate = new Date('2025-01-15').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    timerElement.innerHTML = `${days} Days Left`;
}

setInterval(updateCountdown, 1000);
