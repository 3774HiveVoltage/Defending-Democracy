const images = [
  './public/images/hero-1.png',
  './public/images/hero-2.png',
  './public/images/hero-3.png',
  './public/images/hero-4.png',
  './public/images/hero-5.png',
];

const heroImage = document.querySelector('[data-hero-image]');
const dots = Array.from(document.querySelectorAll('[data-dot]'));
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');
const countrySelect = document.querySelector('[data-country]');
const eventList = document.querySelector('[data-event-list]');

let currentImage = 0;

function setImage(index) {
  if (!heroImage) return;
  heroImage.src = images[index];
  heroImage.alt = `Hero image ${index + 1}`;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

function showNext() {
  currentImage = (currentImage + 1) % images.length;
  setImage(currentImage);
}

function showPrevious() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  setImage(currentImage);
}

if (prevBtn) prevBtn.addEventListener('click', showPrevious);
if (nextBtn) nextBtn.addEventListener('click', showNext);

dots.forEach((dot, index) => dot.addEventListener('click', () => { currentImage = index; setImage(currentImage); }));

if (heroImage) {
  setImage(0);
  window.setInterval(() => {
    showNext();
  }, 5000);
}

const events = [
  { title: 'Downtown cleanup drive', detail: 'Volunteer • Environmental • 5 miles' },
  { title: 'Community voting rally', detail: 'Protest • Voting • 10 miles' },
  { title: 'Regional justice summit', detail: 'Volunteer • Gender Equality • 15 miles' },
  { title: 'Neighborhood advocacy walk', detail: 'Protest • Racial Equality • 10 miles' },
];

function renderEvents(filter = '') {
  if (!eventList) return;
  const visibleEvents = filter ? events.filter((event) => event.detail.toLowerCase().includes(filter.toLowerCase())) : events;
  eventList.innerHTML = visibleEvents.length
    ? visibleEvents.map((event) => `<div class="metric-card"><strong>${event.title}</strong><p>${event.detail}</p></div>`).join('')
    : '<div class="metric-card"><strong>No matches yet</strong><p>Try a different filter.</p></div>';
}

if (countrySelect) {
  countrySelect.addEventListener('change', (event) => {
    const value = event.target.value;
    if (value === 'country') {
      renderEvents('country');
    } else {
      renderEvents(value);
    }
  });
}

renderEvents();
