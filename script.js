// Countdown Timer
const targetDate = new Date('July 11, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector('.timer').innerHTML = "БАСТАЛДЫ!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.snap-section').forEach(section => {
    observer.observe(section);
});

// Music Control
const musicIcon = document.querySelector('.music-icon');
const audio = document.getElementById('bg-music');
let isPlaying = false;

musicIcon.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicIcon.classList.remove('playing');
        musicIcon.style.transform = 'scale(1)';
        musicIcon.style.borderColor = '#4a4a4a';
    } else {
        audio.play().catch(e => console.log("Audio play failed:", e));
        musicIcon.classList.add('playing');
        musicIcon.style.transform = 'scale(1.1)';
        musicIcon.style.borderColor = '#d4a395';
    }
    isPlaying = !isPlaying;
});

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvp-form');
rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = rsvpForm.querySelector('input[type="text"]').value;
    const attendance = rsvpForm.querySelector('input[name="attendance"]:checked').value;
    
    alert(`Рахмет, ${name}! Жауабыңыз қабылданды.`);
    rsvpForm.reset();
});

// Effects Logic
function createParticles() {
    const container = document.querySelector('.particles-container');
    
    // Petals
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 15 + 8 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.opacity = Math.random() * 0.3 + 0.1;
        petal.style.animationDelay = Math.random() * 15 + 's';
        petal.style.animationDuration = Math.random() * 8 + 12 + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(petal);
    }

    // Sparkles (Gold Dust)
    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const size = Math.random() * 3 + 1 + 'px';
        sparkle.style.width = size;
        sparkle.style.height = size;
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(sparkle);
    }
}

createParticles();
