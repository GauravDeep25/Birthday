const countdownElement = document.getElementById('countdown');
const mainContent = document.getElementById('mainContent');
const waitMsg = document.getElementById('waitMsg');

// Target date: 13 November 2025, 00:00:00
const targetDate = new Date('2025-11-13T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    countdownElement.classList.add('hidden');
    waitMsg.classList.add('hidden');
    mainContent.classList.remove('hidden');
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML = `<span>${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
}

// Initial call and set interval
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

