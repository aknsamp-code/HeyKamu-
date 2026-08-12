const photos = [
    "img/Screenshot_19.png",
    "img/Screenshot_20.png",
    "img/Screenshot_21.png",
    "img/Screenshot_22.png"
];


const titles = [
    "WADUH... 😭",
    "ASTAGAA KAGET TAU 💀",
    "HALLO TEMAN TEMAN INI AKU 😭",
    "FINAL BOSS 💀💀💀"
];


const texts = [
    "Emang Dari Dulu Cocok Jadi Ustadah Tauu.",
    "Kaget Kirain apa lagi ngaca! EH ada Upahhh.",
    "eH Perkenalkan Dong Namanya Siapa?",
    "Nah. Ini Asli Kaya Jagoan Bangat Ihhh. 😂"
];


let currentPhoto = 0;


/* =========================
   SEMBUNYIKAN SEMUA HALAMAN
========================= */

function hideAll() {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

}


/* =========================
   MULAI PRANK
========================= */

function startPrank() {

    currentPhoto = 0;

    hideAll();

    document
        .getElementById("photoScreen")
        .classList.add("active");

    updatePhoto();

}


/* =========================
   UPDATE FOTO
========================= */

function updatePhoto() {

    const image =
        document.getElementById("prankPhoto");

    const title =
        document.getElementById("photoTitle");

    const text =
        document.getElementById("photoText");

    const counter =
        document.getElementById("counter");

    const nextButton =
        document.getElementById("nextButton");


    /* Animasi foto */

    image.style.animation = "none";

    void image.offsetWidth;

    image.style.animation =
        "photoIn .5s ease";


    /* Foto */

    image.src =
        photos[currentPhoto];


    /* Judul */

    title.textContent =
        titles[currentPhoto];


    /* Keterangan */

    text.textContent =
        texts[currentPhoto];


    /* Counter */

    counter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;


    /* Tombol */

    if (currentPhoto === photos.length - 1) {

        nextButton.textContent =
            "OKE, LANJUT 😭";

    } else {

        nextButton.textContent =
            "Lihat lagi →";

    }

}


/* =========================
   FOTO BERIKUTNYA
========================= */

function nextPhoto() {

    if (currentPhoto < photos.length - 1) {

        currentPhoto++;

        updatePhoto();

    } else {

        hideAll();

        document
            .getElementById("finalScreen")
            .classList.add("active");

    }

}


/* =========================
   FOTO SEBELUMNYA
========================= */

function previousPhoto() {

    if (currentPhoto > 0) {

        currentPhoto--;

        updatePhoto();

    }

}


/* =========================
   KEMBALI KE AWAL
========================= */

function backToStart() {

    hideAll();

    document
        .getElementById("opening")
        .classList.add("active");

}


/* =========================
   KE UCAPAN ULANG TAHUN
========================= */

function showBirthday() {

    hideAll();

    document
        .getElementById("birthdayScreen")
        .classList.add("active");

}


/* =========================
   PRANK TERAKHIR
========================= */

function showKepo() {

    hideAll();

    document
        .getElementById("kepoScreen")
        .classList.add("active");

}