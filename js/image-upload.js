import {isEscapeKey} from './util.js';

const imageUploadForm = document.querySelector('.img-upload__overlay');
const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadCancel = imageUploadForm.querySelector('.img-upload__cancel');
const preview = imageUploadForm.querySelector('.img-upload__preview');

const openImageUpload = () => {
  imageUploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeImageUpload = () => {
  imageUploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  preview.img.src = '';
};

function onPopupEscKeydown (evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    closeImageUpload();
  }
}

const addNewImage = (file) => {
  const reader = new FileReader();
  reader.onload = function(e) {
    const imageUrl = e.target.result;
    preview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
  };
  reader.readAsDataURL(file);
};

imageUploadInput.addEventListener('change', (evt) => {
  openImageUpload();
  addNewImage(evt.target.files[0]);
});

imageUploadCancel.addEventListener('click', closeImageUpload);

/*const openBigPicture = ({url, description, likes, comments}) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  document.body.classList.add('modal-open');
  commentsContainer.innerHTML = '';
  renderComments(comments);
  newComments = loadNewComments(comments);
  commentsLoader.addEventListener('click', newComments);
  document.addEventListener('keydown', onPopupEscKeydown);
};*/


