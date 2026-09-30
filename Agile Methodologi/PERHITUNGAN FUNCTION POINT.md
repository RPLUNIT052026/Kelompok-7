**PERHITUNGAN FUNCTION POINT & PRODUCT BACKLOG**

**Crumella : Website Penjualan Cake & Dessert**

- **Perhitungan Function Point (FP)**

Dalam hal ini FP untuk mengestimasi ukuran atau kompleksitas Website Crumella berdasarrkan ruang lingkup yang tercantup di Charter (Splash Screen, Onboarding, Login/Sign Up, Home, Search Menu, Detail Produk, Checkout, Payment, dan Profil), sebelum development dimulai.

- **Identifikasi Komponen Fungsional**

| No  | Komponen                                                         | Tips                          | Kompleksitas | Bobot |
| --- | ---------------------------------------------------------------- | ----------------------------- | ------------ | ----- |
| 1.  | Sign Up / Login pengguna                                         | External Input (EI)           | Low          | 3     |
| 2.  | Tambah produk ke keranjang (pilih beberapa pesanan sekaligus)    | External Input (EI)           | Low          | 3     |
| 3.  | Checkout & pembuatan pesanan                                     | External Input (EI)           | Average      | 4     |
| 4.  | Payment (pilih metode & konfirmasi pembayaran)                   | External Input (EI)           | Average      | 4     |
| 5.  | Ubah data profil pengguna                                        | External Input (EI)           | Low          | 3     |
| 6.  | Tampilan Home & daftar produk (Dessert, Cake, Brownies, Minuman) | External Output (EO)          | Average      | 5     |
| 7.  | Notifikasi status pesanan (dibayar, diproses, selesai)           | External Output (EO)          | Average      | 5     |
| 8.  | Ringkasan pesanan / bukti transaksi                              | External Output (EO)          | Average      | 5     |
| 9.  | Search Menu (cari & filter berdasarkan kategori, rasa, harga)    | External Inquiry (EQ)         | Low          | 3     |
| 10. | Detail Produk (foto, rasa, harga)                                | External Inquiry (EQ)         | Low          | 3     |
| 11. | Tampilan Profil & riwayat pesanan                                | External Inquiry (EQ)         | Low          | 3     |
| 12. | Data produk (Dessert, Cake, Brownies, Minuman)                   | Internal Logical File (ILF)   | Low          | 7     |
| 13. | Data pengguna                                                    | Internal Logical File (ILF)   | Low          | 7     |
| 14. | Data pesanan, keranjang & transaksi                              | Internal Logical File (ILF)   | Average      | 10    |
| 15. | Integrasi layanan pembayaran eksternal                           | External Interface File (EIF) | Average      | 7     |

- **Tabel Ringkas Unadjusted Function Point (FP)**

| Tipe Komponen                 | Jumlah | Bobot Rata-Rata | Total |
| ----------------------------- | ------ | --------------- | ----- |
| External Input (EI)           | 5      | 3,4             | 17    |
| External Output (EO)          | 3      | 5               | 15    |
| External Inquiry (EQ)         | 3      | 3               | 9     |
| Internal Logical File (ILF)   | 3      | 8               | 24    |
| External Interface File (EIF) | 1      | 7               | 7     |
| Total UFP                     |        |                 | 72    |

- **Value Adjustment Factor (VAF) : Sederhana**

VAF diasumsikan netral (VAF = 1.0), karena belum ada 14 faktor kompleksitas teknis yang dinilai detail. Jika ingin lebih presisi, VAF dapat dihitung dari 14 General System Characteristics (GSC), skala 0-5 tiap faktor. Rumus: FP = UFP x VAF FP = 72 x 1.0 = 72 Catatan: Angka-angka di atas adalah estimasi awal. Sesuaikan kembali dengan fitur final yang disepakati Kelompok 7 sebelum development dimulai.

- **Product Backlog (Keseluruhan Proyek)**

Daftar fitur/User Stories Website Crumella yang direncanakan untuk seluruh proyek (Sp1-Sp5), mengikuti alur utama: Buka Website, Login, Search Produk, Detail Produk, Checkout, Payment.

| ID   | User Story                                                                                                                                       | Prioritas |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| US01 | Sebagai pembeli, saya ingin melihat halaman Home berisi daftar Dessert, Cake, Brownies, dan Minuman beserta foto dan harganya agar mudah memilih | Tinggi    |
| US02 | Sebagai pembeli, saya ingin mencari menu (Search Menu) agar cepat menemukan cake/dessert favorit tanpa harus repot mencari                       | Tinggi    |
| US03 | Sebagai pembeli, saya ingin melihat detail produk (rasa, harga, dan tampilan) secara lengkap agar tidak perlu bertanya satu per satu ke penjual  | Tinggi    |
| US04 | Sebagai pembeli, saya ingin mendaftar (Sign Up) dan login agar data dan pesanan saya tersimpan                                                   | Sedang    |
| US05 | Sebagai pembeli, saya ingin menambahkan beberapa produk ke keranjang lalu melakukan checkout sekaligus                                           | Tinggi    |
| US06 | Sebagai pembeli, saya ingin melakukan pembayaran (Payment) dengan mudah setelah checkout                                                         | Tinggi    |
| US07 | Sebagai pembeli, saya ingin mengelola halaman Profil agar data diri saya tetap terbarui                                                          | Sedang    |
| US08 | Sebagai pengguna baru, saya ingin melihat splash screen dan Onboarding agar cepat memahami alur penggunaan website                               | Rendah    |
| US09 | Sebagai pembeli, saya ingin melihat riwayat pesanan saya                                                                                         | Sedang    |
| SU10 | Sebagai pembeli, saya ingin menerima notifikasi status pesanan                                                                                   | Sedang    |

- **Sprint 1 Backlog**

Target kerja spesifik Sprint 1 sesuai batasan proyek pada Charter: perancangan UX/UI, perencanaan sistem, dan struktur website (bukan development fitur):

| **Task**                           | **Deskripsi**                                                                                                      | **Tanggung Jawab**                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Project Charter                    | Menyusun latar belakang, tujuan, target penggunaan, ruang lingkup, alur utama, dan indikator keberhasilan Crumella | Kelompok 7                                             |
| Perhitungan Function Point         | Estimasi ukuran aplikasi berdasarkan fitur yang direncanakan                                                       | Yuwan Shabrina (Agile Methodology)                     |
| Product Backlog & Sprint 1 Backlog | Menyusun daftar User Stories dan target Sprint 1                                                                   | Yuwan Shabrina (Agile Methodology)                     |
| Rancangan UX/UI                    | Membuat desain Figma untuk halaman utama, Search Menu, Detail Produk, Checkout, dan Payment                        | Raisa Salsabilla (UX/UI Design)                        |
| Rancangan Sistem                   | Membuat flowchart/diagram arsitektur/ERD dan daftar fitur yang siap dikerjakan                                     | Faradilatul Najwa (Project Setup) bersama anggota lain |
| Inisialisasi Kode Proyek           | Setup struktur folder & boilerplate awal website                                                                   | Faradilatul Najwa (Project Setup)                      |