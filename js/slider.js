const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');

const getSliderSettings = (filter) => {
  switch (filter) {
    case 'chrome':
      return {
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      };
    case 'sepia':
      return {
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      };
    case 'marvin':
      return {
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1
      };
    case 'phobos':
      return {
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1
      };
    case 'heat':
      return {
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1
      };
  }
};

const getFilterSettings = (filter, level) => {
  switch (filter) {
    case 'chrome':
      return `grayscale(${level})`;
    case 'sepia':
      return `sepia(${level})`;
    case 'marvin':
      return `invert(${level}%)`;
    case 'phobos':
      return `blur(${level}px)`;
    case 'heat':
      return `brightness(${level})`;
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

const filterItems = document.querySelectorAll('.effects__item');
const uploadedPicture = document.querySelector('.img-upload__preview');
let chosenEffect;

filterItems.forEach((item) => {
  item.addEventListener('change', (evt) => {
    chosenEffect = evt.target.value;
    const sliderSettings = getSliderSettings(chosenEffect);
    sliderElement.noUiSlider.updateOptions(sliderSettings);
  });
});

const effectLevel = sliderContainer.querySelector('.effect-level__value');

sliderElement.noUiSlider.on('update', () => {
  effectLevel.value = sliderElement.noUiSlider.get();
  uploadedPicture.style.filter = getFilterSettings(chosenEffect, effectLevel.value);
});
