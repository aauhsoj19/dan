const giftBox = document.getElementById('gift-container');
const surpriseOverlay = document.getElementById('surprise-overlay');
const petalsBg = document.getElementById('petals-bg');


giftBox.addEventListener('click', () => {
    // Show the rose
    surpriseOverlay.classList.remove('hidden');

    // Create falling petals
    for (let i = 0; i < 30; i++) {
        createPetal();
    }

    // Vanish after 4 seconds
    setTimeout(() => {
        surpriseOverlay.classList.add('hidden');
        petalsBg.innerHTML = ''; // Clear petals
    }, 4000);
});

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸'; // You can use an image or emoji
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-5vh';
    petal.style.animationDuration = (Math.random() * 2 + 2) + 's';
    petal.style.opacity = Math.random();
    
    petalsBg.appendChild(petal);
}

const dog = document.querySelector('.dog-img');
const dogThought = document.getElementById('dogThought');

dog.addEventListener('click', () => {
  dogThought.textContent = 'I love you Daniela! 💖';

  // Restart pop animation
  dogThought.style.animation = 'none';
  dogThought.offsetHeight; // trigger reflow
  dogThought.style.animation = 'thoughtPop 0.6s ease-out';
});

/*const envelope = document.getElementById('envelope-container');
const letterOverlay = document.getElementById('letter-overlay');
const closeLetter = document.querySelector('.close-letter');

envelope.addEventListener('click', () => {
  letterOverlay.classList.remove('hidden');
});

closeLetter.addEventListener('click', () => {
  letterOverlay.classList.add('hidden');
});*/

// Envelope elements
const envelope = document.getElementById('envelope-container');
const envelopeBox = document.querySelector('.envelope');
const letterOverlay = document.getElementById('letter-overlay');
const closeLetter = document.querySelector('.close-letter');

// Open envelope and show letter
envelope.addEventListener('click', () => {
  envelopeBox.classList.add('open');       // flap rotates
  letterOverlay.classList.remove('hidden'); // show letter popup
});

// Close letter and reset envelope
closeLetter.addEventListener('click', () => {
  envelopeBox.classList.remove('open');    // flap closes
  letterOverlay.classList.add('hidden');   // hide letter popup
});

// Create floating hearts and flowers in the background
const body = document.body;

function createFloatingElement() {
  const elem = document.createElement('div');
  const type = Math.random() > 0.5 ? 'heart' : 'flower';
  elem.classList.add(type);
  elem.textContent = type === 'heart' ? '❤️' : '🌹';
  elem.style.left = Math.random() * 100 + 'vw';
  elem.style.fontSize = (Math.random() * 25 + 15) + 'px';
  elem.style.animationDuration = (Math.random() * 5 + 5) + 's';
  body.appendChild(elem);

  setTimeout(() => {
    elem.remove();
  }, (parseFloat(elem.style.animationDuration) * 1000));
}

// Generate hearts and flowers continuously
setInterval(createFloatingElement, 400);

const panda = document.querySelector('.panda-valentine');

panda.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    createPandaHeart();
  }
});

function createPandaHeart() {
  const heart = document.createElement('div');
  heart.classList.add('panda-heart');
  heart.textContent = Math.random() > 0.5 ? '❤️' : '💖';

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  const moveX = (Math.random() - 0.5) * 600 + 'px';
  const moveY = (Math.random() - 0.5) * 600 + 'px';

  heart.style.left = startX + 'px';
  heart.style.top = startY + 'px';
  heart.style.setProperty('--x', moveX);
  heart.style.setProperty('--y', moveY);
  heart.style.fontSize = (Math.random() * 30 + 40) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

const bgMusic = document.getElementById('bg-music');

function startMusic() {
  bgMusic.volume = 0.25; // soft romantic volume
  bgMusic.play().catch(() => {
    // autoplay blocked until interaction — silently handled
  });

  // Only start once
  document.removeEventListener('click', startMusic);
  document.removeEventListener('touchstart', startMusic);
}

// Start music on first interaction
document.addEventListener('click', startMusic);
document.addEventListener('touchstart', startMusic);

