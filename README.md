# 🏠 Kos Connect (President University Student Housing Platform)

Platform resmi penghubung mahasiswa **President University (PU)** dengan hunian kos incaran terbaik setelah *move out* dari asrama (*dormitory*).

> **Hasil Diskusi dengan Sir Lambok:**
> 1. **Halaman Pertama**: Branding Kos Connect, akun Instagram resmi (`@kosconnect.pu`), banner ilustrasi resmi, dan kontak person PIC **Kos ABS** (mitra kerja sama perdana).
> 2. **Halaman Kedua**: Foto tipe kamar (Deluxe AC & Standard), daftar fasilitas lengkap, dan transparansi harga bulanan/semesteran + kalkulator biaya sewa.
> 3. **Halaman Terakhir / Bawah**: Fitur booking langsung yang dialihkan ke nomor WhatsApp PIC Kos ABS dengan format pesan otomatis yang rapi.
> 4. **Arsitektur Multi-Kos**: Target saat ini (s.d. Desember) fokus pada 1 kos mitra (**Kos ABS**), namun struktur data telah dibuat modular di `src/data/kosData.ts` sehingga sangat mudah diedit dan ditambah kos baru nantinya!
> 5. **Warna & Visual**: 100% mengikuti palet warna logo & ilustrasi resmi (Warm Cream, Chocolate Brown, Dusty Rose Pink, Honey Yellow, Soft Sage).

---

## 🚀 Cara Menjalankan Website Secara Lokal

1. Buka terminal (PowerShell / Command Prompt)
2. Masuk ke direktori proyek:
   ```bash
   cd "C:\Users\Salman\.gemini\antigravity\scratch\kos-connect"
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
   Atau untuk versi preview build yang sudah siap saji:
   ```bash
   npm run preview
   ```
4. Buka browser di alamat:
   👉 **http://localhost:5173/**

---

## ⚙️ Cara Mengubah Data Kos & Nomor WhatsApp

Semua data konfigurasi tersimpan rapi di satu file:
📁 **[`src/data/kosData.ts`](file:///C:/Users/Salman/.gemini/antigravity/scratch/kos-connect/src/data/kosData.ts)**

### 1. Mengubah Nomor WhatsApp PIC Kos ABS
Cari bagian `contactPerson` di `kosPartners`:
```typescript
contactPerson: {
  picName: "Pengelola Kos ABS",
  role: "Person in Charge (PIC) & Operasional Kos ABS",
  whatsappNumber: "6281288899900", // Ganti dengan nomor asli (awali 62 tanpa +)
  displayPhone: "+62 812-8889-9900",
  operatingHours: "Setiap Hari (08.00 - 20.00 WIB)",
  instagramAccount: "@kos_abs.official"
}
```

### 2. Mengubah Akun Instagram Kos Connect
Cari bagian `platformConfig`:
```typescript
instagram: {
  handle: "@kosconnect.pu",
  url: "https://instagram.com/kosconnect.pu"
}
```

### 3. Mengubah Harga & Fasilitas Kamar
Cari bagian `roomTypes` di dalam `kosPartners`:
- Ubah `priceMonthly`, `priceQuarterly`, `priceSemester`, `priceYearly`
- Ubah `availableRooms` (jumlah sisa kamar tersedia)
- Ubah foto kamar pada array `images`

### 4. Menambahkan Kos Baru Nanti (Setelah Desember)
Cukup duplikasi objek kos di dalam array `kosPartners`:
```typescript
export const kosPartners: KosItem[] = [
  {
    id: "kos-abs",
    name: "Kos ABS",
    // ...
  },
  {
    id: "kos-baru",
    name: "Kos Mitra 2",
    // ... data kos kedua
  }
];
```

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 (Custom Theme Warna Logo Kos Connect)
- **Icons**: Lucide Icons + Custom Vector SVG
- **Interactive Celebration**: Canvas Confetti (efek saat kirim booking)
- **Deployment Ready**: Mendukung Vercel, Netlify, atau hosting statis lainnya.
