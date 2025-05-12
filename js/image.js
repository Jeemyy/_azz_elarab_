const cards = document.querySelector('.cards');
const counter = 99;

// Generate images dynamically
for (let i = 0; i < counter; i++) {
  const img = document.createElement('img');
  img.src = `../images/img${i}.jpg`;
  img.alt = `Image ${i}`;
  cards.appendChild(img);
}


const images = document.querySelectorAll('.cards img');
const popup = document.querySelector('.popup-image');
const popupImg = popup.querySelector('img');
const closeBtn = popup.querySelector('span');
const leftBtn = popup.querySelector('.bx-chevron-left');
const rightBtn = popup.querySelector('.bx-chevron-right');

let currentIndex = 0;  

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
});
