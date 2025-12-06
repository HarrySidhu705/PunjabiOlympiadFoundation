// Set the date for 20 days from today (December 6, 2025 + 20 days = December 26, 2025)
const countDownDate = new Date("Dec 26, 2025 23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  const timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  }

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    if (timerElement) {
        timerElement.innerHTML = "REGISTRATION CLOSED";
    }
    // Optional: Hide the Register Now button
    const registerButton = document.querySelector('a[href="#register"]');
    if(registerButton) {
        registerButton.style.display = 'none';
    }
  }
}, 1000);
