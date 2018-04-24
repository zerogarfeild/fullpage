function initFullpage() {
  const fullpageConfig = {
    scrollBar: true,
    // sectionSelector: '.fullpage-section',
  };
  $('#fullpage').fullpage(fullpageConfig);
  return
};

function initObjectFitPolyfill() {
  /* https://github.com/bfred-it/object-fit-images */
  const $imagesToApplyOn = $('.background-image');
  return objectFitImages($imagesToApplyOn);
};

function initWow() {
  return new WOW().init();
};

$(document).ready(function start() {
  initFullpage();
  initObjectFitPolyfill();
  initWow();
});

function jumpTo(section, slide) {
  console.log('jump', section, slide);
  $.fn.fullpage.moveTo(section, slide);
}