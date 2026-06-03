<?php
// Panggil koneksi database (kalau diperlukan nanti)
// require_once 'config/database.php';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📍 Lokasi - A-Mart Kolmas Cimahi</title>
    
    <!-- Font Google -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/alamat.css">
</head>
<body>
    
    <!-- ============ NAVIGASI (SAMA DENGAN INDEX) ============ -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.php" class="nav-logo">
                <i class="fas fa-store"></i>
                <div class="nav-logo-text">
                    <h2>A-Mart Kolmas</h2>
                    <span>Mini Market Terpercaya</span>
                </div>
            </a>
            
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.php">Beranda</a></li>
                <li><a href="index.php#produk">Produk</a></li>
                <li><a href="index.php#promo">Promo</a></li>
                <li><a href="alamat.php" class="active">📍 Alamat</a></li>
                <li><a href="index.php#kontak">Kontak</a></li>
            </ul>
            
            <div class="hamburger" id="hamburgerBtn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    
    <!-- ============ KONTEN HALAMAN ALAMAT ============ -->
    <main class="alamat-container">
        
        <!-- Breadcrumb -->
        <div class="breadcrumb">
            <a href="index.php"><i class="fas fa-home"></i> Beranda</a>
            <span><i class="fas fa-chevron-right"></i></span>
            <span>📍 Alamat</span>
        </div>
        
        <!-- Header -->
        <div class="alamat-header">
            <h1><i class="fas fa-map-marker-alt"></i> Lokasi Toko Kami</h1>
            <p>Temukan A-Mart Kolmas Cimahi dengan mudah melalui peta dan panduan navigasi di bawah ini</p>
        </div>
        
        <!-- Grid: Peta + Info -->
        <div class="alamat-grid">
            
            <!-- Peta Google Maps -->
            <div class="peta-wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3620368573944!2d107.54256977499054!3d-6.858900348037254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e14d0b79f8e7%3A0x3d9e0c2b6b7e2e0f!2sJl.%20Kolonel%20Masturi%20No.212%2C%20Cipageran%2C%20Kec.%20Cimahi%20Utara%2C%20Kota%20Cimahi%2C%20Jawa%20Barat%2040551!5e0!3m2!1sid!2sid!4v1716901234567!5m2!1sid!2sid" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Lokasi A-Mart Kolmas Cimahi">
                </iframe>
            </div>
            
            <!-- Info Alamat -->
            <div class="alamat-info">
                
                <!-- Kartu Alamat -->
                <div class="info-card">
                    <h3><i class="fas fa-map-pin"></i> Alamat Lengkap</h3>
                    <p>
                        <span class="highlight-text">A-Mart Kolmas Cimahi</span><br>
                        Jl. Kolonel Masturi No.212, Cipageran<br>
                        Kec. Cimahi Utara, Kota Cimahi<br>
                        Jawa Barat 40551, Indonesia
                    </p>
                    <button class="btn-navigasi" style="width:100%; margin-top:15px; background:#795548;" onclick="copyAlamat()">
                        <i class="fas fa-copy"></i> Salin Alamat
                    </button>
                </div>
                
                <!-- Kartu Kontak -->
                <div class="info-card">
                    <h3><i class="fas fa-phone"></i> Kontak Cepat</h3>
                    <p>
                        <i class="fab fa-whatsapp" style="color:#25D366;"></i> 
                        <span class="highlight-text">0828-1122-220723</span><br>
                        <small style="color:var(--teks-sedang);">Klik untuk chat langsung via WhatsApp</small>
                    </p>
                    <a href="https://wa.me/628281122220723" target="_blank" class="btn-navigasi" style="width:100%; margin-top:15px; background:#25D366; text-align:center;">
                        <i class="fab fa-whatsapp"></i> Chat WhatsApp
                    </a>
                </div>
                
                <!-- Kartu Navigasi -->
                <div class="info-card navigasi-section">
                    <h3><i class="fas fa-directions"></i> Panduan Navigasi</h3>
                    <p style="margin-bottom:15px; font-size:13px; color:var(--teks-sedang);">
                        Klik salah satu tombol di bawah untuk panduan menuju toko kami:
                    </p>
                    <div class="navigasi-buttons">
                        <button class="btn-navigasi btn-google" onclick="bukaGoogleMaps()">
                            <i class="fab fa-google"></i> Google Maps
                        </button>
                        <button class="btn-navigasi btn-apple" onclick="bukaAppleMaps()">
                            <i class="fab fa-apple"></i> Apple Maps
                        </button>
                        <button class="btn-navigasi btn-waze" onclick="bukaWaze()">
                            <i class="fab fa-waze"></i> Waze
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Jam Operasional -->
        <div class="jam-operasional">
            <h3>🕒 Jam Operasional</h3>
            <div class="jam-list">
                <div class="jam-item">
                    <div class="hari">Senin - Jumat</div>
                    <div class="waktu">07:00 - 21:00 WIB</div>
                </div>
                <div class="jam-item">
                    <div class="hari">Sabtu - Minggu</div>
                    <div class="waktu">07:00 - 21:00 WIB</div>
                </div>
                <div class="jam-item">
                    <div class="hari">Hari Libur Nasional</div>
                    <div class="waktu">Tetap Buka 🎉</div>
                </div>
            </div>
        </div>
        
    </main>
    
    <!-- ============ FOOTER (SAMA DENGAN INDEX) ============ -->
    <footer class="footer" id="kontak">
        <div class="footer-container">
            <div class="footer-col">
                <h3>🏪 A-Mart Kolmas Cimahi</h3>
                <p>Mini market terpercaya sejak 2010. Menyediakan kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.</p>
            </div>
            <div class="footer-col">
                <h3>Jam Operasional</h3>
                <ul>
                    <li><i class="fas fa-clock"></i> Senin - Minggu</li>
                    <li><i class="fas fa-door-open"></i> 07:00 - 21:00 WIB</li>
                    <li><i class="fas fa-calendar"></i> Termasuk Hari Libur</li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Hubungi Kami</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Jl. Kolonel Masturi No.212, Cipageran</li>
                    <li><i class="fas fa-building"></i> Kec. Cimahi Utara, Kota Cimahi</li>
                    <li><i class="fas fa-map-pin"></i> Jawa Barat 40551, Indonesia</li>
                    <li><i class="fab fa-whatsapp"></i> 0828-1122-220723</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p id="footerCopyright">&copy; 2026 A-Mart Kolmas Cimahi. All Rights Reserved.</p>
        </div>
    </footer>
    
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/628281122220723" class="wa-float" target="_blank" title="Chat via WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    
    <!-- JavaScript -->
    <script src="js/script.js"></script>
    <script src="js/alamat.js"></script>
</body>
</html>
