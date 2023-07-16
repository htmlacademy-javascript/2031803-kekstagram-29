const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});

const uploadedPicture = document.querySelector('.img-upload__uploaded-picture');
