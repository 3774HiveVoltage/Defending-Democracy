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
const eventList = document.querySelector('[data-event-list]');
const customSelects = Array.from(document.querySelectorAll('[data-custom-select]'));

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

customSelects.forEach((select) => {
  const button = select.querySelector('[data-custom-toggle]');
  const options = Array.from(select.querySelectorAll('.custom-select-option'));
  const label = select.querySelector('[data-custom-label]');

  button?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = select.classList.contains('open');
    customSelects.forEach((otherSelect) => otherSelect.classList.remove('open'));
    if (!isOpen) {
      select.classList.add('open');
    }
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((item) => item.classList.remove('is-selected'));
      option.classList.add('is-selected');
      if (label) {
        label.textContent = option.textContent.trim();
      }
      select.classList.remove('open');

      if (select.dataset.customSelect === 'location') {
        const value = option.dataset.value;
        renderEvents(value === 'country' ? 'country' : value);
      }
    });
  });
});

document.addEventListener('click', () => {
  customSelects.forEach((select) => select.classList.remove('open'));
});

renderEvents();
