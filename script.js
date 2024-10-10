document.getElementById("toggle-slider").addEventListener("click", function() {
    const body = document.body;
    const sliderCircle = document.querySelector(".slider-circle");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        sliderCircle.textContent = "🌑";
        sliderCircle.style.transform = "translateX(20px)";
    } else {
        sliderCircle.textContent = "☀️";
        sliderCircle.style.transform = "translateX(0px)";
    }
});
