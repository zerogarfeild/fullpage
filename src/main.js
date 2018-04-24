function initFullpage() {
  const fullpageConfig = {
    scrollBar: true,
  };
  $('#fullpage').fullpage(fullpageConfig);
};

function initObjectFitPolyfill() {
  /* https://github.com/bfred-it/object-fit-images */
  const $imagesToApplyOn = $('.background');
  return objectFitImages($imagesToApplyOn);
};

function initWow() {
  new WOW().init();
};

$(document).ready(function() {
  initFullpage();
  initObjectFitPolyfill();
  initWow();
});
