function initFullpage() {
  $('#fullpage').fullpage({
    parallax: true,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  });
};

$(document).ready(function() {
  initFullpage();
});
