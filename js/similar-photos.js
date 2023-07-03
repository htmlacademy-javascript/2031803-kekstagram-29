import {createPhotoDescriptions} from './data-generation.js';
import {closeBigPicture, openBigPicture} from './photo-viewer.js';
import {getSelectedPhotoIndex} from './util.js';

const picturesContainer = document.querySelector('.pictures');
const hidePictureButton = document.querySelector('.big-picture__cancel');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const fragmentPhotos = document.createDocumentFragment();

const similarPhotoObjects = createPhotoDescriptions();
console.log(similarPhotoObjects);

const renderPhotos = () => {
  similarPhotoObjects.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentPhotos.append(pictureElement);
  });
  picturesContainer.append(fragmentPhotos);
};

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    const objectIndex = getSelectedPhotoIndex(similarPhotoObjects, evt);
    openBigPicture(similarPhotoObjects[objectIndex]);
  }
});

hidePictureButton.addEventListener('click', () => closeBigPicture());

export {renderPhotos};
