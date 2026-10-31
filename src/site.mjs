// Edit the original page copy and shared components here, then run npm run build.
export const pages = [
  { slug: '', label: 'Home', title: 'My Lure Collection - Fishing app for anglers', description: 'Fishing is not a hobby... It’s a passion!\nWelcome to My Lure Collection, the ultimate fishing app for anglers. Track catches, organize lures, and log your fishing stats to enhance your fishing journey. Perfect for seasoned anglers and beginners alike!' },
  { slug: 'privacy-policy', label: 'Privacy Policy', title: 'Privacy Policy | My Lure Collection' }
];
export const sectionRedirects = ['about', 'features', 'contact'];
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'contact', label: 'Contact' }
];
const contactEmail = 'info@gvksoftware.co.uk';
const play = 'https://play.google.com/store/apps/details?id=co.uk.gvksoftware.mylurecollection';
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
function header(page, base) {
  const home = page.slug === '';
  const sectionHref = id => `${home ? '' : base}#${id}`;
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner">
<a class="brand" href="${sectionHref('home')}" aria-label="My Lure Collection home"><img src="${base}assets/images/logo.svg" width="45" height="46" alt=""><span>My Lure Collection</span></a>
<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" hidden><span class="menu-bars" aria-hidden="true">☰</span><span class="visually-hidden">Menu</span></button>
<nav id="site-navigation" aria-label="Main navigation">${sections.map(section => `<a href="${sectionHref(section.id)}" data-section="${section.id}"${home && section.id === 'home' ? ' aria-current="location"' : ''}>${section.label}</a>`).join('')}<a href="${base}privacy-policy/"${!home ? ' aria-current="page"' : ''}>Privacy Policy</a></nav>
</div></header>`;
}
function hero(base) {
  return `<section class="hero" id="home" tabindex="-1" aria-labelledby="hero-title"><div class="hero-inner">
<img class="hero-photo" src="${base}assets/images/coastal-rocks-web.jpg" width="2560" height="1280" alt="Waves breaking against a rocky coastline" fetchpriority="high">
<div class="hero-content"><h1 id="hero-title"><span> Fishing isn't a hobby... </span><br><span> It's a passion! </span></h1>
<a class="play-badge" href="${play}" target="_blank" rel="noopener noreferrer"><img src="${base}assets/images/google-play.svg" width="180" height="54" alt="Get it on Google Play"></a>
<a class="app-icon" href="${play}" target="_blank" rel="noopener noreferrer"><img src="${base}assets/images/google-play-qr.png" width="219" height="219" alt="Scan to download My Lure Collection on Google Play"></a></div>
</div></section>`;
}
function about(base) {
  return `<section class="about-section" id="about" tabindex="-1" aria-labelledby="about-title"><img class="about-photo" src="${base}assets/images/fishing-boats-web.jpg" width="2560" height="1440" alt="Traditional fishing boats on the shore" loading="lazy">
<div class="about-wave" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
<div class="about-panel"><h2 id="about-title">Passionate Anglers</h2>
<p>Welcome to My Lure Collection Android application.<br>The ultimate all-in-one fishing companion.<br>Whether you're a seasoned angler or new to the fishing, this app helps you log and track every aspect of your fishing journey, keeping your experience organized, insightful, and fun.</p>
<a class="download-button" href="${play}" target="_blank" rel="noopener noreferrer">Get it now</a></div></section>`;
}
function features(base) {
  const images = [['fishing-passion','Fishing is a passion'], ['organize-gear','Organize your gear'], ['fishing-spots','Save your fishing spots'], ['log-catches','Log your catches'], ['moon-sun-weather','Moon, sun and weather insights']];
  return `<section class="features-section" id="features" tabindex="-1" aria-labelledby="features-title"><h2 class="visually-hidden" id="features-title">Features</h2><div class="feature-grid">${images.map(([name,alt]) => `<img src="${base}assets/images/${name}.png" alt="${alt}" width="1284" height="2778" loading="lazy">`).join('')}</div></section>`;
}
function contact() {
  return `<section class="contact-section" id="contact" tabindex="-1" aria-labelledby="contact-title"><div class="contact-inner">
<div class="contact-copy"><p class="contact-eyebrow">Get in touch</p><h2 id="contact-title">We’d love to hear from you!</h2><p class="contact-intro">Have a question or some feedback?<br>Drop us a line.</p></div>
<div class="contact-details"><a class="contact-email-card contact-email" href="mailto:${contactEmail}" aria-label="Email My Lure Collection at ${contactEmail}" aria-describedby="contact-email-note"><span class="contact-mail-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg></span><span class="contact-card-label">Email us</span><span class="contact-email-address">${contactEmail}</span><span class="contact-card-action">Write an email<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19 19 5M5 5h14v14"/></svg></span></a><p class="contact-email-note" id="contact-email-note">Opens your email app.</p></div>
</div></section>`;
}
function footer(base) {
  return `<footer class="site-footer"><p>© 2025 by George Karkavitsas. Powered and secured by GVK Software</p><a href="https://x.com/YourFishingApp" target="_blank" rel="noopener noreferrer" aria-label="X"><img src="${base}assets/images/x-icon.png" width="23" height="23" alt="X"></a></footer>`;
}
export function render(page, policy) {
  const base = page.slug ? '../' : './';
  const url = 'https://www.mylurecollection.com' + (page.slug ? '/' + page.slug : '');
  const content = page.slug === '' ? hero(base) + about(base) + features(base) + contact()
    : `<article class="privacy-policy"><h1>Privacy Policy</h1>${policy}</article>`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>${page.description ? `<meta name="description" content="${escape(page.description)}"><meta property="og:description" content="${escape(page.description)}"><meta name="twitter:description" content="${escape(page.description)}">` : ''}
<link rel="canonical" href="${url}"><meta property="og:title" content="${page.title}"><meta property="og:url" content="${url}"><meta property="og:site_name" content="My Lure Collection"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${page.title}"><meta name="google-site-verification" content="mZPek8oswt3OoPsimi9dTDSuC9aMxpt1naNewr4ciyk">
<link rel="icon" href="${base}assets/images/favicon.png" type="image/png"><link rel="apple-touch-icon" href="${base}assets/images/favicon.png"><link rel="preload" href="${base}assets/fonts/poppins-light.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${base}assets/styles.css"><script src="${base}assets/site.js" defer></script>
</head><body class="page-${page.slug || 'home'}">${header(page,base)}<main id="main">${content}</main>${footer(base)}</body></html>\n`;
}

// Keep previously shared section URLs working on static hosts, including repository subpaths.
export function renderSectionRedirect(section) {
  const label = sections.find(item => item.id === section).label;
  const target = `../#${section}`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${label} | My Lure Collection</title><link rel="canonical" href="https://www.mylurecollection.com/">
<meta http-equiv="refresh" content="0; url=${target}"><script>location.replace(${JSON.stringify(target)});</script>
</head><body><main id="main"><h1>${label}</h1><p><a href="${target}">Continue to ${label} on the My Lure Collection website</a>.</p></main></body></html>\n`;
}
