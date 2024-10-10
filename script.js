document.getElementById("toggle-slider").addEventListener("click", function() {
    const body = document.body;
    const sliderCircle = document.querySelector(".slider-circle");
    const image = document.getElementById("mode-image");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        sliderCircle.textContent = "🌑";
        sliderCircle.style.transform = "translateX(30px)";
        image.src = "Logo_Tryb_Ciemny.jpg";
    } else {
        sliderCircle.textContent = "☀️";
        sliderCircle.style.transform = "translateX(0px)";
        image.src = "Logo_Tryb_Jasny.jpg";
    }

    if (window.innerWidth <= 1080) {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
});

window.addEventListener('resize', function() {
    const image = document.getElementById("mode-image");
    if (window.innerWidth <= 1080) {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
});
