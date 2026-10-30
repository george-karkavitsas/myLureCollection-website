import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const { pages, render } = await import('../src/site.mjs');
const policy = await readFile(path.join(root, 'src/privacy-policy.html'), 'utf8');
for (const page of pages) {
  const folder = path.join(root, page.slug);
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, 'index.html'), render(page, policy));
}
console.log('Built 5 static pages.');
