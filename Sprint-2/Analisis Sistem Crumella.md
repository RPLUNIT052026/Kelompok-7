Sprint 1 · Perancangan sistem

# Analisis sistem *Crumella*

Pemodelan fungsional dan struktural website penjualan cake & dessert dengan pendekatan *Object-Oriented Analysis and Design*: siapa memakai sistem, data apa yang keluar masuk, bagaimana pesanan dibayar, dan objek apa yang tersimpan.

Sweet Moments, Better DaysKelompok 7Informatika · Universitas SamudraAgile / Scrum

[Use Case](#usecase)[Context](#context)[Sequence](#sequence)[Class](#class)[Catatan](#catatan)

1

## Use Case Diagram

Interaksi pengguna dengan sistem

Pelanggan memakai delapan fungsi utama. Admin mengelola produk dan pesanan. Payment Gateway hanya terhubung ke pemilihan metode pembayaran.

Pelanggan

Registrasi atau login, mencari produk di kategori Dessert, Cake, Brownies, dan Minuman, membuka detail produk, mengelola keranjang, checkout, memantau status pesanan, menyimpan favorit, dan mengubah profil.

Admin

Menambah, mengubah, dan menghapus data produk, melihat pesanan yang masuk, lalu memperbarui statusnya dari **Dibayar** ke **Diproses** sampai **Selesai**. Admin masuk lewat fungsi Login yang sama.

Payment Gateway

Pada Sprint 1 pembayaran masih simulasi (*dummy*) sesuai dokumen arsitektur, jadi aktor ini hanya mengembalikan status berhasil atau gagal.

**Relasi wajib.** Login selalu melewati Autentikasi. Detail Produk selalu meminta ukuran (Reguler atau Large) dan jumlah. Checkout selalu meminta alamat pengiriman dan metode pembayaran.

2

## Context Diagram

Batasan dan aliran data sistem

Website Crumella sebagai satu proses tunggal. Panah oranye adalah data yang dikembalikan sistem.

### Pelanggan ⇄ Sistem

Pelanggan mengirim data login, kata kunci, isi keranjang, alamat, dan metode bayar. Sistem membalas dengan daftar produk, harga, ringkasan biaya (subtotal, delivery, total), dan status pesanan.

### Admin ⇄ Sistem

Admin mengirim pembaruan produk dan perubahan status pesanan, lalu menerima rekap pesanan yang masuk.

### Sistem ⇄ Payment Gateway

Sistem meminta pembayaran dengan total dan metode, lalu menerima status transaksi untuk diteruskan ke pelanggan.

3

## Sequence Diagram

Alur checkout dan pembayaran

Garis putus-putus adalah balasan. Bidang hijau dan merah memisahkan dua kemungkinan hasil pembayaran.

1. Pelanggan menekan **Checkout** di halaman Cart.
2. Website menampilkan alamat pengiriman, metode pembayaran, dan ringkasan pesanan.
3. Setelah memilih alamat dan metode, pelanggan menekan **Confirmation**.
4. Website mengirim `POST /api/pesanan` ke Backend API.
5. Backend menyimpan pesanan dan detail item dengan status *menunggu*.
6. Database mengembalikan ID pesanan.
7. Backend meminta pembayaran ke Payment Gateway (simulasi).
8. **Berhasil.** Gateway mengirim status berhasil.
9. Status pesanan diubah menjadi *dibayar*.
10. Backend mengirim data konfirmasi ke Website.
11. Pelanggan melihat halaman **Order Confirmed** dengan nomor pesanan, misalnya `#CRM-0012`.
12. **Gagal.** Gateway mengirim status gagal.
13. Status pesanan diubah menjadi *batal*.
14. Backend mengirim pesan error ke Website.
15. Pelanggan melihat pesan error pembayaran.

4

## Class Diagram

Struktur objek dan basis data

Kotak gelap adalah kelas turunan. Segitiga kosong menunjuk ke kelas induk, garis putus-putus adalah relasi favorit.

### Pewarisan

`User` diturunkan menjadi `Pelanggan` dan `Admin`. Keduanya mewarisi id, nama, email, username, password, dan noTelepon, sesuai kolom di halaman Edit Profil.

### Katalog

- Satu `Kategori` memiliki banyak `Produk`.
- `Admin` mengelola `Produk`.
- `Pelanggan` dapat menandai banyak produk sebagai favorit.

### Transaksi

- `Pelanggan` punya satu `Keranjang` berisi banyak `ItemKeranjang` (produk, ukuran, jumlah).
- Satu `Pesanan` memuat beberapa `DetailPesanan`, dikirim ke satu `Alamat`, dan dibayar lewat satu `Pembayaran`.

**Total pesanan** = subtotal + biayaDelivery. Contoh dari desain: Rp 107.000 + Rp 15.000 = Rp 122.000.

5

## Catatan penyelarasan

Hal yang masih perlu diputuskan tim

**Peran Admin**

Charter dan wireframe berfokus pada pembeli. Admin tetap dimodelkan karena produk dan status pesanan perlu dikelola. Tim perlu memastikan halaman Admin masuk Sprint berikutnya.

**Fitur di luar Charter**

Login Facebook/Google, rating dan review, serta diskon pesanan pertama muncul di desain tetapi belum dimodelkan. Atribut rating dan relasi favorit sudah disiapkan.

**Status pesanan**

Menunggu, dibayar, diproses, selesai. Pesanan menjadi batal bila pembayaran gagal. Status yang sama dipakai di halaman Riwayat Pesanan.

Crumella · Sweet Moments, Better DaysKelompok 7 · Informatika, Universitas Samudra