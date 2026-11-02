// Fitur 1: Mengganti tema terang dan gelap
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Tema";
    } else {
        themeButton.textContent = "🌙 Tema";
    }
});

// Fitur 2: Menampilkan pesan ketika tombol diklik
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.textContent =
        "Terima kasih sudah mengunjungi website profil saya! 😊";
});