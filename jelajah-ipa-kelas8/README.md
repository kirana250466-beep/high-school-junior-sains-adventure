# Jelajah IPA Kelas 8

Situs belajar IPA Kelas 8: **Wahana** (praktik 3D), **Misi** (materi + tantangan), dan **Latihan** (soal + pembahasan di wahana) untuk bab **Energi** dan **Gelombang**. Situs ini statis (satu `index.html`), jadi tidak butuh build.

Nama proyek di semua tempat dibuat sama supaya mudah dicari di Cloudflare: **`jelajah-ipa-kelas8`**.

## Isi folder

| Berkas | Fungsi |
| --- | --- |
| `public/index.html` | Seluruh aplikasi |
| `public/_headers` | Header keamanan dan cache |
| `wrangler.jsonc` | Konfigurasi Cloudflare Workers (aset statis) |
| `package.json` | Perintah `dev`, `deploy`, `deploy:pages` |
| `.node-version` | Versi Node untuk build Cloudflare |
| `scripts/vendor-three.mjs` | Opsional: simpan three.js sendiri agar tidak bergantung CDN |
| `.github/workflows/deploy.yml` | Opsional: deploy lewat GitHub Actions (manual) |

## 1. Unggah ke GitHub

```bash
git init
git add .
git commit -m "Jelajah IPA Kelas 8"
git branch -M main
git remote add origin https://github.com/USERNAME/jelajah-ipa-kelas8.git
git push -u origin main
```

## 2A. Deploy sebagai Cloudflare Worker (disarankan)

**Lewat dashboard (tanpa terminal):**
1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Import a repository** (Workers Builds).
2. Pilih repo `jelajah-ipa-kelas8`.
3. Isi: **Project name** `jelajah-ipa-kelas8`, **Build command** kosongkan, **Deploy command** `npx wrangler deploy`.
4. Deploy. Alamatnya: `https://jelajah-ipa-kelas8.<subdomain-akunmu>.workers.dev`.

**Lewat terminal:**
```bash
npm install
npx wrangler login
npm run deploy
```
Coba lokal dulu: `npm run dev` lalu buka alamat yang tampil (biasanya http://localhost:8787).

## 2B. Deploy sebagai Cloudflare Pages

**Lewat dashboard:** Workers & Pages → Create → **Pages** → **Connect to Git** → pilih repo. Isi **Framework preset** `None`, **Build command** kosongkan, **Build output directory** `public`. Alamatnya: `https://jelajah-ipa-kelas8.pages.dev`.

**Lewat terminal:**
```bash
npm install
npx wrangler login
npm run deploy:pages
```

> Pilih salah satu, Worker atau Pages, supaya tidak ada dua situs kembar. Berkas `wrangler.jsonc` ditujukan untuk Worker. Pages akan melewatinya dan memakai pengaturan di dashboard, itu normal.

## Jika muncul error

| Pesan | Penyebab dan solusi |
| --- | --- |
| `Missing entry-point` | Wrangler terlalu lama. Jalankan `npm install` agar memakai wrangler 4 dari `package.json`. |
| `The directory specified by the "assets.directory" field does not exist` | Folder `public` harus ada di root repo dan berisi `index.html`. |
| `You are not authenticated` | Jalankan `npx wrangler login`. |
| `Node.js version ... not supported` | Pakai Node 20 atau lebih baru (sudah diset di `.node-version`). |
| Halaman putih / 3D tidak muncul | Jaringan memblokir `cdnjs.cloudflare.com`. Jalankan `npm run vendor:three` lalu deploy ulang. |

## Catatan

- Login nama **Ferdi** = mode Guru, selain itu mode Siswa. Ini hanya penyaring tampilan di browser, bukan keamanan sungguhan.
- Progres belajar tersimpan di browser tiap perangkat (localStorage).
