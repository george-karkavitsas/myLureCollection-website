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
  if (page === '' || page === 'contact') {
    assert.match(html, /name="first-name"[^>]*required/);
    assert.match(html, /name="email"[^>]*type="email"[^>]*required/);
    assert.match(html, /type="submit" disabled/);
  }
}
const css = await readFile(path.join(root, 'assets/styles.css'), 'utf8');
assert.doesNotMatch(css, /https?:/);
for (const match of css.matchAll(/url\('([^']+)'\)/g)) await access(path.join(root, 'assets', match[1]));
console.log('Passed: 5 pages, local links/assets, headings, required fields, unavailable form, and no Wix runtime dependencies.');
