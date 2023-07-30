import {renderThumbnails, uploadedPhotos} from './gallery.js';
import {shuffleArray} from './util.js';

const filterForm = document.querySelector('.img-filters__form');
const RANDOM_PHOTOS_COUNT = 10;


const getFilteredPhotos = (filter) => {
  switch (filter) {
    case 'default':
      return uploadedPhotos;
    case 'random':
      return shuffleArray(uploadedPhotos.slice()).slice(0, RANDOM_PHOTOS_COUNT);
    case 'discussed':
      return uploadedPhotos;
  }
};

filterForm.addEventListener('click', (evt) => {
  const chosenFilter = evt.target.getAttribute('id').slice(7);
  const filteredPhotos = getFilteredPhotos(chosenFilter);
  renderThumbnails(filteredPhotos);
});

