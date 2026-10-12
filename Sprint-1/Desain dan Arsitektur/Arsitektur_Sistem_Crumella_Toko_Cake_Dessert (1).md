# ARSITEKTUR SISTEM — Crumella (Toko Cake & Dessert Online)

> *Sweet Moments, Better Days*

## 1. Diagram Arsitektur

```mermaid
graph TB
    subgraph PRESENTASI[Lapisan Presentasi]
        A[Browser / Mobile Web - HTML + CSS + JavaScript]
        A1[Halaman Pembeli - Onboarding, Login, Home, Menu, Detail Produk, Keranjang, Checkout, Profil]
        A2[Halaman Admin - Kelola Produk, Kategori, Pesanan, Promo]
    end

    subgraph APLIKASI[Lapisan Aplikasi]
        B[Flask Backend - Python]
        B1[Autentikasi & Role]
        B2[Manajemen Produk & Kategori]
        B3[Keranjang & Checkout]
        B4[Logika Order & Status Pengiriman]
        B5[Promo, Favorit & Review]
        B6[API /api/products, /api/cart, /api/orders]
    end

    subgraph DATA[Lapisan Data]
        C[(SQLite Database)]
        C1[/Folder uploads - Foto Produk & Avatar/]
    end

    subgraph EKSTERNAL[Layanan Eksternal]
        D[Simulasi Pembayaran - Dummy]
        E[Payment Gateway - Future]
        F[Login Google / Facebook - Future]
        G[Notifikasi Email / WhatsApp - Future]
    end

    A --> A1
    A --> A2
    A -->|HTTP Request| B
    B --> B1
    B --> B2
    B --> B3
    B --> B4
    B --> B5
    B --> B6
    B -->|Query| C
    B -->|Simpan File| C1
    B -->|Konfirmasi Bayar| D
    E -.->|Future| B
    F -.->|Future| B
    B -.->|Future| G
```

## 2. Penjelasan Layer

| Layer | Komponen | Fungsi |
|-------|----------|--------|
| **Presentasi** | HTML, CSS, JavaScript | Menampilkan onboarding, katalog dessert, detail produk, keranjang, checkout, dan profil pembeli; dashboard admin |
| **Aplikasi** | Flask (Python) | Memproses request, autentikasi, hitung subtotal + ongkir, promo pesanan pertama, dan status pesanan |
| **Data** | SQLite + folder uploads | Menyimpan user, produk, ukuran, keranjang, pesanan, pembayaran, serta foto produk |
| **Layanan Eksternal** | Simulasi Pembayaran / Payment Gateway / OAuth | Konfirmasi pembayaran dan login sosial (tahap lanjutan) |

## 3. Pemetaan Halaman Desain ke Modul Sistem

| Halaman di Desain | Modul Backend | Endpoint Utama |
|-------------------|---------------|----------------|
| Splash & Onboarding (3 slide) | Statis (frontend) | - |
| Log In / Sign Up | Autentikasi | `POST /api/auth/login`, `POST /api/auth/register` |
| Home (search, kategori, Popular Menu) | Produk & Kategori | `GET /api/categories`, `GET /api/products?popular=1&q=` |
| Menu (Explore our menu) | Produk | `GET /api/products?q=&category=` |
| Detail Produk (rating, ukuran Reguler/Large, qty) | Produk, Review, Favorit | `GET /api/products/<id>`, `POST /api/favorites` |
| Your Sweet Cart | Keranjang | `GET/POST/PATCH/DELETE /api/cart` |
| Checkout (alamat, metode bayar, ringkasan) | Order & Pembayaran | `POST /api/orders`, `POST /api/payments` |
| Track Your Treat (pelacakan pesanan) | Order | `GET /api/orders/<id>/status` |
| Profil (Favourites, Language, Location, dll.) | User, Alamat, Favorit | `GET/PUT /api/profile`, `GET /api/favorites`, `GET/POST /api/addresses` |
| Edit Profile | User | `PUT /api/profile` |
| Log Out | Autentikasi | `POST /api/auth/logout` |

## 4. Alur Komunikasi

### 4.1 Alur Pemesanan Dessert

```mermaid
sequenceDiagram
    participant U as Pembeli
    participant B as Browser
    participant F as Flask
    participant S as SQLite
    participant P as Pembayaran

    U->>B: Pilih dessert, ukuran, jumlah lalu klik Add to Cart
    B->>F: POST /api/cart
    F->>S: Cek produk aktif & stok harian
    S-->>F: Tersedia
    F->>S: INSERT/UPDATE cart_items
    F-->>B: JSON keranjang (subtotal)
    U->>B: Klik Checkout, pilih alamat & metode bayar
    B->>F: POST /api/orders
    F->>S: Hitung subtotal + ongkir (Rp 15.000) - diskon promo
    F->>S: INSERT orders (status: menunggu_pembayaran) + order_items
    F->>P: Minta pembayaran
    P-->>F: Pembayaran sukses
    F->>S: UPDATE orders (dibayar), INSERT payments, kosongkan cart
    F-->>B: JSON (ringkasan pesanan)
    B-->>U: Halaman konfirmasi & pelacakan pesanan
```

### 4.2 Alur Pelacakan Pesanan ("Track your treat")

```mermaid
stateDiagram-v2
    [*] --> MenungguPembayaran
    MenungguPembayaran --> Dibayar: Pembayaran sukses
    MenungguPembayaran --> Dibatalkan: Timeout / batal
    Dibayar --> Diproses: Admin konfirmasi, dapur mulai membuat
    Diproses --> Dikirim: Kurir mengantar
    Dikirim --> Selesai: Pesanan diterima
    Selesai --> [*]
    Dibatalkan --> [*]
```

### 4.3 Alur Admin Menambah Produk

```mermaid
sequenceDiagram
    participant A as Admin
    participant B as Browser
    participant F as Flask
    participant S as SQLite

    A->>B: Login & isi form produk baru (nama, harga, ukuran, foto)
    B->>F: POST /api/products
    F->>F: Validasi role admin
    F->>S: INSERT products + product_sizes
    F-->>B: JSON (berhasil)
    B-->>A: Produk tampil di Menu pembeli
```

### 4.4 Alur Login

```mermaid
sequenceDiagram
    participant U as Pengguna
    participant B as Browser
    participant F as Flask
    participant S as SQLite

    U->>B: Isi email/username & password
    B->>F: POST /api/auth/login
    F->>S: Cari user, verifikasi password_hash
    S-->>F: Data user + role
    F-->>B: Session/token + role
    B-->>U: Pembeli -> Home | Admin -> Dashboard
```

## 5. Rancangan Tabel Database

```mermaid
erDiagram
    USERS ||--o{ ADDRESSES : memiliki
    USERS ||--o{ ORDERS : membuat
    USERS ||--o{ CART_ITEMS : menyimpan
    USERS ||--o{ FAVORITES : menandai
    USERS ||--o{ REVIEWS : menulis
    CATEGORIES ||--o{ PRODUCTS : mengelompokkan
    PRODUCTS ||--o{ PRODUCT_SIZES : punya_ukuran
    PRODUCTS ||--o{ FAVORITES : difavoritkan
    PRODUCTS ||--o{ REVIEWS : diulas
    PRODUCT_SIZES ||--o{ CART_ITEMS : dipilih
    PRODUCT_SIZES ||--o{ ORDER_ITEMS : dipesan
    ORDERS ||--|{ ORDER_ITEMS : berisi
    ORDERS ||--o| PAYMENTS : dibayar_dengan
    ORDERS }o--|| ADDRESSES : dikirim_ke
    PROMOS ||--o{ ORDERS : dipakai_pada

    USERS {
        int id PK
        string nama
        string email
        string username
        string password_hash
        string phone
        string avatar
        string role
        string bahasa
    }
    ADDRESSES {
        int id PK
        int user_id FK
        string label
        string alamat_lengkap
        boolean is_default
    }
    CATEGORIES {
        int id PK
        string nama_kategori
        string ikon
    }
    PRODUCTS {
        int id PK
        int category_id FK
        string nama
        string deskripsi
        string foto
        int stok_harian
        boolean is_popular
        boolean is_active
    }
    PRODUCT_SIZES {
        int id PK
        int product_id FK
        string ukuran
        int harga
    }
    CART_ITEMS {
        int id PK
        int user_id FK
        int size_id FK
        int qty
    }
    FAVORITES {
        int id PK
        int user_id FK
        int product_id FK
    }
    REVIEWS {
        int id PK
        int user_id FK
        int product_id FK
        int rating
        string komentar
    }
    PROMOS {
        int id PK
        string kode
        int potongan_persen
        boolean hanya_pesanan_pertama
        boolean aktif
    }
    ORDERS {
        int id PK
        int user_id FK
        int address_id FK
        int promo_id FK
        int subtotal
        int ongkir
        int diskon
        int total_harga
        string status
        datetime created_at
    }
    ORDER_ITEMS {
        int id PK
        int order_id FK
        int size_id FK
        int qty
        int harga_satuan
    }
    PAYMENTS {
        int id PK
        int order_id FK
        string metode
        string status
        datetime paid_at
    }
```

**Catatan desain data:**
- `PRODUCT_SIZES` memisahkan harga per ukuran (Reguler / Large) agar satu dessert bisa punya dua harga.
- `ORDER_ITEMS.harga_satuan` menyimpan harga saat transaksi, sehingga riwayat tidak berubah jika harga produk diubah.
- Rating rata-rata (mis. 4.8 dari 120 review) dihitung dari tabel `REVIEWS`.
- Biaya ongkir awal diset tetap (Rp 15.000), bisa dikembangkan berdasarkan jarak.

## 6. Contoh Perhitungan Total Pesanan

```
subtotal = SUM(harga_satuan x qty)        -> Rp 107.000
ongkir   = 15.000                          -> Rp  15.000
diskon   = promo pesanan pertama (jika ada)
total    = subtotal + ongkir - diskon      -> Rp 122.000 (tanpa diskon)
```

## 7. Teknologi yang Digunakan

| Komponen | Teknologi | Alasan |
|----------|-----------|--------|
| Backend | Flask | Ringan, mudah dipelajari |
| Database | SQLite | Tanpa server, portable |
| Frontend | HTML + CSS + JavaScript | Sederhana, tampilan mobile-first sesuai desain |
| Font & Gaya | Poppins, palet maroon `#5C161B` & krem/peach | Konsisten dengan desain Crumella |
| Keamanan | Werkzeug (hash password) | Password tidak disimpan sebagai teks biasa |
| Pembayaran | Simulasi (dummy) | Bisa didemokan tanpa akun merchant |
| Login Sosial | Google & Facebook OAuth (tahap lanjutan) | Sesuai tombol di halaman Log In |
| Version Control | Git + GitHub | Standar industri |
| Diagram | Mermaid | Render langsung di GitHub |

## 8. Pembagian Fitur per Tahap

| Tahap | Fitur |
|-------|-------|
| **MVP** | Register/Login, katalog + pencarian, detail produk, keranjang, checkout dengan pembayaran simulasi, riwayat & status pesanan, dashboard admin |
| **Tahap 2** | Favorit, review & rating, promo pesanan pertama, multi-alamat, edit profil lengkap |
| **Tahap 3** | Login Google/Facebook, payment gateway (mis. Midtrans), notifikasi email/WhatsApp, langganan (Subscription), mode gelap |

## 9. Kelebihan Arsitektur Ini

- **Modular** - Setiap layer terpisah, mudah dikembangkan
- **Sesuai Desain** - Setiap layar Figma punya modul dan endpoint yang jelas
- **Tanpa Layanan Berbayar** - Berjalan penuh dengan simulasi pembayaran
- **Future-proof** - Siap integrasi payment gateway, OAuth, dan notifikasi
- **Aman** - Pemisahan role (pembeli/admin) dan password ter-hash
- **Ringan** - Tidak butuh server besar
