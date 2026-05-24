/**
 * A-Mart KolMas - Main JavaScript
 * Mini Market Terpercaya Sejak 2010
 */

// ============ MOBILE MENU TOGGLE ============
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburgerBtn || !navMenu) return;
    
    // Toggle menu saat hamburger diklik
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Ubah ikon hamburger
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Tutup menu saat link diklik (mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Tutup menu saat klik di luar area menu
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || hamburgerBtn.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// ============ UPDATE TAHUN COPYRIGHT OTOMATIS ============
function updateCopyrightYear() {
    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${currentYear} A-Mart KolMas. All Rights Reserved. | Mini Market Terpercaya Sejak 2010`;
    }f
}

// ============ TOMBOL PESAN - KLIK HANDLER ============
function initOrderButtons() {
    const btnBeliElements = document.querySelectorAll('.btn-beli');
    
    btnBeliElements.forEach(button => {
        button.addEventListener('click', function() {
            // Ambil nama produk dari card
            const produkCard = this.closest('.produk-card');
            const namaProduk = produkCard.querySelector('h4').textContent;
            
            // Ambil harga (harga diskon atau normal)
            let hargaProduk;
            const hargaDiskon = produkCard.querySelector('.harga-diskon');
            const hargaNormal = produkCard.querySelector('.harga-normal');
            
            if (hargaDiskon) {
                hargaProduk = hargaDiskon.textContent;
            } else if (hargaNormal) {
                hargaProduk = hargaNormal.textContent;
            } else {
                hargaProduk = 'Harga tidak tersedia';
            }
            
            // Untuk versi 1.0: alert dulu, nanti upgrade ke WhatsApp/Order System
            alert(`🛒 Produk: ${namaProduk}\n💰 Harga: ${hargaProduk}\n\nFitur order online sedang dalam pengembangan!\nSilakan kunjungi toko kami langsung atau hubungi via WhatsApp.`);
            
            // Log ke console untuk debugging
            console.log(`User klik pesan: ${namaProduk} - ${hargaProduk}`);
        });
    });
}

// ============ ANIMASI SCROLL HALUS UNTUK NAVIGASI ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip untuk link yang hanya "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Hitung offset untuk navbar sticky
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============ DETEKSI VIEWPORT UNTUK ANIMASI (OPSIONAL) ============
function initScrollAnimation() {
    // Bisa ditambahkan nanti untuk animasi fade-in saat scroll
    // Ini placeholder untuk pengembangan selanjutnya
    console.log('A-Mart KolMas - Website siap! 🛒');
}

// ============ INISIALISASI SEMUA FUNGSI ============
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    updateCopyrightYear();
    initOrderButtons();
    initSmoothScroll();
    initScrollAnimation();
});

// ============ HANDLE ERROR GLOBAL ============
window.addEventListener('error', function(e) {
    console.error('Website error:', e.message);
    // Bisa ditambahkan error reporting service nanti
});
