/**
 * A-Mart Kolmas Cimahi - Keranjang Belanja & Checkout WhatsApp
 * Mini Market Terpercaya Sejak 2010
 */

// ============ DATA KERANJANG ============
let keranjang = [];

// ============ MOBILE MENU ============
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburgerBtn || !navMenu) return;
    
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
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

// ============ UPDATE COPYRIGHT YEAR ============
function updateCopyrightYear() {
    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.innerHTML = `&copy; ${currentYear} A-Mart Kolmas Cimahi. All Rights Reserved. | Mini Market Terpercaya Sejak 2010`;
    }
}

// ============ TAMBAH KE KERANJANG ============
function tambahKeKeranjang(button) {
    const card = button.closest('.produk-card');
    const id = card.getAttribute('data-id');
    const nama = card.getAttribute('data-nama');
    const harga = parseInt(card.getAttribute('data-harga'));
    const satuan = card.getAttribute('data-satuan');
    
    // Cek apakah produk sudah ada di keranjang
    const existingIndex = keranjang.findIndex(item => item.id === id);
    
    if (existingIndex > -1) {
        // Produk sudah ada, tambah quantity
        keranjang[existingIndex].qty += 1;
    } else {
        // Produk baru, tambahkan ke array
        keranjang.push({
            id: id,
            nama: nama,
            harga: harga,
            satuan: satuan,
            qty: 1
        });
    }
    
    // Update tampilan keranjang
    renderKeranjang();
    
    // Animasi tombol
    button.innerHTML = '<i class="fas fa-check"></i> Ditambahkan';
    button.style.background = '#43A047';
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus"></i> Tambah';
        button.style.background = '';
    }, 1000);
}

// ============ RENDER KERANJANG ============
function renderKeranjang() {
    const keranjangItems = document.getElementById('keranjangItems');
    const keranjangTotal = document.getElementById('keranjangTotal');
    const keranjangBadge = document.getElementById('keranjangBadge');
    
    if (!keranjangItems || !keranjangTotal) return;
    
    // Update badge
    const totalItems = keranjang.reduce((sum, item) => sum + item.qty, 0);
    if (keranjangBadge) {
        keranjangBadge.textContent = totalItems;
        keranjangBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Render items
    if (keranjang.length === 0) {
        keranjangItems.innerHTML = `
            <div class="keranjang-kosong">
                <i class="fas fa-shopping-basket"></i>
                <p>Keranjang masih kosong</p>
                <small>Tambahkan produk pilihanmu!</small>
            </div>
        `;
    } else {
        keranjangItems.innerHTML = keranjang.map((item, index) => `
            <div class="keranjang-item">
                <div class="keranjang-item-info">
                    <h5>${item.nama}</h5>
                    <span>${item.satuan} | Rp ${item.harga.toLocaleString('id-ID')}</span>
                    <div class="keranjang-qty">
                        <button onclick="kurangiQty(${index})">-</button>
                        <span class="qty-angka">${item.qty}</span>
                        <button onclick="tambahQty(${index})">+</button>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div class="keranjang-item-harga">
                        Rp ${(item.harga * item.qty).toLocaleString('id-ID')}
                    </div>
                    <button class="btn-hapus-item" onclick="hapusItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const totalHarga = keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0);
    keranjangTotal.textContent = `Rp ${totalHarga.toLocaleString('id-ID')}`;
}

// ============ QUANTITY CONTROLS ============
function tambahQty(index) {
    keranjang[index].qty += 1;
    renderKeranjang();
}

function kurangiQty(index) {
    if (keranjang[index].qty > 1) {
        keranjang[index].qty -= 1;
    } else {
        keranjang.splice(index, 1);
    }
    renderKeranjang();
}

function hapusItem(index) {
    keranjang.splice(index, 1);
    renderKeranjang();
}

// ============ TOGGLE KERANJANG ============
function toggleKeranjang() {
    const keranjangFloat = document.getElementById('keranjangFloat');
    if (keranjangFloat) {
        keranjangFloat.classList.toggle('active');
    }
}

// ============ CHECKOUT WHATSAPP ============
function checkoutWhatsApp() {
    if (keranjang.length === 0) {
        alert('🛒 Keranjang masih kosong! Silakan tambahkan produk terlebih dahulu.');
        return;
    }
    
    // Nomor WhatsApp (tanpa +, tanpa spasi)
    const nomorWA = '628281122220723';
    
    // Bangun pesan
    let pesan = '🛒 *PESANAN DARI A-MART KOLMAS CIMAHI* 🛒\n\n';
    pesan += 'Halo, saya ingin memesan:\n\n';
    
    keranjang.forEach((item, index) => {
        pesan += `${index + 1}. ${item.nama} - ${item.qty} ${item.satuan}\n`;
        pesan += `   @Rp ${item.harga.toLocaleString('id-ID')} = Rp ${(item.harga * item.qty).toLocaleString('id-ID')}\n`;
    });
    
    const totalHarga = keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0);
    
    pesan += '\n----------------------------\n';
    pesan += `💰 *TOTAL: Rp ${totalHarga.toLocaleString('id-ID')}*\n`;
    pesan += '----------------------------\n\n';
    pesan += '📝 *Data Pembeli:*\n';
    pesan += 'Nama: (isi nama)\n';
    pesan += 'Alamat: (isi alamat lengkap)\n';
    pesan += 'Catatan: (opsional)\n\n';
    pesan += 'Mohon dikonfirmasi ketersediaan stok dan estimasi pengiriman. Terima kasih! 🙏';
    
    // Encode untuk URL WhatsApp
    const pesanEncoded = encodeURIComponent(pesan);
    const urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
    
    // Buka di tab baru
    window.open(urlWA, '_blank');
    
    // Kosongkan keranjang setelah checkout
    keranjang = [];
    renderKeranjang();
    
    // Tutup panel keranjang
    const keranjangFloat = document.getElementById('keranjangFloat');
    if (keranjangFloat) {
        keranjangFloat.classList.remove('active');
    }
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ============ TUTUP KERANJANG SAAT KLIK DI LUAR ============
function initKeranjangOutsideClick() {
    document.addEventListener('click', function(event) {
        const keranjangFloat = document.getElementById('keranjangFloat');
        const btnToggle = document.getElementById('btnToggleKeranjang');
        
        if (!keranjangFloat || !btnToggle) return;
        
        const isClickInside = keranjangFloat.contains(event.target);
        const isClickToggle = btnToggle.contains(event.target);
        
        if (!isClickInside && !isClickToggle && keranjangFloat.classList.contains('active')) {
            keranjangFloat.classList.remove('active');
        }
    });
}

// ============ INISIALISASI SEMUA ============
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    updateCopyrightYear();
    initSmoothScroll();
    initKeranjangOutsideClick();
    renderKeranjang();
    
    console.log('🛒 A-Mart Kolmas Cimahi - Siap menerima pesanan!');
});
