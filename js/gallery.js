import {closeBigPicture, openBigPicture} from './fullscreen-mode.js';
import {picturesContainer, renderThumbnails} from './render-thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {setUserFormSubmit} from './form-validation.js';

let uploadedPhotos;

getData()
  .then((userPhotos) => {
    renderThumbnails(userPhotos);
    uploadedPhotos = userPhotos;
  })
  .catch((err) => {
    showAlert(err.message);
  });

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    openBigPicture(uploadedPhotos.find((obj) => obj.url === evt.target.getAttribute('src')));
  }
});

const hidePictureButton = document.querySelector('.big-picture__cancel');

setUserFormSubmit(closeBigPicture);

hidePictureButton.addEventListener('click', closeBigPicture);
