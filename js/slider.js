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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

const uploadedPicture = document.querySelector('.img-upload__uploaded-picture');

