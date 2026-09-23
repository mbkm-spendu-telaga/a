/* =========================
   FIREBASE BUKU TAMU
========================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
    updateDoc,
    doc,
    increment
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyAzWcN5v8bdDMW2ZusUiEwKmKu8V0YKEU",

    authDomain: "mbkmv2.firebaseapp.com",

    projectId: "mbkmv2",

    storageBucket: "mbkmv2.firebasestorage.app",

    messagingSenderId: "744956152637",

    appId: "1:744956152637:web:33701cd90d4a1f80819354"

};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




/* =========================================
   DATA ANGGOTA KKN
========================================= */

const anggota = [
    {
        nama: "Moh. Hafidz Arizki",
        jabatan: "Koordinator Sekolah",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota1.jpg",
        bio: "Bertanggung jawab dalam Mengkordinasi kelompok MBKM."
    },

    {
        nama: "Moh. Arzikim D. Kase",
        jabatan: "Wakil Korsek",
        jurusan: "PPKn",
        foto: "images/anggota2.jpg",
        bio: "Bertanggung jawab membantu mengoordinasikan seluruh anggota dan kegiatan kelompok MBKM."
    },

    {
        nama: "Olivia Bantuha",
        jabatan: "Sekretaris",
        jurusan: "PPKn",
        foto: "images/anggota3.jpg",
        bio: "Mengelola administrasi, surat-menyurat, dan berbagai kebutuhan administrasi kelompok."
    },

    {
        nama: "Fania Aulya Midu",
        jabatan: "Bendahara",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota4.jpg",
        bio: "Mengatur keuangan dan kebutuhan dana selama kegiatan KKN berlangsung."
    },

    {
        nama: "Wajriyanto J pakaya",
        jabatan: "Koor Perlengkapan",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota5.jpg",
        bio: "Mengkoordinir Anggota."
    },

    {
        nama: "Jusriawan j Lakuntu",
        jabatan: "Perlengkapan",
        jurusan: "Pendidikan Kepelatihan Olahraga",
        foto: "images/anggota6.jpg",
        bio: "Kalau butuh apa apa hubungi kami aja."
    },

    {
        nama: "Sitti Fatimah Tuzzahra",
        jabatan: "Anggota",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota7.jpg",
        bio: "Aktif membantu pelaksanaan kegiatan pendidikan dan pemberdayaan masyarakat."
    },

    
  {
        nama: "Anisa Rumpabulu",
        jabatan: "Perlengkapan",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota8.jpg",
        bio: "Kalau Butuh apa apa hubungi kami aja"
  },
  
  {
        nama: "Rindi Husain",
        jabatan: "Perlengkapan",
        jurusan: "PPKn",
        foto: "images/anggota9.jpg",
        bio: "Berperan dalam kegiatan sosial, lingkungan, dan program kerja kelompok."
},
  
  
  {
        nama: "Tegar Wicaksana Sutisna",
        jabatan: "Koor PDD",
        jurusan: "Pendidikan Kepatihan Olahraga",
        foto: "images/anggota10.jpg",
        bio: " Mengkoordinasikan seluruh bidang PDD, memastikan konsep, publikasi, dekorasi, dan dokumentasi berjalan terarah serta sesuai dengan kebutuhan setiap kegiatan."
  },
  
  
  {
        nama: "Sutrin R. moha",
        jabatan: "Anggota",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota11.jpg",
        bio: "Di balik setiap kegiatan yang terlihat, ada kami yang bekerja di balik layar."
  },

  
  {
        nama: "Firanti R. Unusa",
        jabatan: "Anggota",
        jurusan: "Bahasa Dan Sastra Indonesia",
        foto: "images/anggota12.jpg",
        bio: "Di balik setiap kegiatan yang terlihat, ada kami yang bekerja di balik layar."
  },
  
  {
        nama: "Egi Yunus",
        jabatan: "Humas",
        jurusan: "Pendidikan IPA",
        foto: "images/anggota13.jpg",
        bio: "Humas Humas Humas."
  },
  
  {
        nama: "Brilian Aditya",
        jabatan: "Humas",
        jurusan: "Pendidikan IPA",
        foto: "images/anggota14.jpg",
        bio: "Pokoknya Humas."
  }
];



/* =========================================
   ELEMENT HTML
========================================= */

const container = document.getElementById("memberContainer");
const modal = document.getElementById("profileModal");
const modalPhoto = document.getElementById("modalPhoto");
const modalRole = document.getElementById("modalRole");
const modalName = document.getElementById("modalName");
const modalStudy = document.getElementById("modalStudy");
const modalBio = document.getElementById("modalBio");
const navMenu = document.getElementById("navMenu");

console.log("MBKM WEBSITE JS AKTIF");

/* =========================================
   MEMBUAT KARTU ANGGOTA
========================================= */

anggota.forEach(function (orang) {

    const card = document.createElement("div");

    card.className = "member-card";

    card.innerHTML = `
        <img
            src="${orang.foto}"
            alt="${orang.nama}"
        >

        <div class="member-info">

            <div class="member-role">
                ${orang.jabatan}
            </div>

            <h3>
                ${orang.nama}
            </h3>

            <p>
                ${orang.jurusan}
            </p>

        </div>
    `;

    card.addEventListener("click", function () {
        openProfile(orang);
    });

    container.appendChild(card);
});


/* =========================================
   BUKA PROFIL
========================================= */

function openProfile(orang) {

    modalPhoto.src = orang.foto;

    modalPhoto.alt = orang.nama;

    modalRole.textContent = orang.jabatan;

    modalName.textContent = orang.nama;

    modalStudy.textContent = orang.jurusan;

    modalBio.textContent = orang.bio;

    modal.classList.add("active");
}


/* =========================================
   TUTUP PROFIL
========================================= */

function closeProfile() {

    modal.classList.remove("active");
}


/* =========================================
   MENU MOBILE
========================================= */

function toggleMenu() {

    navMenu.classList.toggle("active");

    const menuButton = document.querySelector(".menu-btn");

    if (menuButton) {
        menuButton.classList.toggle("active");
    }
}


/*
   Beri tahu browser bahwa fungsi
   toggleMenu tersedia untuk HTML.
*/

window.toggleMenu = toggleMenu;

window.closeProfile = closeProfile;


/* =========================================
   TUTUP MENU SETELAH KLIK LINK
========================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   TUTUP MODAL KETIKA KLIK DI LUAR
========================================= */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeProfile();

    }

});



/* =========================================
   TUTUP MODAL DENGAN TOMBOL ESC
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProfile();

    }

});

/* =========================================
   MUSIK BACKGROUND
========================================= */

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");


function toggleMusic() {

    if (!bgMusic || !musicButton) {
        return;
    }


    if (bgMusic.paused) {

        bgMusic.play()
            .then(function() {

                musicButton.textContent = "🔊";

                musicButton.classList.add("playing");

            })
            .catch(function(error) {

                console.log(
                    "Musik belum dapat dimainkan:",
                    error
                );

            });

    } else {

        bgMusic.pause();

        musicButton.textContent = "🎵";

        musicButton.classList.remove("playing");

    }

}


/* Agar onclick di HTML dapat memanggilnya */
window.toggleMusic = toggleMusic;

/* =========================
   ANIMASI SCROLL
========================= */

const revealElements = document.querySelectorAll(
    "section, .card, .member-card, .program-card, .gallery-item"
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const rect = element.getBoundingClientRect();

        const triggerPoint = window.innerHeight * 0.85;

        if (rect.top < triggerPoint && rect.bottom > 0) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("resize", revealOnScroll);

revealOnScroll();


/* =========================
   FOTO KLIK → ZOOM
========================= */

const photoViewer = document.createElement("div");

photoViewer.className = "photo-viewer";

photoViewer.innerHTML = `
    <span class="close-photo">&times;</span>
    <img src="" alt="Foto">
`;

document.body.appendChild(photoViewer);

const viewerImage = photoViewer.querySelector("img");
const closePhoto = photoViewer.querySelector(".close-photo");

document.querySelectorAll("img").forEach(function(img) {

    img.classList.add("photo-zoom");

    img.addEventListener("click", function() {

        viewerImage.src = img.src;

        photoViewer.classList.add("show");

    });

});


closePhoto.addEventListener("click", function() {
    photoViewer.classList.remove("show");
});


photoViewer.addEventListener("click", function(e) {

    if (e.target === photoViewer) {
        photoViewer.classList.remove("show");
    }

});


document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        photoViewer.classList.remove("show");
    }

});

/* =========================
   PROGRAM KERJA POPUP
========================= */

function openProgram(title, description) {

    const modal = document.getElementById("programModal");
    const titleElement = document.getElementById("programTitle");
    const descriptionElement = document.getElementById("programDescription");

    if (!modal) return;

    titleElement.textContent = title;
    descriptionElement.textContent = description;

    modal.classList.add("show");
}


function closeProgram() {

    const modal = document.getElementById("programModal");

    if (!modal) return;

    modal.classList.remove("show");
}


/* Tutup ketika klik area luar popup */

const programModal = document.getElementById("programModal");

if (programModal) {

    programModal.addEventListener("click", function(e) {

        if (e.target === programModal) {
            closeProgram();
        }

    });

}


/* Tutup dengan tombol ESC */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        closeProgram();
    }

});

/* =========================
   BUKU TAMU FIREBASE
========================= */

const guestbookRef =
    collection(db, "guestbook");


/* KIRIM PESAN */

async function addGuestbook() {

    const nama =
        document.getElementById("guestName");

    const pesan =
        document.getElementById("guestMessage");

    if (!nama.value || !pesan.value) {

        alert("Isi nama dan pesan terlebih dahulu");

        return;
    }

    try {

        await addDoc(
            guestbookRef,
            {
                nama: nama.value,
                pesan: pesan.value,
                timestamp: serverTimestamp()
            }
        );

        nama.value = "";
        pesan.value = "";

    } catch (error) {

        console.log(error);

        alert("Gagal mengirim pesan");

    }

}


/* TAMPILKAN PESAN */

const guestContainer =
    document.getElementById("guestbookContainer");

const q = query(
    guestbookRef,
    orderBy("timestamp", "desc")
);

onSnapshot(q, function(snapshot) {

    guestContainer.innerHTML = "";

    if (snapshot.empty) {

        guestContainer.innerHTML =
            `
            <div class="guestbook-empty">
                Belum ada pesan.
            </div>
            `;

        return;
    }

    snapshot.forEach(function(docItem) {

        const data = docItem.data();

        const div =
            document.createElement("div");

        div.className =
            "guestbook-message";

        let tanggal = "";

        if (data.timestamp) {

            tanggal =
                data.timestamp
                    .toDate()
                    .toLocaleString(
                        "id-ID"
                    );
        }

        const initial =
    data.nama
        ? data.nama.trim().charAt(0).toUpperCase()
        : "?";

div.innerHTML =
    `
    <div class="guest-avatar">
        ${initial}
    </div>

    <div class="guest-content">

        <strong>
            ${data.nama}
        </strong>

        <p>
            ${data.pesan}
        </p>

        <div class="guest-bottom">

            <span class="guestbook-date">
                ${tanggal}
            </span>

            <button
    class="guest-like"
    data-id="${docItem.id}"
    onclick="likeGuestbook('${docItem.id}')"
>
    ❤️ <span>${data.likes || 0}</span>
</button>

        </div>

    </div>
    `;

        guestContainer.appendChild(div);

    });

});


window.addGuestbook =
    addGuestbook;

/* =========================
   LIKE BUKU TAMU
   1 PERANGKAT = 1 LIKE
========================= */

async function likeGuestbook(id) {

    const likedKey =
        "liked_guestbook_" + id;


    /* CEK SUDAH LIKE */

    if (localStorage.getItem(likedKey)) {

        showPremiumAlert(
            "Sudah Disukai ❤️",
            "Kamu sudah menyukai pesan ini. Tidak bisa like dua kali ya 😊",
            "✓"
        );

        return;
    }


    try {

        const messageRef =
            doc(db, "guestbook", id);


        /* TAMBAH LIKE DI FIREBASE */

        await updateDoc(
            messageRef,
            {
                likes: increment(1)
            }
        );


        /* SIMPAN STATUS DI PERANGKAT */

        localStorage.setItem(
            likedKey,
            "true"
        );


        /* POPUP BERHASIL */

        showPremiumAlert(
            "Berhasil! ❤️",
            "Terima kasih sudah menyukai pesan ini.",
            "✓"
        );


    } catch (error) {

        console.error(
            "Gagal memberikan like:",
            error
        );


        showPremiumAlert(
            "Gagal!",
            "Like tidak dapat diproses. Silakan coba lagi.",
            "×"
        );

    }
}


window.likeGuestbook =
    likeGuestbook;


window.likeGuestbook = likeGuestbook;

/* =================================
   PREMIUM ALERT SYSTEM
================================= */

function showPremiumAlert(
    title,
    message,
    icon = "✓"
) {

    const alertBox =
        document.getElementById("premiumAlert");

    const alertIcon =
        document.getElementById("premiumAlertIcon");

    const alertTitle =
        document.getElementById("premiumAlertTitle");

    const alertMessage =
        document.getElementById("premiumAlertMessage");


    alertIcon.textContent = icon;

    alertTitle.textContent = title;

    alertMessage.textContent = message;


    alertBox.classList.add("show");
}


function closePremiumAlert() {

    const alertBox =
        document.getElementById("premiumAlert");

    alertBox.classList.remove("show");
}


window.showPremiumAlert =
    showPremiumAlert;

window.closePremiumAlert =
    closePremiumAlert;
