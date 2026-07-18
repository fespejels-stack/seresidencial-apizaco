(() => {
  'use strict';

  const shell = document.querySelector('[data-site-nav]');
  if (!shell) return;

  const updateHeader = () => {
    shell.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const homeLink = shell.querySelector('.brand[href="#inicio"]');
  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth'
      });
    });
  }
})();
