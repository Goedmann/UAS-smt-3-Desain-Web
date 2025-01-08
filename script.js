// Fungsi untuk menampilkan salam berdasarkan waktu
document.addEventListener('DOMContentLoaded', function() {
    var greetingMessage = document.getElementById('greetingMessage');
    var currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingMessage.innerText = 'Selamat Pagi!';
    } else if (currentHour < 18) {
        greetingMessage.innerText = 'Selamat Sore!';
    } else {
        greetingMessage.innerText = 'Selamat Malam!';
    }
});
