const heroImages = [
  './public/images/hero-1.png',
  './public/images/hero-2.png',
  './public/images/hero-3.png',
  './public/images/hero-4.png',
  './public/images/hero-5.png',
];

const youthImages = [
  './src/assets/DefendingDemocracyCarosuel2/1.png',
  './src/assets/DefendingDemocracyCarosuel2/2.png',
  './src/assets/DefendingDemocracyCarosuel2/3.png',
  './src/assets/DefendingDemocracyCarosuel2/4.png',
  './src/assets/DefendingDemocracyCarosuel2/5.png',
];

const eventList = document.querySelector('[data-event-list]');
const customSelects = Array.from(document.querySelectorAll('[data-custom-select]'));

function initCarousel({ imageSelector, prevSelector, nextSelector, dotSelector, images, interval = 5000, altPrefix = 'Image' }) {
  const imageElement = document.querySelector(imageSelector);
  const prevBtn = document.querySelector(prevSelector);
  const nextBtn = document.querySelector(nextSelector);
  const dots = Array.from(document.querySelectorAll(dotSelector));
  let currentIndex = 0;

  function setImage(index) {
    if (!imageElement) return;
    currentIndex = index;
    imageElement.src = images[index];
    imageElement.alt = `${altPrefix} ${index + 1}`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
  }

  function showNext() {
    setImage((currentIndex + 1) % images.length);
  }

  function showPrevious() {
    setImage((currentIndex - 1 + images.length) % images.length);
  }

  prevBtn?.addEventListener('click', showPrevious);
  nextBtn?.addEventListener('click', showNext);
  dots.forEach((dot, index) => dot.addEventListener('click', () => setImage(index)));
  setImage(0);

  if (interval && imageElement) {
    window.setInterval(showNext, interval);
  }
}

initCarousel({
  imageSelector: '[data-hero-image]',
  prevSelector: '[data-prev]',
  nextSelector: '[data-next]',
  dotSelector: '[data-hero-dot]',
  images: heroImages,
  altPrefix: 'Hero image',
});

initCarousel({
  imageSelector: '[data-youth-image]',
  prevSelector: '[data-youth-prev]',
  nextSelector: '[data-youth-next]',
  dotSelector: '[data-youth-dot]',
  images: youthImages,
  interval: 5000,
  altPrefix: 'Youth engagement',
});

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
