// Fungsionalitas Navbar Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    // Animasi Link (hanya di mobile)
    navLinks.querySelectorAll('li').forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            // Beri animasi fade-in berurutan
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
}

// Keyframes untuk Animasi Mobile Link (perlu di CSS/atau bisa di JS, tapi lebih baik di CSS)
// Dalam contoh ini, diasumsikan keyframes navLinkFade ada di CSS (lihat kode CSS)

// Animasi Card (Scroll Reveal)
const produkItems = document.querySelectorAll('.animate-card');

const observerOptions = {
    root: null, // viewport
    threshold: 0.2, // 20% item terlihat
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan kelas 'visible' saat elemen masuk ke viewport
            entry.target.classList.add('visible');
            // Stop observing setelah animasi berjalan
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

produkItems.forEach(item => {
    observer.observe(item);
});


// Fungsionalitas Tombol Beli (Simulasi)
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        // Tampilkan notifikasi atau arahkan ke halaman checkout
        alert(`Anda ingin membeli ${product}. Fitur Chart/Checkout akan aktif di versi selanjutnya!`);
    });
});