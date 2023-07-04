import {getSelectedPhotoIndex} from './util.js';
import {closeBigPicture, openBigPicture} from './fullscreen-mode.js';
import {picturesContainer, renderThumbnails, similarPhotoObjects} from './render-thumbnails.js';

const hidePictureButton = document.querySelector('.big-picture__cancel');

renderThumbnails();
picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    const objectIndex = getSelectedPhotoIndex(similarPhotoObjects, evt);
    openBigPicture(similarPhotoObjects[objectIndex]);
  }
});

hidePictureButton.addEventListener('click', () => closeBigPicture());
