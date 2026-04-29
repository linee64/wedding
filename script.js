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
        musicIcon.style.transform = 'scale(1)';
        musicIcon.style.borderColor = '#4a4a4a';
    } else {
        audio.play().catch(e => console.log("Audio play failed:", e));
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

// Petals Effect Logic
function createPetals() {
    const container = document.querySelector('.particles-container');
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize size, position, and delay
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.animationDuration = Math.random() * 5 + 10 + 's';
        
        container.appendChild(petal);
    }
}

createPetals();
