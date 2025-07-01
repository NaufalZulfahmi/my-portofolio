function tampilkan(id) {
  const semuaKonten = document.querySelectorAll('.konten');

  semuaKonten.forEach(konten => {
    konten.classList.remove('tampil');
    konten.style.display = 'none';
  });

  const kontenBaru = document.getElementById(id);
  if (kontenBaru) {
    kontenBaru.style.display = 'block';

    // Tambah animasi ulang ke bagian pengalaman
    if (id === 'pengalaman') {
      kontenBaru.classList.remove('fadeUp');
      void kontenBaru.offsetWidth; // Trigger reflow
      kontenBaru.classList.add('fadeUp');
    }

    // Tambah efek fade tampil umum
    setTimeout(() => {
      kontenBaru.classList.add('tampil');
    }, 10);
  }
}


