const boxes = document.querySelectorAll('._box');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

boxes.forEach(box => {
    observer.observe(box);
});

const swiper = new Swiper('.slider-swiper', {
    speed: 2000,
    loop: 'true',
    clickable: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.slider-pagination',
    },
  });