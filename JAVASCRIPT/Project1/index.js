function timing(){
const timer = document.getElementById("first");
const now = new Date();
const indian_time = now.toLocaleTimeString()
timer.innerHTML = indian_time;
}
setInterval(timing,1000);


const timer = document.getElementById("first");
timer.style.fontSize = "110px";
timer.style.height = "100vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
