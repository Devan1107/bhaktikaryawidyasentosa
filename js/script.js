// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Ketika search form di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box
const itemDetailModals = document.querySelectorAll(".modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn, index) => {
  btn.onclick = (e) => {
    itemDetailModals[index].style.display = "flex";
    e.preventDefault();
  };
});

// Klik Tombol Close Modal
const closeIcons = document.querySelectorAll(".modal .close-icon");

closeIcons.forEach((closeIcon, index) => {
  closeIcon.onclick = (e) => {
    itemDetailModals[index].style.display = "none";
    e.preventDefault();
  };
});

// Klik Di Luar Modal
window.onclick = (e) => {
  itemDetailModals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

// JavaScript untuk menggeser gambar menggunakan tombol "Prev" dan "Next"
const aboutImg = document.querySelector(".about-img");
const img = aboutImg.querySelector("img");
const prevBtn = aboutImg.querySelector(".prev-btn");
const nextBtn = aboutImg.querySelector(".next-btn");

// Array berisi daftar URL gambar yang dapat digunakan
const imageUrls = [
  "img/tentang-kami.jpg",
  "img/tentang-kami-2.jpg",
  "img/tentang-kami-3.jpg",
  // Tambahkan URL gambar lainnya di sini
];

let currentIndex = 0;

// Fungsi untuk menampilkan gambar berdasarkan index
function showImage(index) {
  img.src = imageUrls[index];
}

// Fungsi untuk menggeser gambar ke gambar sebelumnya
function prevImage() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentIndex);
}

// Fungsi untuk menggeser gambar ke gambar berikutnya
function nextImage() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showImage(currentIndex);
}

// Tampilkan gambar pertama saat halaman dimuat
showImage(currentIndex);

// Tambahkan event listener untuk tombol "Prev" dan "Next"
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
