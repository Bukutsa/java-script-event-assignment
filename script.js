// Button click event
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
  clickBtn.textContent = 'Table Reserved!';
  clickBtn.style.backgroundColor = '#27ae60';
});

// Double-click event
clickBtn.addEventListener('dblclick', () => {
  alert('Secret double-click action! 🤫');
});

// Long press event
let pressTimer;
clickBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => alert('Long press activated! 🤫'), 1000);
});
clickBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));

// Keypress detection
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Image gallery logic
const images = [
  'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'
];
let index = 0;
function nextImage() {
  index = (index + 1) % images.length;
  const galleryImg = document.getElementById('gallery');
  galleryImg.src = images[index];
  galleryImg.classList.add('fade-in');
  setTimeout(() => galleryImg.classList.remove('fade-in'), 1000);
}

// Tabs/Accordion
function toggleTab(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// Form validation
const form = document.getElementById('reservationForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email.includes('@')) {
    feedback.textContent = 'Invalid email format!';
  } else if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.textContent = 'Reservation submitted successfully!';
  }
});

// Real-time feedback on password input
document.getElementById('password').addEventListener('input', (e) => {
  if (e.target.value.length < 8) {
    feedback.textContent = 'Keep typing... password too short.';
  } else {
    feedback.textContent = 'Good password length.';
  }
});
