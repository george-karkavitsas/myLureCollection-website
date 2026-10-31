// Progressive enhancement: all page content and navigation also work without JS.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  const closeMenu = () => toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true')));
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
}

// Section links use native browser scrolling, including when JavaScript is disabled.
if (document.body.classList.contains('page-home')) {
  const sectionLinks = document.querySelectorAll('#site-navigation a[data-section]');
  const markCurrentSection = () => {
    const section = location.hash.slice(1) || 'home';
    sectionLinks.forEach(link => {
      if (link.dataset.section === section) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('hashchange', markCurrentSection);
  markCurrentSection();
}
