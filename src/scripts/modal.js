'use strict';

const modal = document.querySelector('.modal');

const images = document.querySelectorAll('.place__photo');
const modalImage = document.querySelector('.modal__content-image');

images.forEach(image => {
  image.onclick = function() {
    if (window.innerWidth >= 1500) {
      modal.style.display = 'block';
      modalImage.src = this.src;

      document.body.style.overflow = 'hidden';
    } else {
      return 0;
    }
  };
});

modal.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
};
