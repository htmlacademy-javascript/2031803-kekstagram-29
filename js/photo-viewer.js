import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const hidePictureButton = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const picturesContainer = document.querySelector('.pictures');
const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (obj) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = obj.src;
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');


  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    openBigPicture(evt.target);
  }
});

hidePictureButton.addEventListener('click', () => closeBigPicture());

export {openBigPicture, closeBigPicture};

