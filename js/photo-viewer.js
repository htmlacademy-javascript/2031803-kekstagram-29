import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = ({url, description, likes, comments}) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';

  comments.forEach((comment) => {
    commentsList.append(comment);
  });
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

export {openBigPicture, closeBigPicture};

