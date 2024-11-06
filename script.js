// Batas Awal toggle menu hamburger
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active"); // Menambahkan atau menghapus kelas
    ("active");
});
// Batas Akhir toggle menu hamburger

// Batas Awal Script Typing
document.addEventListener("DOMContentLoaded", () => {
    const toRotate = ["Front-End Developer", "Web Developer", "UI/UX Desainer"];
    let index = 0;
    let textIndex = 0;
    const rotateText = document.getElementById("rotateText");
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500;

    function typeEffect() {
        const currentText = toRotate[index];

        if (isDeleting) {
            rotateText.textContent = currentText.substring(0, textIndex--);
            if (textIndex < 0) {
                isDeleting = false;
                index = (index + 1) % toRotate.length;
                setTimeout(typeEffect, typingSpeed);
            } else {
                setTimeout(typeEffect, deletingSpeed);
            }
        } else {
            rotateText.textContent = currentText.substring(0, textIndex++);
            if (textIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenWords);
            } else {
                setTimeout(typeEffect, typingSpeed);
            }
        }
    }

    typeEffect();
});
// Batas Akhir Script Typing