// Hero photo carousel: crossfades slides on a timer.
// No frameworks needed — just toggling a class.
(function () {
  var root = document.querySelector('[data-carousel]');
  if (!root) return;

  var slides = root.querySelectorAll('.carousel__slide');
  var dots = root.querySelectorAll('.carousel__dots span');
  if (slides.length < 2) return;

  var i = 0;
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var intervalMs = prefersReduced ? 4500 : 5000;

  function show(next) {
    slides[i].classList.remove('is-active');
    if (dots[i]) dots[i].classList.remove('is-active');
    i = next;
    slides[i].classList.add('is-active');
    if (dots[i]) dots[i].classList.add('is-active');
  }

  setInterval(function () {
    show((i + 1) % slides.length);
  }, intervalMs);
})();
