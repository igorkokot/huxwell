document.getElementById("toggle-button").addEventListener("click", function() {
    const body = document.body;
    const image = document.getElementById("mode-image");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Zmień źródło obrazka w zależności od trybu
    if (body.classList.contains("dark-mode")) {
        image.src = "Logo_Tryb_Ciemny.jpg"; // Zamień na ścieżkę do obrazka w trybie ciemnym
    } else {
        image.src = "Logo_Tryb_Jasny.jpg"; // Zamień na ścieżkę do obrazka w trybie jasnym
    }

    // Sprawdź, czy kontener jest w pionie
    const container = document.querySelector('.container');
    if (window.innerWidth <= 1080) {
        image.style.display = 'none'; // Ukryj grafikę, gdy segmenty są w pionie
    } else {
        image.style.display = 'block'; // Pokaż grafikę w poziomie
    }
});

// Sprawdź szerokość okna przy załadowaniu i zmień widoczność grafiki
window.addEventListener('resize', function() {
    const image = document.getElementById("mode-image");
    if (window.innerWidth <= 1080) {
        image.style.display = 'none'; // Ukryj grafikę, gdy segmenty są w pionie
    } else {
        image.style.display = 'block'; // Pokaż grafikę w poziomie
    }
});
