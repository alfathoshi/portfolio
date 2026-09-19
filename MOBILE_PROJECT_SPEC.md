# Context & Guide: Adding a New Mobile App Project

Dokumen ini berisi spesifikasi data, format aset, dan alur integrasi yang dibutuhkan untuk mendaftarkan project aplikasi mobile baru ke dalam portfolio ini.

---

## 1. File & Struktur Arsitektur Terkait

| Komponen | Path File | Keterangan |
| :--- | :--- | :--- |
| **Data Source** | [`data/index.ts`](file:///Users/alfathoshi/Documents/Code/portfolio/data/index.ts) | Menyimpan array `projects` yang menjadi single source of truth daftar project. |
| **Aset Publik** | [`public/`](file:///Users/alfathoshi/Documents/Code/portfolio/public) | Menyimpan cover mockup, screenshot aplikasi, dan icon tech stack (di-load via root path `/...`). |
| **Komponen Utama** | [`components/RecentProjects.tsx`](file:///Users/alfathoshi/Documents/Code/portfolio/components/RecentProjects.tsx) | Wrapper section yang me-render carousel project. |
| **Carousel & Modal UI** | [`components/ui/apple-cards-carousel.tsx`](file:///Users/alfathoshi/Documents/Code/portfolio/components/ui/apple-cards-carousel.tsx) | Apple cards carousel interaktif lengkap dengan modal pop-up screenshot slider dan link action. |

---

## 2. Skema Data TypeScript

Setiap project di dalam array `projects` pada file [`data/index.ts`](file:///Users/alfathoshi/Documents/Code/portfolio/data/index.ts) mengikuti struktur berikut:

```typescript
export interface ProjectItem {
  id: number;            // ID integer unik. Urutan array di index.ts disusun descending (ID terbesar berada di paling atas / tampil pertama).
  tag: string;           // Kategori atau sub-judul singkat (misal: "Group Travel App", "Personal Finance App").
  title: string;         // Nama aplikasi (misal: "Omawe", "Nomi").
  des: string;           // Deskripsi 1–2 kalimat yang padat tentang problem, solusi, dan fitur utama aplikasi.
  img: string;           // Path cover thumbnail utama yang tampil di kartu carousel (misal: "/nama_app_1.png").
  screenshots: string[]; // List path screenshot aplikasi yang ditampilkan di dalam modal slider pop-up.
  iconLists: string[];   // List path file icon teknologi yang digunakan (disimpan di /public).
  link: string;          // URL action tombol "Visit Project" (misal: link TestFlight, Google Play, App Store, atau GitHub).
}
```

---

## 3. Spesifikasi Aset Gambar & Icon ([`public/`](file:///Users/alfathoshi/Documents/Code/portfolio/public))

### A. Cover Thumbnail (`img`)
* **Ukuran Card UI**: `320px` (lebar) $\times$ `660px` (tinggi) dengan rounded corners.
* **Orientasi / Rasio**: Vertikal (Portrait, rasio smartphone ~9:16 atau 9:19.5).
* **Format**: `.png`, `.jpg`, atau `.webp`.
* **Rekomendasi**: Screenshot halaman utama aplikasi atau frame mockup smartphone portrait.

### B. Screenshot Modal (`screenshots`)
* **Kuantitas**: 1 hingga 10 gambar.
* **Orientasi**: Portrait.
* **Interaksi UI**: Pengguna dapat melakukan swipe, drag mouse, atau klik tombol navigasi panah kiri/kanan untuk melihat alur fitur aplikasi di dalam modal pop-up.
* **Pola Penamaan**: Disarankan menggunakan prefix nama aplikasi, contoh:
  * `/myapp_1.png`
  * `/myapp_2.png`
  * `/myapp_3.png`

### C. Icon Tech Stack (`iconLists`)
Icon tech stack yang **sudah tersedia** di folder [`public/`](file:///Users/alfathoshi/Documents/Code/portfolio/public):
* **Mobile / Apple Ecosystem**: `/swift.svg`, `/swiftui.png`, `/swiftdata.webp`
* **Cross-Platform**: `/flutter.svg`
* **Backend, Cloud & Database**: `/firebase.svg`, `/supabase.svg`, `/laravel.svg`, `/mysql.svg`, `/azure.svg`, `/nginx.svg`
* **AI & Integration**: `/gemini.svg`, `/midtrans.png`, `/github.svg`

> [!NOTE]
> Jika project mobile menggunakan teknologi baru (misal: React Native, Kotlin, Jetpack Compose, Expo, dsb.), tambahkan icon file SVG atau PNG transparan baru ke dalam folder `public/`.

---

## 4. Alur Penambahan Project Baru

1. **Siapkan Gambar**:
   * Salin cover dan seluruh screenshot ke folder `public/`.
   * Jika ada icon tech stack baru, salin juga ke folder `public/`.
2. **Perbarui Data**:
   * Buka [`data/index.ts`](file:///Users/alfathoshi/Documents/Code/portfolio/data/index.ts).
   * Tambahkan objek project baru di posisi paling atas dalam array `export const projects = [...]` dengan ID yang di-increment (contoh: jika ID tertinggi sebelumnya `6`, gunakan `id: 7`).

---

## 5. Template Data / Prompt Generator

Kamu dapat mengisi data berikut atau menggunakannya sebagai template prompt:

```json
{
  "id": 7,
  "tag": "Category App",
  "title": "App Name",
  "des": "Short and concise description about what the app does, its target audience, and key highlights.",
  "img": "/appname_1.png",
  "screenshots": [
    "/appname_1.png",
    "/appname_2.png",
    "/appname_3.png"
  ],
  "iconLists": [
    "/swiftui.png",
    "/swiftdata.webp"
  ],
  "link": "https://testflight.apple.com/join/..."
}
```
