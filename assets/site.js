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
// No endpoint exists yet. Guard against submission even if a disabled button is
// enabled in developer tools or a form is submitted with the Enter key.
for (const form of document.querySelectorAll('[data-contact-form]')) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#form-notice').textContent = 'Submission is unavailable in this preview. Your message has not been sent.';
  });
  for (const field of form.querySelectorAll('input, textarea')) {
    const error = document.createElement('span');
    error.id = field.id + '-error';
    error.className = 'field-error';
    error.setAttribute('aria-live', 'polite');
    field.after(error);
    field.setAttribute('aria-describedby', error.id);
    const validate = () => {
      field.setAttribute('aria-invalid', String(!field.validity.valid));
      error.textContent = field.validity.valueMissing ? 'Please complete this required field.' : field.validity.typeMismatch ? 'Please enter a valid email address.' : '';
    };
    field.addEventListener('blur', validate);
    field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validate(); });
  }
}
