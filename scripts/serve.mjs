import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 4173);
const prefix = '/myLureCollection-website';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
http.createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === prefix) { res.writeHead(301, { Location: prefix + '/' }); return res.end(); }
    const subpath = pathname.startsWith(prefix + '/');
    if (subpath) pathname = pathname.slice(prefix.length);
    if (!/^\/(?:$|index\.html$|(?:about|features|contact|privacy-policy)(?:\/|\/index\.html)?$|assets\/[a-zA-Z0-9_./-]+$)/.test(pathname)) throw new Error('Not found');
    let file = path.resolve(root, '.' + pathname);
    if (file !== path.resolve(root) && !file.startsWith(root)) throw new Error('Not found');
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: (subpath ? prefix : '') + pathname + '/' }); return res.end(); }
      file = path.join(file, 'index.html');
    }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    if (req.method === 'HEAD') return res.end();
    res.end(data);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Page not found'); }
}).listen(port, '127.0.0.1', () => console.log('Local preview: http://127.0.0.1:' + port + '/'));
