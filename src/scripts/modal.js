'use strict';

const modal = document.querySelector('.modal');

const images = document.querySelectorAll('.place__photo');
const modalImage = document.querySelector('.modal__content');
const captionText = document.querySelector('.modal__caption');

images.forEach(image => {
  image.onclick = function() {
    modal.style.display = 'block';
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;

    document.body.style.overflow = 'hidden';
  };
});

modal.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
};
