import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('dist');
const pages = [
  ['index.html', 'https://www.example.com/'],
  ['es/index.html', 'https://www.example.com/es/'],
  ['nosaltres/index.html', 'https://www.example.com/nosaltres/'],
  ['es/nosotros/index.html', 'https://www.example.com/es/nosotros/'],
  ['marques/index.html', 'https://www.example.com/marques/'],
  ['es/marcas/index.html', 'https://www.example.com/es/marcas/'],
  ['contacte/index.html', 'https://www.example.com/contacte/'],
  ['es/contacto/index.html', 'https://www.example.com/es/contacto/'],
];

for (const [page, canonical] of pages) {
  const html = readFileSync(resolve(dist, page), 'utf8');

  assert.match(
    html,
    new RegExp(`<link rel="canonical" href="${canonical.replaceAll('/', '\\/')}"`),
  );
  assert.match(html, /hreflang="ca"/);
  assert.match(html, /hreflang="es"/);
  assert.match(html, /application\/ld\+json/);
}

const notFound = readFileSync(resolve(dist, '404.html'), 'utf8');
assert.match(notFound, /name="robots" content="noindex, follow"/);

const robots = readFileSync(resolve(dist, 'robots.txt'), 'utf8');
assert.match(robots, /Sitemap: https:\/\/www\.example\.com\/sitemap-index\.xml/);

assert.ok(existsSync(resolve(dist, 'sitemap-index.xml')));
assert.ok(existsSync(resolve(dist, 'sitemap-0.xml')));

console.log('Static site metadata, robots.txt, sitemap, and 404 output verified.');
