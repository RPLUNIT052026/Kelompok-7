# 🍰 RANCANGAN UX/UI — Low-Fidelity Wireframe Crumella

Dokumentasi rancangan antarmuka aplikasi mobile **Crumella** (*Sweet Moments, Better Days*), aplikasi pemesanan kue dan dessert. Rancangan ini berupa **12 layar low-fidelity** berukuran **390 × 844 px** dengan pendekatan *mobile-first*: alur singkat dari memilih menu sampai pesanan sampai, dan tombol aksi utama yang selalu terlihat jelas.

---

<img src="crumella/Wireframe_Crumella (1).jpg" width="100%" alt="Wireframe UI UX Crumella">

---

## 🚀 A. Halaman 1: Onboarding & Autentikasi (Layar 01–03)
Pintu masuk pengguna baru sampai berhasil masuk ke aplikasi.
*   **Splash:** Logo Crumella, tagline, placeholder hero dessert, dan tombol `Get Started`.
*   **Onboarding:** Gambar pengantar, judul "Find your sweet moment", indikator 3 halaman, serta tombol `Skip` dan `Next`.
*   **Login / Sign up:** Tab *Log In* dan *Sign Up*, input email/username dan password, link *Forgot?*, tombol `LOG IN`, serta login lewat Google dan Facebook.

## 🏠 B. Halaman 2: Home & Menu (Layar 04–06)
Tempat pengguna menjelajahi dan memilih produk.
*   **Home:** Sapaan personal ("Good afternoon, Sweetie!"), *search bar*, promo banner, kategori (Cake, Brownie, Drink, More), dan *Popular menu*.
*   **Bottom Navigation:** Home, Menu, Cart, dan Profile, tampil di layar utama.
*   **Menu / Search:** Pencarian dessert, kategori populer (All, Cake, Brownies, Drinks), dan grid produk 2 kolom.
*   **Product Detail:** Foto produk, nama, harga, rating, deskripsi, pilihan ukuran *Regular/Large*, pengatur jumlah, dan tombol `ADD TO CART`.

## 🛒 C. Halaman 3: Cart, Checkout & Konfirmasi (Layar 07–09)
Alur transaksi dari keranjang sampai pesanan terkonfirmasi.
*   **Cart:** Daftar item dengan pengatur jumlah serta ringkasan (Subtotal, Delivery, Total).
*   **Checkout:** Alamat pengiriman, metode pembayaran (QRIS, E-Wallet, Bank transfer), ringkasan akhir, dan tombol `CONFIRM & PAY`.
*   **Confirmation:** Pesan "Order confirmed!", nomor pesanan, status pembayaran, tombol `TRACK YOUR ORDER`, dan link *Back to Home*.

## 📦 D. Halaman 4: Order Tracking & Profil (Layar 10–12)
*   **Order Tracking:** Estimasi tiba dan *timeline* 4 tahap status pesanan, dengan tombol `CONTACT SUPPORT`.
*   **Profile:** Kartu profil serta menu Favourites, Order history, My addresses, Settings, dan Log out.
*   **Edit Profile:** Form Name, Email, Username, Password, dan Phone number dengan tombol `SAVE CHANGES`.

---

## 🗂️ E. Daftar Layar

<img src="Crumella/Tabel_Daftar_Layar.png" width="100%" alt="Tabel Daftar Layar Crumella (Figma)">

---

## 🔗 F. Pemetaan Komponen UI ke Data (Traceability)

<img src="crumella/Tabel_Pemetaan_UI_ke_Data.png" width="100%" alt="Tabel Pemetaan Komponen UI ke Data (Figma)">

---

## 🚦 G. Status Pesanan

<img src="crumella/Tabel_Status_Pesanan.png" width="100%" alt="Tabel Status Pesanan (Figma)">

---

## 🔀 H. Alur Pengguna

```
Splash → Onboarding → Login / Sign up → Home
Home → Menu / Search → Product detail → Cart → Checkout → Confirmation → Order tracking
Home ⇄ Profile → Edit profile
```

---

## 📌 I. Kesimpulan Tahap UI/UX

Rancangan ini mengutamakan alur pemesanan yang singkat dan jelas: dari *Splash* sampai *Order tracking* hanya butuh 10 layar berurutan, dengan *bottom navigation* untuk berpindah antar-menu utama. Fitur **pelacakan pesanan** dan **profil yang bisa diedit** memberi pengalaman yang lengkap bagi pelanggan. Karena masih *low-fidelity*, teks, gambar, dan data contoh perlu diganti dengan konten produk final pada tahap *high-fidelity*.
