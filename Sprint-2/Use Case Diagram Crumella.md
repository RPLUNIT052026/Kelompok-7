<img width="98" height="150" alt="use_case_diagram_crumella" src="https://github.com/user-attachments/assets/6fb47980-f2da-4060-be74-38bbe2aa378b" />

# PENJELASAN USE CASE DIAGRAM
## Crumella — Cake and Dessert

## 1. Pendahuluan

Use Case Diagram adalah diagram yang menggambarkan siapa saja yang menggunakan sistem dan fitur apa saja yang dapat mereka lakukan.

Pada proyek Crumella, Use Case Diagram digunakan untuk menjelaskan fitur-fitur utama sistem pemesanan cake dan dessert, mulai dari melihat pengenalan aplikasi (onboarding), registrasi dan login, memilih dessert, memesan, hingga keluar dari akun. Seluruh fitur pada dokumen ini disesuaikan dengan **desain Figma (DESIGN_WEB.pdf)** yang terdiri dari 13 layar: Splash, Onboarding (3 layar), Login, Beranda, Menu, Detail Dessert, Keranjang, Checkout, Profil (2 varian), dan Edit Profil.

## 2. Tujuan Use Case Diagram

1. Menggambarkan fitur-fitur yang tersedia pada sistem Crumella.
2. Menunjukkan siapa yang menggunakan setiap fitur.
3. Memastikan fitur yang dibuat sesuai dengan desain Figma dan tidak ada fitur tambahan di luar desain.
4. Mempermudah anggota Kelompok 7 memahami cakupan sistem sebelum tahap pengkodean.
5. Menjadi acuan dalam pengembangan dan pengujian sistem pada Sprint berikutnya.

## 3. Aktor

| Aktor | Jenis | Penjelasan |
|---|---|---|
| Pelanggan | Aktor utama | Pengguna Crumella yang melihat onboarding, mendaftar, login, mencari dan memilih dessert, memesan, mengelola profil, dan keluar akun. |
| Google / Facebook | Aktor pendukung | Layanan pihak ketiga yang membantu proses login. Pada desain terdapat dua tombol ikon (Facebook dan Google) di halaman Login. |

Pada desain Figma tidak terdapat halaman admin, sehingga tidak ada aktor Admin. Aktor Google/Facebook hanya terlibat pada satu use case, yaitu Login dengan Akun Sosial.

## 4. Use Case Diagram Keseluruhan

### Pengertian

Diagram ini menggambarkan seluruh fitur yang dapat dilakukan Pelanggan pada Crumella dalam satu gambar.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    Sosial(["🔗 Google / Facebook"])

    subgraph Sistem["Crumella"]
        direction TB
        UC01(["01 Melihat Onboarding"])
        UC02(["02 Registrasi"])
        UC03(["03 Login"])
        UC04(["04 Login dengan Akun Sosial"])
        UC05(["05 Melihat Beranda"])
        UC06(["06 Mencari Dessert"])
        UC07(["07 Melihat Menu"])
        UC08(["08 Melihat Detail Dessert"])
        UC09(["09 Menambah ke Keranjang"])
        UC10(["10 Menandai Favorit"])
        UC11(["11 Melihat Keranjang"])
        UC12(["12 Checkout"])
        UC13(["13 Melihat Profil"])
        UC14(["14 Mengubah Profil"])
        UC15(["15 Keluar Akun"])
    end

    Pelanggan --- UC01
    Pelanggan --- UC02
    Pelanggan --- UC03
    Pelanggan --- UC05
    Pelanggan --- UC06
    Pelanggan --- UC07
    Pelanggan --- UC08
    Pelanggan --- UC11
    Pelanggan --- UC12
    Pelanggan --- UC13
    Pelanggan --- UC14
    Pelanggan --- UC15
    Sosial --- UC04

    UC04 -. extend .-> UC03
    UC09 -. extend .-> UC08
    UC10 -. extend .-> UC08
    UC12 -. include .-> UC11
```

### Cara Membaca Diagram

1. **Pelanggan** adalah aktor utama yang menggunakan Crumella.
2. **Google / Facebook** adalah aktor pendukung yang hanya terhubung ke use case Login dengan Akun Sosial.
3. **Kotak "Crumella"** adalah batas sistem. Semua use case berada di dalamnya.
4. **Oval** adalah satu fitur yang dapat dilakukan.
5. **Garis lurus** berarti aktor melakukan fitur tersebut secara langsung.
6. **Panah putus-putus include** berarti fitur tersebut selalu menjalankan fitur lain.
7. **Panah putus-putus extend** berarti fitur tersebut adalah tambahan yang boleh dilakukan (opsional) dari fitur lain.

## 5. Daftar Use Case

| No | Use Case | Penjelasan Singkat | Layar Desain Figma |
|---|---|---|---|
| 01 | Melihat Onboarding | Melihat 3 layar pengenalan aplikasi | Splash dan Onboarding 1–3 |
| 02 | Registrasi | Membuat akun baru | Login (tab Sign Up) |
| 03 | Login | Masuk dengan email/username dan kata sandi | Login |
| 04 | Login dengan Akun Sosial | Masuk menggunakan akun Google atau Facebook | Login |
| 05 | Melihat Beranda | Melihat kategori dan menu populer | Beranda |
| 06 | Mencari Dessert | Mencari dessert dengan kata kunci | Beranda dan Menu (kolom pencarian) |
| 07 | Melihat Menu | Melihat daftar dessert dalam bentuk grid | Menu |
| 08 | Melihat Detail Dessert | Melihat informasi lengkap satu dessert | Detail Dessert |
| 09 | Menambah ke Keranjang | Memilih ukuran dan jumlah, lalu menambah ke keranjang | Detail Dessert |
| 10 | Menandai Favorit | Menandai dessert dengan ikon hati | Detail Dessert dan Keranjang |
| 11 | Melihat Keranjang | Melihat dessert terpilih dan rincian biaya | Keranjang |
| 12 | Checkout | Memilih alamat, metode pembayaran, dan mengonfirmasi pesanan | Checkout |
| 13 | Melihat Profil | Melihat identitas akun dan menu profil | Profil |
| 14 | Mengubah Profil | Mengubah data akun | Edit Profil |
| 15 | Keluar Akun | Mengakhiri sesi dan kembali ke Login | Profil (Log Out / Logout) |

## 6. Use Case Melihat Onboarding

### Pengertian

Use Case Melihat Onboarding menggambarkan fitur ketika Pelanggan pertama kali membuka Crumella dan melihat layar pengenalan sebelum masuk ke halaman Login.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC01(["Melihat Onboarding"])
    end
    Pelanggan --- UC01
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan baru membuka aplikasi |
| Layar Figma | Splash, Onboarding 1, 2, dan 3 |
| Hasil Akhir | Pelanggan diarahkan ke halaman Login |

### Alur Utama

1. Sistem menampilkan layar Splash berisi logo Crumella dan slogan "Sweet Moments, Better Days".
2. Sistem menampilkan Onboarding 1 ("Choose your dessert!") berisi ajakan memilih kue, pastry, dan camilan manis.
3. Pelanggan menekan **Next** menuju Onboarding 2 ("Get a sweet offer!") berisi penawaran diskon pesanan pertama.
4. Pelanggan menekan **Next** menuju Onboarding 3 ("Track your treat!") berisi informasi pemantauan pesanan.
5. Pelanggan menekan **Next** dan diarahkan ke halaman Login.

### Alur Alternatif

- Pelanggan menekan **Skip** di layar onboarding mana pun: sistem langsung menampilkan halaman Login.

## 7. Use Case Registrasi

### Pengertian

Use Case Registrasi menggambarkan fitur ketika calon pengguna membuat akun baru agar dapat memesan dessert di Crumella.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC02(["Registrasi"])
    end
    Pelanggan --- UC02
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan belum memiliki akun |
| Layar Figma | Login (tab **Sign Up** atau tautan "Not Registered yet? Sign Up") |
| Hasil Akhir | Akun baru tersimpan dan Pelanggan dapat login |

### Alur Utama

1. Pelanggan membuka halaman Login.
2. Pelanggan menekan tab **Sign Up** atau tautan **Sign Up** di bagian bawah.
3. Pelanggan mengisi data akun (nama, email, username, kata sandi, dan nomor telepon, mengacu pada kolom di halaman Edit Profil).
4. Sistem memvalidasi data dan memeriksa apakah email atau username sudah terdaftar.
5. Sistem menyimpan akun baru dan mengarahkan Pelanggan ke halaman Login.

### Alur Alternatif

- Email atau username sudah terdaftar: sistem menampilkan pesan kesalahan dan akun tidak disimpan.
- Ada kolom yang kosong: sistem meminta Pelanggan melengkapi data.

### Catatan

Tampilan form Sign Up belum digambar di Figma (hanya tab-nya). Kolom yang dipakai pada langkah 3 diambil dari halaman Edit Profil dan perlu dikonfirmasi bersama.

## 8. Use Case Login

### Pengertian

Use Case Login menggambarkan fitur ketika Pelanggan memasukkan email atau username dan kata sandi untuk masuk ke Crumella.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC03(["Login"])
    end
    Pelanggan --- UC03
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah memiliki akun |
| Layar Figma | Login (tab **Log In**) |
| Hasil Akhir | Pelanggan masuk ke sistem dan melihat Beranda |

### Alur Utama

1. Pelanggan membuka halaman Login.
2. Pelanggan mengisi kolom **Enter Email Or Username** dan **Password**.
3. Pelanggan dapat menekan ikon mata untuk menampilkan atau menyembunyikan kata sandi.
4. Pelanggan menekan tombol **Log In**.
5. Sistem memeriksa data akun melalui database.
6. Sistem mengarahkan Pelanggan ke halaman Beranda.

### Alur Alternatif

- Email/username atau kata sandi salah: sistem menampilkan pesan kesalahan dan Pelanggan tetap di halaman Login.
- Pelanggan belum punya akun: Pelanggan menekan **Sign Up** untuk menuju Registrasi.

## 9. Use Case Login dengan Akun Sosial

### Pengertian

Use Case Login dengan Akun Sosial menggambarkan fitur tambahan ketika Pelanggan masuk menggunakan akun Google atau Facebook tanpa mengetik kata sandi Crumella. Use case ini bersifat **extend** (opsional) dari Login.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    Sosial(["🔗 Google / Facebook"])
    subgraph Sistem["Crumella"]
        UC03(["Login"])
        UC04(["Login dengan Akun Sosial"])
    end
    Pelanggan --- UC03
    Sosial --- UC04
    UC04 -. extend .-> UC03
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan, Google / Facebook |
| Prasyarat | Pelanggan berada di halaman Login dan memiliki akun Google atau Facebook |
| Layar Figma | Login (setelah teks "OR", dua tombol ikon Facebook dan Google) |
| Hasil Akhir | Pelanggan masuk ke sistem dan melihat Beranda |

### Alur Utama

1. Pelanggan menekan ikon **Facebook** atau **Google** di halaman Login.
2. Sistem meneruskan Pelanggan ke layanan yang dipilih untuk verifikasi akun.
3. Layanan Google/Facebook mengonfirmasi identitas Pelanggan.
4. Sistem mencocokkan atau membuat akun Pelanggan.
5. Sistem mengarahkan Pelanggan ke halaman Beranda.

### Alur Alternatif

- Verifikasi dibatalkan atau gagal: Pelanggan kembali ke halaman Login.

## 10. Use Case Melihat Beranda

### Pengertian

Use Case Melihat Beranda menggambarkan fitur ketika Pelanggan membuka halaman utama untuk melihat kategori dan menu populer.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC05(["Melihat Beranda"])
    end
    Pelanggan --- UC05
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Beranda |
| Hasil Akhir | Kategori, banner, dan Popular Menu tampil |

### Alur Utama

1. Pelanggan berhasil login atau menekan menu **Home** di navigasi bawah.
2. Sistem mengambil data kategori dan menu populer dari database.
3. Halaman Beranda menampilkan sapaan "Choose the Dessert you love", kolom pencarian, banner, deretan kategori, dan **Popular Menu**.
4. Dari Beranda, Pelanggan dapat menuju fitur lain melalui navigasi bawah (Home, Menu, Cart, Profile).

## 11. Use Case Mencari Dessert

### Pengertian

Use Case Mencari Dessert menggambarkan fitur ketika Pelanggan mencari dessert berdasarkan kata kunci.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC06(["Mencari Dessert"])
    end
    Pelanggan --- UC06
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Beranda ("Search for a dessert item") dan Menu ("Search for pastries") |
| Hasil Akhir | Dessert yang sesuai kata kunci ditampilkan |

### Alur Utama

1. Pelanggan menekan kolom pencarian di Beranda atau Menu.
2. Pelanggan mengetik kata kunci, misalnya "brownies".
3. Sistem mencari dessert yang sesuai melalui database.
4. Sistem menampilkan dessert yang ditemukan.

### Alur Alternatif

- Dessert tidak ditemukan: sistem menampilkan keterangan bahwa dessert tidak tersedia.

### Catatan

Halaman hasil pencarian belum digambar di Figma, sehingga bentuk tampilan hasil perlu diputuskan bersama.

## 12. Use Case Melihat Menu

### Pengertian

Use Case Melihat Menu menggambarkan fitur ketika Pelanggan membuka halaman Menu untuk menjelajahi dessert yang tersedia.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC07(["Melihat Menu"])
    end
    Pelanggan --- UC07
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Menu ("Explore our menu — Something sweet is waiting you") |
| Hasil Akhir | Daftar dessert tampil dalam grid dua kolom |

### Alur Utama

1. Pelanggan menekan menu **Menu** di navigasi bawah.
2. Sistem mengambil data dessert dari database.
3. Halaman Menu menampilkan kartu dessert dalam grid dua kolom.
4. Pelanggan menggulir halaman untuk menjelajahi dessert.

## 13. Use Case Melihat Detail Dessert

### Pengertian

Use Case Melihat Detail Dessert menggambarkan fitur ketika Pelanggan memilih satu dessert untuk melihat informasi lengkapnya.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC08(["Melihat Detail Dessert"])
    end
    Pelanggan --- UC08
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login dan berada di Beranda atau Menu |
| Layar Figma | Detail Dessert (contoh: Cloudy Choco Melt) |
| Hasil Akhir | Informasi lengkap dessert tampil |

### Alur Utama

1. Pelanggan menekan salah satu kartu dessert (di Popular Menu atau Menu).
2. Sistem mengambil data dessert dari database.
3. Halaman Detail menampilkan foto, nama, harga, rating dan jumlah review, deskripsi, pilihan ukuran (**Reguler** / **Large**), serta pengatur jumlah.
4. Dari halaman ini Pelanggan dapat menambah dessert ke keranjang atau menandainya sebagai favorit.
5. Pelanggan menekan tombol panah kembali untuk kembali ke halaman sebelumnya.

## 14. Use Case Menambah ke Keranjang

### Pengertian

Use Case Menambah ke Keranjang menggambarkan fitur ketika Pelanggan memilih ukuran dan jumlah dessert, lalu memasukkannya ke keranjang. Use case ini bersifat **extend** dari Melihat Detail Dessert.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC08(["Melihat Detail Dessert"])
        UC09(["Menambah ke Keranjang"])
    end
    Pelanggan --- UC08
    UC09 -. extend .-> UC08
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login dan berada di halaman Detail Dessert |
| Layar Figma | Detail Dessert (pilihan ukuran, pengatur jumlah, tombol di bagian bawah) |
| Hasil Akhir | Dessert beserta ukuran dan jumlahnya tersimpan di keranjang |

### Alur Utama

1. Pelanggan memilih ukuran **Reguler** atau **Large**.
2. Pelanggan mengatur jumlah dengan tombol **+** dan **−** (nilai awal 1).
3. Pelanggan menekan tombol besar di bagian bawah halaman.
4. Sistem memeriksa dan menyimpan data keranjang.
5. Sistem menampilkan konfirmasi bahwa dessert sudah masuk keranjang.

### Catatan

Tombol di bagian bawah halaman Detail pada Figma belum diberi label. Diasumsikan fungsinya adalah menambah ke keranjang.

## 15. Use Case Menandai Favorit

### Pengertian

Use Case Menandai Favorit menggambarkan fitur ketika Pelanggan menandai dessert yang disukai melalui ikon hati. Use case ini bersifat **extend** dari Melihat Detail Dessert.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC08(["Melihat Detail Dessert"])
        UC10(["Menandai Favorit"])
    end
    Pelanggan --- UC08
    UC10 -. extend .-> UC08
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login dan melihat dessert |
| Layar Figma | Detail Dessert (ikon hati di sudut foto) dan Keranjang (ikon hati di tiap kartu) |
| Hasil Akhir | Dessert tersimpan sebagai favorit |

### Alur Utama

1. Pelanggan menekan ikon hati pada dessert.
2. Sistem menyimpan dessert tersebut ke daftar favorit Pelanggan.
3. Tampilan ikon hati berubah menandakan dessert sudah difavoritkan.

### Alur Alternatif

- Pelanggan menekan ikon hati yang sudah aktif: sistem menghapus dessert dari daftar favorit.

### Catatan

Menu **Favourites** di halaman Profil belum memiliki halaman tujuan, sehingga fitur melihat daftar favorit belum dimasukkan.

## 16. Use Case Melihat Keranjang

### Pengertian

Use Case Melihat Keranjang menggambarkan fitur ketika Pelanggan membuka keranjang untuk melihat dessert yang dipilih beserta rincian biayanya.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC11(["Melihat Keranjang"])
    end
    Pelanggan --- UC11
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Keranjang ("Your sweet cart") |
| Hasil Akhir | Daftar dessert dan rincian biaya tampil |

### Alur Utama

1. Pelanggan menekan menu **Cart** di navigasi bawah.
2. Sistem mengambil data keranjang dari database.
3. Halaman Keranjang menampilkan kartu dessert yang dipilih.
4. Sistem menampilkan rincian **Subtotal**, **Delivery**, dan **Total**.
5. Pelanggan dapat menekan ikon hati pada kartu untuk memfavoritkan dessert.
6. Pelanggan dapat menekan tombol **Checkout** untuk melanjutkan.

### Alur Alternatif

- Keranjang kosong: sistem menampilkan keterangan bahwa keranjang belum berisi dessert.

## 17. Use Case Checkout

### Pengertian

Use Case Checkout menggambarkan fitur ketika Pelanggan melanjutkan isi keranjang ke tahap pemesanan, memilih alamat dan metode pembayaran, lalu mengonfirmasi pesanan.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC12(["Checkout"])
        UC11(["Melihat Keranjang"])
    end
    Pelanggan --- UC12
    UC12 -. include .-> UC11
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login dan keranjang berisi dessert |
| Layar Figma | Checkout |
| Hasil Akhir | Pesanan tersimpan dan terkonfirmasi |

### Alur Utama

1. Pelanggan menekan tombol **Checkout** di halaman Keranjang.
2. Sistem mengambil data dessert dari keranjang.
3. Halaman Checkout menampilkan **Shipping Address**, **Payment Method**, dan **Order Summary**.
4. Pelanggan memilih salah satu alamat pengiriman.
5. Pelanggan memilih salah satu metode pembayaran.
6. Pelanggan memeriksa ringkasan pesanan.
7. Pelanggan menekan tombol **Confirmation**.
8. Sistem menyimpan data pesanan ke database.

### Alur Alternatif

- Alamat atau metode pembayaran belum dipilih: sistem meminta Pelanggan melengkapinya.
- Pelanggan menekan panah kembali: Pelanggan kembali ke halaman Keranjang.

### Catatan

Nama metode pembayaran, isi alamat, dan halaman setelah **Confirmation** belum digambar di Figma. Hal ini perlu diputuskan bersama.

## 18. Use Case Melihat Profil

### Pengertian

Use Case Melihat Profil menggambarkan fitur ketika Pelanggan membuka halaman Profil untuk melihat identitas akun dan menu pengaturan.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC13(["Melihat Profil"])
    end
    Pelanggan --- UC13
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Profil (2 varian) |
| Hasil Akhir | Foto, nama, dan menu profil tampil |

### Alur Utama

1. Pelanggan menekan menu **Profile** di navigasi bawah, atau menekan foto profil di Beranda.
2. Sistem mengambil data akun dari database.
3. Halaman Profil menampilkan foto, sapaan "Hi, Sweetie", nama pengguna, dan tombol **Edit Profile**.
4. Halaman Profil menampilkan daftar menu: Favourites, Downloads, Language, Location, Subscription, Clear Cache, Clear History, dan Log Out.

### Catatan

Menu Favourites, Downloads, Language, Location, Subscription, Clear Cache, dan Clear History belum memiliki halaman tujuan, sehingga belum dimasukkan sebagai use case.

## 19. Use Case Mengubah Profil

### Pengertian

Use Case Mengubah Profil menggambarkan fitur ketika Pelanggan memperbarui data akunnya.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC13(["Melihat Profil"])
        UC14(["Mengubah Profil"])
    end
    Pelanggan --- UC14
    UC14 -. include .-> UC13
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login dan berada di halaman Profil |
| Layar Figma | Edit Profil |
| Hasil Akhir | Data akun diperbarui |

### Alur Utama

1. Pelanggan menekan tombol **Edit Profile** di halaman Profil.
2. Sistem menampilkan form berisi **Name**, **E-mail address**, **User Name**, **Password**, dan **Phone number**.
3. Pelanggan mengubah data yang diinginkan. Kolom Password dapat ditampilkan atau disembunyikan dengan ikon mata.
4. Sistem memvalidasi data.
5. Sistem menyimpan perubahan ke database.

### Alur Alternatif

- Ada kolom yang kosong atau tidak valid: sistem menampilkan pesan kesalahan dan data tidak disimpan.
- Email atau username sudah dipakai akun lain: sistem menampilkan pesan kesalahan.

### Catatan

Tombol simpan belum digambar di halaman Edit Profil pada Figma. Perlu ditambahkan agar langkah 5 dapat dilakukan.

## 20. Use Case Keluar Akun

### Pengertian

Use Case Keluar Akun menggambarkan fitur ketika Pelanggan keluar dari akun Crumella.

### Diagram

```mermaid
flowchart LR
    Pelanggan(["👤 Pelanggan"])
    subgraph Sistem["Crumella"]
        UC15(["Keluar Akun"])
    end
    Pelanggan --- UC15
```

### Deskripsi Use Case

| Bagian | Keterangan |
|---|---|
| Aktor | Pelanggan |
| Prasyarat | Pelanggan sudah login |
| Layar Figma | Profil (menu **Log Out** dan tombol **Logout**) |
| Hasil Akhir | Sesi berakhir dan Pelanggan kembali ke halaman Login |

### Alur Utama

1. Pelanggan membuka halaman Profil.
2. Pelanggan menekan menu **Log Out** atau tombol **Logout**.
3. Sistem mengakhiri sesi Pelanggan.
4. Sistem mengarahkan Pelanggan ke halaman Login.

### Catatan

Di Figma terdapat dua pintu keluar (menu Log Out dan tombol Logout) yang fungsinya sama. Sebaiknya dipilih salah satu agar tidak membingungkan.

## 21. Hubungan Antar Use Case

| Hubungan | Jenis | Penjelasan |
|---|---|---|
| Login dengan Akun Sosial → Login | extend | Login lewat Google/Facebook adalah cara tambahan (opsional) selain email dan kata sandi |
| Menambah ke Keranjang → Melihat Detail Dessert | extend | Menambah ke keranjang hanya dilakukan jika Pelanggan memutuskan memesan dari halaman Detail |
| Menandai Favorit → Melihat Detail Dessert | extend | Menandai favorit adalah tindakan opsional saat melihat dessert |
| Checkout → Melihat Keranjang | include | Checkout selalu dimulai dari dan memakai isi keranjang |
| Mengubah Profil → Melihat Profil | include | Edit Profil selalu diakses dari halaman Profil |
| Syarat login | — | Use case 05 sampai 15 hanya dapat dilakukan setelah Login |
| Fitur sebelum login | — | Onboarding, Registrasi, dan Login dapat dibuka tanpa login |

## 22. Hal yang Belum Dimasukkan

Hal berikut ada di Figma, tetapi belum memiliki halaman atau penjelasan yang jelas, sehingga perlu diputuskan bersama sebelum ditambahkan:

1. Pemantauan pesanan ("Track your treat!" di Onboarding 3), belum ada halaman pelacakan.
2. Diskon pesanan pertama ("Get a sweet offer!" di Onboarding 2), belum ada halaman atau kolom voucher.
3. Ikon menu (tiga garis) di pojok kiri atas Beranda.
4. Kotak kategori di Beranda (belum berlabel dan belum ada halaman kategori).
5. Halaman hasil pencarian.
6. Menu Profil lainnya: Favourites, Downloads, Language, Location, Subscription, Clear Cache, dan Clear History.
7. Ikon terang/gelap di pojok kanan atas varian kedua halaman Profil.
8. Halaman setelah **Confirmation** (konfirmasi pesanan atau pembayaran).
9. Form Sign Up dan tombol simpan pada Edit Profil.

## 23. Catatan Perbaikan Teks pada Desain

Beberapa teks pada desain Figma perlu dirapikan sebelum masuk tahap pengkodean:

| Lokasi | Teks di Desain | Seharusnya |
|---|---|---|
| Onboarding 1 | Chosee your dessert! | Choose your dessert! |
| Onboarding 2 | prsanan; diskon special | pesanan; diskon spesial |
| Onboarding 3 | depan pint | depan pintu |
| Login | Paassword | Password |
| Login | Not Regisrated yet? | Not Registered yet? |
| Menu | waiting you | waiting for you |
| Detail Dessert | RP 20.0000 | Rp 20.000 |
| Detail Dessert | Select Sice; Reguler | Select Size; Regular |
| Checkout | Chekout; Shipping Adress; Order Sumarry | Checkout; Shipping Address; Order Summary |
| Profil | Clear Cashe | Clear Cache |
| Navigasi bawah | cart / Cart (tidak seragam) | Cart |

## 24. Kesimpulan

Use Case Diagram Crumella memiliki satu aktor utama, yaitu Pelanggan, satu aktor pendukung (Google / Facebook), dan 15 use case: Melihat Onboarding, Registrasi, Login, Login dengan Akun Sosial, Melihat Beranda, Mencari Dessert, Melihat Menu, Melihat Detail Dessert, Menambah ke Keranjang, Menandai Favorit, Melihat Keranjang, Checkout, Melihat Profil, Mengubah Profil, dan Keluar Akun.

Setiap use case dipetakan ke layar pada desain Figma. Dengan adanya Use Case Diagram ini, cakupan sistem lebih mudah dipahami oleh Kelompok 7 dan dapat menjadi acuan dalam pengembangan, pengujian, serta perbaikan Crumella.

![Uploading<svg width="100%" viewBox="0 0 646.5 990" role="img" style="" xmlns="http://www.w3.org/2000/svg" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWkGp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZqanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphZWMyMDZmZS0yOTU2LTQ0Y2QtYTgyNC01YzU2NzE3ZTM0MTQAAAADf2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaPwo6sPEbCn/LSzTpGgrMQ0AAABwY2JvcqNscmVsYXRpb25zaGlwaHBhcmVudE9maWRjOmZvcm1hdG1pbWFnZS9zdmcreG1samluc3RhbmNlSUR4LHhtcDppaWQ6Yjk4MDdjMDctYzZmZS00MmJhLWE0MzgtNDFjZWQ1YjljNDA5AAABzmp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoO2xd+YULIrNIf9dM67ksSQAAAYVjYm9yoWdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg5+t8J+I2SIzpvQU9rIj1ZiZS6yJAwyoyqb5ljVQlXRCkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRtc29mdHdhcmVBZ2VudKFkbmFtZWZDbGF1ZGVqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMuAAAAxGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2hwNOj9QyUChuiQ+y3iOxQGAAAAfGNib3KlamV4Y2x1c2lvbnOBomVzdGFydBigZmxlbmd0aBkeGGRuYW1lbmp1bWJmIG1hbmlmZXN0Y2FsZ2ZzaGEyNTZkaGFzaFggM0vx6FUr9oJB7KSbx03uw8cCC8Kkx7V4MbQyJ8Um0ANjcGFkSQAAAAAAAAAAAAAAAmRqdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACNWNib3Kmamluc3RhbmNlSUR4LHhtcDppaWQ6MTJhMThkY2MtZGY4ZC00M2E2LTgzZTktYTI0YjcwZDRiZjJjdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lc0FudGhyb3BpYyBDbGF1ZGUuYWlndmVyc2lvbmUxLjAuMHdvcmcuY29udGVudGF1dGguYzJwYV9yc2YwLjkwLjBpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmFlYzIwNmZlLTI5NTYtNDRjZC1hODI0LTVjNTY3MTdlMzQxNC9jMnBhLnNpZ25hdHVyZXJjcmVhdGVkX2Fzc2VydGlvbnOComN1cmx4KnNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuYWN0aW9ucy52MmRoYXNoWCCj65DNuW2Aq3waXsdw1mMFuOenLpNd25F6t2mKE/oXzaJjdXJseClzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmhhc2guZGF0YWRoYXNoWCAwhwFYee3oJMu1arwc8O2lNmg/15GJgJXpFx4TzEJQFnNnYXRoZXJlZF9hc3NlcnRpb25zgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg5+t8J+I2SIzpvQU9rIj1ZiZS6yJAwyoyqb5ljVQlXRBjYWxnZnNoYTI1NgAAEDhqdW1iAAAAKGp1bWRjMmNzABEAEIAAAKoAOJtxA2MycGEuc2lnbmF0dXJlAAAAEAhjYm9y0oRZAhKiASYYIVkCCjCCAgYwggGNoAMCAQICFEDloAruwjnQvriD+gZCBT1nVRMAMAoGCCqGSM49BAMDMEkxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMS4wLAYDVQQDEyVBbnRocm9waWMgQ29udGVudCBDcmVkZW50aWFscyBSb290IENBMB4XDTI2MDgwNzE4NDM1NloXDTI4MDgwNjE5NDM1NlowRDEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxKTAnBgNVBAMTIEFudGhyb3BpYyBDbGF1ZGUgQ29udGVudCBTaWduaW5nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEmHoKa8tQGAUU1TS9QqU5W0Tp2N3XsvlK7BfQt6YWKwEzd2R3/dzKPEUDdCjlLjp9fT+KFjRVnuZ9v0oXvTe3k6NYMFYwDgYDVR0PAQH/BAQDAgeAMBUGA1UdJQQOMAwGCisGAQQBg+heAgEwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBTOUeIEgU5kWyP448TPmj6cwddcwjAKBggqhkjOPQQDAwNnADBkAjAxcx0UngF60stVjs5G4T2eiptsBk5mf9oCtfJPAUBl8qs/PEXa8+gk1/X5QJ2DVcYCMHBfXN31YapiSqYvlIWrDVDJKOvXMl+kkz37Wt0PBI8sw486Mq6JeOhT+lRR4b1HCaFjcGFkWQ2eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9lhAoHfOXMnWRI2ryUFLEfXoMJIvTCjxcSlqlAvdFIeHsVAZX4qgTENf1uiCjONxxl2bycUChGLt3XT9h2kaT4tekQ==</c2pa:manifest></metadata>
<title style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">Use case diagram Crumella</title>
<desc style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">Pelanggan berhubungan dengan 16 use case dalam sistem Crumella. Google/Facebook terhubung ke Login dengan akun sosial, dan Payment gateway terhubung ke Pilih metode pembayaran.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker><mask id="imagine-text-gaps-fk27bf" maskUnits="userSpaceOnUse"><rect x="0" y="0" width="646.5" height="990" fill="white"/><rect x="255.95626831054688" y="30.400001525878906" width="117.5229263305664" height="21.600000381469727" fill="black" rx="2"/><rect x="7.09375" y="524.4000244140625" width="76.1319351196289" height="21.600000381469727" fill="black" rx="2"/><rect x="509.7125244140625" y="302.3999938964844" width="131.2499008178711" height="21.600000381469727" fill="black" rx="2"/><rect x="512.7875366210938" y="807.4000244140625" width="125.0829086303711" height="21.600000381469727" fill="black" rx="2"/><rect x="315.20001220703125" y="220.40000915527344" width="58.817970275878906" height="19.199999809265137" fill="black" rx="2"/><rect x="315.20001220703125" y="500.3999938964844" width="58.817970275878906" height="19.199999809265137" fill="black" rx="2"/><rect x="315.20001220703125" y="668.4000244140625" width="60.60595703125" height="19.199999809265137" fill="black" rx="2"/><rect x="315.20001220703125" y="724.4000244140625" width="60.60595703125" height="19.199999809265137" fill="black" rx="2"/><rect x="315.20001220703125" y="836.4000244140625" width="60.60595703125" height="19.199999809265137" fill="black" rx="2"/><rect x="448.20001220703125" y="528.4000244140625" width="58.817970275878906" height="19.199999809265137" fill="black" rx="2"/><rect x="241.96875" y="79.20000457763672" width="136.86387634277344" height="21.600000381469727" fill="black" rx="2"/><rect x="273.4437561035156" y="135.1999969482422" width="73.11250305175781" height="21.600000381469727" fill="black" rx="2"/><rect x="288.1499938964844" y="191.1999969482422" width="43.70000076293945" height="21.600000381469727" fill="black" rx="2"/><rect x="224.7312469482422" y="247.1999969482422" width="170.53750610351562" height="21.600000381469727" fill="black" rx="2"/><rect x="252.34375" y="303.20001220703125" width="115.65888977050781" height="21.600000381469727" fill="black" rx="2"/><rect x="252.05624389648438" y="359.20001220703125" width="116.4249038696289" height="21.600000381469727" fill="black" rx="2"/><rect x="261.1000061035156" y="415.20001220703125" width="97.80000305175781" height="21.600000381469727" fill="black" rx="2"/><rect x="234.18125915527344" y="471.20001220703125" width="152.173828125" height="21.600000381469727" fill="black" rx="2"/><rect x="225.88125610351562" y="527.2000122070312" width="169.0498504638672" height="21.600000381469727" fill="black" rx="2"/><rect x="250.22500610351562" y="583.2000122070312" width="120.08589172363281" height="21.600000381469727" fill="black" rx="2"/><rect x="247.3125" y="639.2000122070312" width="126.181884765625" height="21.600000381469727" fill="black" rx="2"/><rect x="273.65625" y="695.2000122070312" width="73.22798156738281" height="21.600000381469727" fill="black" rx="2"/><rect x="223.3249969482422" y="751.2000122070312" width="173.35000610351562" height="21.600000381469727" fill="black" rx="2"/><rect x="261.875" y="807.2000122070312" width="96.25" height="21.600000381469727" fill="black" rx="2"/><rect x="251.53750610351562" y="863.2000122070312" width="116.92500305175781" height="21.600000381469727" fill="black" rx="2"/><rect x="267.4250183105469" y="919.2000122070312" width="85.1500015258789" height="21.600000381469727" fill="black" rx="2"/></mask></defs>

<rect x="120" y="20" width="390" height="950" rx="4" stroke-width="0.5" style="fill:rgb(252, 252, 251);stroke:color(srgb 0.0431373 0.0431373 0.0431373 / 0.2);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="315" y="46" text-anchor="middle" style="fill:rgb(11, 11, 11);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:500;text-anchor:middle;dominant-baseline:auto">Sistem Crumella</text>

<g stroke="var(--s)" stroke-width="0.8" fill="none" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<line x1="65" y1="468" x2="202" y2="90" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="146" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="202" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="314" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="370" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="426" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="482" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="650" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="706" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="818" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="874" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="65" y1="468" x2="202" y2="930" mask="url(#imagine-text-gaps-fk27bf)" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="557" y1="254" x2="418" y2="258" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="557" y1="759" x2="418" y2="762" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:0.8px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
</g>

<g stroke="var(--s)" stroke-width="1.2" fill="none" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<circle cx="45" cy="445" r="10" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="45" y1="455" x2="45" y2="490" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="25" y1="468" x2="65" y2="468" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="45" y1="490" x2="30" y2="518" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="45" y1="490" x2="60" y2="518" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<circle cx="575" cy="235" r="10" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="245" x2="575" y2="272" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="557" y1="254" x2="593" y2="254" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="272" x2="562" y2="296" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="272" x2="588" y2="296" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<circle cx="575" cy="740" r="10" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="750" x2="575" y2="777" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="557" y1="759" x2="593" y2="759" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="777" x2="562" y2="801" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="575" y1="777" x2="588" y2="801" style="fill:none;stroke:rgb(82, 81, 78);color:rgb(11, 11, 11);stroke-width:1.2px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
</g>
<text x="45" y="540" text-anchor="middle" style="fill:rgb(11, 11, 11);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:500;text-anchor:middle;dominant-baseline:auto">Pelanggan</text>
<text x="575" y="318" text-anchor="middle" style="fill:rgb(11, 11, 11);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:500;text-anchor:middle;dominant-baseline:auto">Google / Facebook</text>
<text x="575" y="823" text-anchor="middle" style="fill:rgb(11, 11, 11);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:500;text-anchor:middle;dominant-baseline:auto">Payment gateway</text>

<g stroke-dasharray="4 3" fill="none" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<line x1="310" y1="241" x2="310" y2="219" stroke-dasharray="4 3" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="310" y1="521" x2="310" y2="499" stroke-dasharray="4 3" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="310" y1="689" x2="310" y2="667" stroke-dasharray="4 3" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="310" y1="723" x2="310" y2="745" stroke-dasharray="4 3" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<line x1="310" y1="857" x2="310" y2="835" stroke-dasharray="4 3" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<path d="M418 594 L448 594 L448 482 L420 482" stroke-dasharray="4 3" fill="none" marker-end="url(#arrow)" style="fill:none;stroke:rgb(137, 135, 129);color:rgb(11, 11, 11);stroke-width:1.5px;stroke-dasharray:4px, 3px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
</g>
<text x="320" y="230" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«extend»</text>
<text x="320" y="510" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«extend»</text>
<text x="320" y="678" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«include»</text>
<text x="320" y="734" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«include»</text>
<text x="320" y="846" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«include»</text>
<text x="453" y="538" dominant-baseline="central" style="fill:rgb(82, 81, 78);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:12px;font-weight:400;text-anchor:start;dominant-baseline:central">«extend»</text>

<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="90" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="90" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat onboarding</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="146" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="146" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Registrasi</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="202" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="202" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Login</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="258" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="258" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Login dengan akun sosial</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="314" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="314" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat beranda</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="370" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="370" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Mencari dessert</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="426" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="426" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat menu</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="482" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="482" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat detail dessert</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="538" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="538" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Menambah ke keranjang</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="594" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="594" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Menandai favorit</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="650" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="650" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat keranjang</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="706" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="706" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Checkout</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="762" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="762" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Pilih metode pembayaran</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="818" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="818" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Melihat profil</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="874" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="874" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Mengubah profil</text>
</g>
<g style="fill:rgb(0, 0, 0);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">
<ellipse cx="310" cy="930" rx="108" ry="17" stroke-width="0.5" style="fill:rgb(250, 236, 231);stroke:rgb(153, 60, 29);color:rgb(11, 11, 11);stroke-width:0.5px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
<text x="310" y="930" text-anchor="middle" dominant-baseline="central" style="fill:rgb(113, 43, 19);stroke:none;color:rgb(11, 11, 11);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:anthropic-sans, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:14px;font-weight:400;text-anchor:middle;dominant-baseline:central">Keluar akun</text>
</g>
</svg> use_case_diagram_crumella.svg…]()

