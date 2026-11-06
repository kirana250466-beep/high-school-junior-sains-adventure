// Opsional: unduh three.js ke folder public/vendor agar situs tidak bergantung pada CDN.
import { mkdir, writeFile, readFile } from 'node:fs/promises';

const URL_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
const res = await fetch(URL_CDN);
if (!res.ok) throw new Error('Gagal mengunduh three.js: HTTP ' + res.status);

await mkdir('public/vendor', { recursive: true });
await writeFile('public/vendor/three.min.js', Buffer.from(await res.arrayBuffer()));

const file = 'public/index.html';
const html = await readFile(file, 'utf8');
await writeFile(file, html.replace(URL_CDN, '/vendor/three.min.js'));
console.log('Selesai: three.js tersimpan di public/vendor/three.min.js dan index.html sudah diperbarui.');
