/**
 * A-Mart Kolmas Cimahi - Halaman Alamat
 * Fitur: Navigasi ke Google Maps, Apple Maps, Waze
 */

// Koordinat toko
const TOKO_LAT = -6.858900348037254;
const TOKO_LNG = 107.54514469662439;
const TOKO_NAMA = 'A-Mart Kolmas Cimahi';
const TOKO_ALAMAT = 'Jl. Kolonel Masturi No.212, Cipageran, Cimahi Utara, Kota Cimahi, Jawa Barat 40551';

// Fungsi: Buka di Google Maps
function bukaGoogleMaps() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${TOKO_LAT},${TOKO_LNG}`;
    window.open(url, '_blank');
}

// Fungsi: Buka di Apple Maps
function bukaAppleMaps() {
    const url = `https://maps.apple.com/?daddr=${TOKO_LAT},${TOKO_LNG}&q=${encodeURIComponent(TOKO_NAMA)}`;
    window.open(url, '_blank');
}

// Fungsi: Buka di Waze
function bukaWaze() {
    const url = `https://waze.com/ul?ll=${TOKO_LAT},${TOKO_LNG}&navigate=yes&q=${encodeURIComponent(TOKO_ALAMAT)}`;
    window.open(url, '_blank');
}

// Fungsi: Copy alamat ke clipboard
function copyAlamat() {
    const alamatLengkap = `${TOKO_ALAMAT}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(alamatLengkap).then(() => {
            alert('✅ Alamat berhasil disalin ke clipboard!');
        }).catch(() => {
            // Fallback
            fallbackCopy(alamatLengkap);
        });
    } else {
        // Fallback untuk browser lama
        fallbackCopy(alamatLengkap);
    }
}

// Fallback copy untuk browser yang tidak support clipboard API
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('✅ Alamat berhasil disalin ke clipboard!');
    } catch (err) {
        alert('❌ Gagal menyalin alamat. Silakan copy manual.');
    }
    document.body.removeChild(textarea);
}

// Event listeners setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('📍 Halaman Alamat A-Mart Kolmas Cimahi siap!');
});
