const toggleBtn = document.getElementById("lightToggleBtn");
let lightImg = document.querySelector(".light-bulb");

toggleBtn.addEventListener('click', function () {
    if (lightImg.src.includes("white_lamp.png")) {
        toggleBtn.innerText = "Spegni";
        lightImg.src = "./img/yellow_lamp.png";
        console.log(lightImg);

    } else {
        toggleBtn.innerText = "Accendi";
        lightImg.src = "./img/white_lamp.png";
        console.log(lightImg);
    }
})