import {closeBigPicture, openBigPicture} from './fullscreen-mode.js';
import {picturesContainer, renderThumbnails} from './render-thumbnails.js';
import {getData} from './api.js';

let uploadedPhotos;

getData()
  .then((userPhotos) => {
    renderThumbnails(userPhotos);
    uploadedPhotos = userPhotos;
  });

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    openBigPicture(uploadedPhotos.find((obj) => obj.url === evt.target.getAttribute('src')));
  }
});

const hidePictureButton = document.querySelector('.big-picture__cancel');

hidePictureButton.addEventListener('click', closeBigPicture);
