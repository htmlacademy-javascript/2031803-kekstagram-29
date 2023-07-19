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

const getFilterSettings = (filter) => {
  switch (filter) {
    case 'chrome':
      return 'filter: grayscale(0..1)';
    case 'sepia':
      return 'filter: sepia(0..1)';
    case 'marvin':
      return 'filter: invert(0..100%)';
    case 'phobos':
      return 'filter: blur(0..3px)';
    case 'heat':
      return 'filter: brightness(1..3)';
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

const uploadedPicture = document.querySelector('.img-upload__uploaded-picture');

const filterItems = document.querySelectorAll('.effects__item');

let slider;
filterItems.forEach((item) => {
  item.addEventListener('change', (evt) => {
    const sliderSettings = getSliderSettings(evt.target.value);
    sliderElement.noUiSlider.updateOptions(sliderSettings);
  });
});

const effectValue = sliderContainer.querySelector('.effect-level__value');

sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
});

