// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   if (btn.innerText == "ON") {
//     document.documentElement.style.cssText = "--light-color: #f8d11d";
//     btn.innerText = "OFF";
//   } else {
//     document.documentElement.style.cssText = "--light-color: #94b0ff";
//     btn.innerText = "ON";
//   }
// });


let lightIsOn = false;

function toggleLight() {
    const bulb = document.getElementById('lightbulb');
    const button = document.getElementById('toggleButton');
    if (lightIsOn) {
        bulb.src = './Untitled design (22).png';
        button.textContent = 'OFF';
        lightIsOn = false;
    } else {
        bulb.src = './Untitled design (21).png'
        button.textContent = 'ON';
        lightIsOn = true;
    }
}
