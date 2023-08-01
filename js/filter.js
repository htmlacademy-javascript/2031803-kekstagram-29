import {renderThumbnails, uploadedPhotos} from './gallery.js';
import {shuffleArray} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const RANDOM_PHOTOS_COUNT = 10;

const compareComments = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;
  return commentsB - commentsA;
};

const getFilteredPhotos = (filter) => {
  switch (filter) {
    case 'default':
      return uploadedPhotos;
    case 'random':
      return shuffleArray(uploadedPhotos.slice()).slice(0, RANDOM_PHOTOS_COUNT);
    case 'discussed':
      return uploadedPhotos.slice().sort(compareComments);
  }
};

filterForm.addEventListener('click', (evt) => {
  const previousButton = filterForm.querySelector('.img-filters__button--active');
  previousButton.classList.remove('img-filters__button--active');
  const activeButton = evt.target;
  activeButton.classList.add('img-filters__button--active');
  const chosenFilter = activeButton.getAttribute('id').slice(7);
  const filteredPhotos = getFilteredPhotos(chosenFilter);
  renderThumbnails(filteredPhotos);
});

