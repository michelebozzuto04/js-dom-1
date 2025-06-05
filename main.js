const toggleBtn = document.getElementById("lightToggleBtn");
const lightImg = document.querySelector(".light-bulb");

toggleBtn.addEventListener('click', function () {
    lightImg.src = "./img/yellow_lamp.png";
})
