'use strict';

function initFullpage() {
  var fullpageConfig = {
    scrollBar: true
    // sectionSelector: '.fullpage-section',
  };
  $('#fullpage').fullpage(fullpageConfig);
  return;
};

function initObjectFitPolyfill() {
  /* https://github.com/bfred-it/object-fit-images */
  var $imagesToApplyOn = $('.background-image');
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

var customUtils = {
  jumpTo: function (section, slide) {
    console.log('jump', section, slide);
    $.fn.fullpage.moveTo(section, slide);
  }
}