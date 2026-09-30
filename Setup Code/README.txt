# Setup Kode – Crumella

> Website Penjualan Cake & Dessert
> Folder ini menandakan proyek **Crumella** siap masuk tahap development.

| Keterangan | Isi |
| --- | --- |
| Nama Proyek | Crumella |
| Jenis Proyek | Website Penjualan Cake & Dessert |
| Metode | Agile/Scrum (Sprint 1) |
| Program Studi | Informatika, Universitas Samudra |
| Kategori Produk | Cake, Cupcake, Brownies |

---

## Daftar Isi

1. [Struktur Folder](#1-struktur-folder)
2. [Skema Database](#2-skema-database)
3. [Fitur Utama](#3-fitur-utama)
4. [Alur Utama Sistem](#4-alur-utama-sistem)
5. [Status Pengerjaan](#5-status-pengerjaan)

---

## 1. Struktur Folder

```text
crumella/
├── backend/
│   ├── controllers/            # Logika alur sistem
│   │   ├── auth/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── orders/
│   │   ├── favorites/
│   │   └── notifications/
│   ├── models/                 # Model data
│   │   ├── User
│   │   ├── Product
│   │   ├── Category
│   │   ├── Cart
│   │   ├── Favorite
│   │   ├── Order
│   │   └── Notification
│   ├── routes/                 # Endpoint API
│   └── config/                 # Konfigurasi database & environment
│
├── frontend/
│   ├── pages/                  # Halaman aplikasi
│   │   ├── login/
│   │   ├── register/
│   │   ├── home/
│   │   ├── all-menu/
│   │   ├── category/
│   │   ├── product-detail/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── order-guide/
│   │   ├── favorites/
│   │   ├── notifications/
│   │   ├── profile/
│   │   ├── account-settings/
│   │   └── help/
│   ├── components/             # Komponen UI
│   │   ├── navbar/
│   │   ├── product-card/
│   │   ├── search-bar/
│   │   ├── category-tabs/
│   │   └── notification-badge/
│   └── assets/                 # Gambar, icon & style
│
├── database/
│   └── schema.sql              # Skema database
│
└── docs/                       # Dokumen project
    ├── project-charter/
    ├── figma-uiux/
    ├── flowchart/
    ├── erd/
    └── architecture/
```

---

## 2. Skema Database

| Tabel | Keterangan |
| --- | --- |
| `users` | Data pengguna (akun, profil, pengaturan akun) |
| `categories` | Data kategori produk (Cake, Cupcake, Brownies) |
| `products` | Data produk: nama, rasa, harga, deskripsi, foto, stok |
| `carts` | Keranjang belanja pengguna beserta item di dalamnya |
| `favorites` | Produk yang disimpan pengguna sebagai favorit |
| `orders` | Data pesanan yang dibuat pengguna |
| `order_details` | Detail produk dalam setiap pesanan |
| `notifications` | Notifikasi untuk pengguna (status pesanan, informasi) |

---

## 3. Fitur Utama

| Kelompok | Fitur |
| --- | --- |
| **Akun** | Registrasi akun, Login, Profil / Tentang, Pengaturan akun |
| **Produk** | Beranda, Semua menu, Kategori produk, Search produk, Detail produk |
| **Pemesanan** | Keranjang belanja, Checkout, Cara pesanan |
| **Pendukung** | Favorit / simpan, Notifikasi, Bantuan |

---

## 4. Alur Utama Sistem

```mermaid
flowchart TD
    A([Buka Website]) --> B[Login]
    B <--> C[Registrasi Akun]
    B --> D[Beranda / Katalog Produk]
    D --> E[Search Produk / Pilih Kategori]
    E --> F[Detail Produk]
    F --> G[Tambah ke Keranjang]
    F -.-> H[Simpan ke Favorit]
    G --> I[Checkout]
    I --> J[Pesanan Dibuat]
    J --> K([Notifikasi Pesanan])
```

Versi teks:

```text
Buka Website
  ↓
Login  ←→  Registrasi Akun
  ↓
Beranda / Katalog Produk
  ↓
Search Produk / Pilih Kategori
  ↓
Detail Produk
  ↓
Tambah ke Keranjang  (opsional: Simpan ke Favorit)
  ↓
Checkout
  ↓
Pesanan Dibuat
  ↓
Notifikasi Pesanan
```

---

## 5. Status Pengerjaan

- [x] Project charter disusun
- [x] Struktur folder dirancang
- [x] Skema database dirancang
- [x] Fitur utama ditentukan
- [x] Alur sistem dirancang
- [ ] Desain UX/UI di Figma
- [ ] Implementasi kode
- [ ] Testing
- [ ] Deployment
