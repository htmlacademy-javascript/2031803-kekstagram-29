import {closeBigPicture, openBigPicture} from './fullscreen-mode.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const fragmentPhotos = document.createDocumentFragment();

const renderThumbnails = (pictures) => {
  pictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentPhotos.append(pictureElement);
  });
  picturesContainer.append(fragmentPhotos);
};

export {renderThumbnails, picturesContainer};
