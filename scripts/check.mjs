import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
for (const page of ['', 'about', 'features', 'contact', 'privacy-policy']) {
  const filename = path.join(root, page, 'index.html');
  const html = await readFile(filename, 'utf8');
  assert.match(html, /<main id="main">/);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, page + ' needs one h1');
  assert.doesNotMatch(html, /wixstatic|parastorage|<iframe/i);
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (/^(?:https?:|mailto:)/.test(match[1])) continue;
    await access(path.resolve(path.dirname(filename), match[1].split('#')[0]));
  }
  if (page === '') {
    assert.match(html, /href="mailto:info@gvksoftware\.co\.uk"/);
    assert.doesNotMatch(html, /<form\b|type="submit"|Submission is unavailable/i);
  }
}
const home = await readFile(path.join(root, 'index.html'), 'utf8');
const policy = await readFile(path.join(root, 'privacy-policy/index.html'), 'utf8');
for (const section of ['home', 'about', 'features', 'contact']) {
  assert.match(home, new RegExp(`id="${section}"`), `Missing continuous-page section: ${section}`);
  assert.match(home, new RegExp(`href="#${section}" data-section="${section}"`), `Home navigation must scroll to ${section}`);
  assert.match(policy, new RegExp(`href="../#${section}" data-section="${section}"`), `Privacy navigation must return to ${section}`);
}
for (const section of ['about', 'features', 'contact']) {
  const legacy = await readFile(path.join(root, section, 'index.html'), 'utf8');
  assert.ok(legacy.includes(`content="0; url=../#${section}"`), `${section} URL must forward to the main page`);
  assert.ok(legacy.includes(`location.replace("../#${section}")`));
}
assert.match(home, /href="\.\/privacy-policy\/"/);
assert.doesNotMatch(home, /href="\.\/(?:about|features|contact)\/"/);
const css = await readFile(path.join(root, 'assets/styles.css'), 'utf8');
assert.doesNotMatch(css, /https?:/);
for (const match of css.matchAll(/url\('([^']+)'\)/g)) await access(path.join(root, 'assets', match[1]));
console.log('Passed: one-page section navigation, privacy return links, legacy URL forwards, local assets, headings, email contact, and no Wix runtime dependencies.');
