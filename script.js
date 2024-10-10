document.getElementById("toggle-slider").addEventListener("click", function() {
    const body = document.body;
    const sliderCircle = document.querySelector(".slider-circle");
    const image = document.getElementById("mode-image");

    // Zmiana trybu
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Aktualizacja emoji i pozycji kółka
    if (body.classList.contains("dark-mode")) {
        sliderCircle.textContent = "🌑"; // Emoji dla trybu ciemnego
        sliderCircle.style.transform = "translateX(30px)"; // Przesunięcie kółka na prawą stronę
        image.src = "Logo_Tryb_Ciemny.jpg"; // Zmiana obrazka na tryb ciemny
    } else {
        sliderCircle.textContent = "☀️"; // Emoji dla trybu jasnego
        sliderCircle.style.transform = "translateX(0px)"; // Przesunięcie kółka na lewą stronę
        image.src = "Logo_Tryb_Jasny.jpg"; // Zmiana obrazka na tryb jasny
    }

    // Ukrywanie grafiki w trybie pionowym
    const container = document.querySelector('.container');
    if (window.innerWidth <= 1080) {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
});

// Sprawdzanie rozmiaru okna i aktualizacja widoczności grafiki
window.addEventListener('resize', function() {
    const image = document.getElementById("mode-image");
    if (window.innerWidth <= 1080) {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
});
