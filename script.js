function simulateSensor() {
    const gasLevel = Math.floor(Math.random() * 100); // 0 - 99
    const temp = (Math.random() * 20 + 20).toFixed(1); // 20 - 40
    const humidity = (Math.random() * 50 + 30).toFixed(1); // 30 - 80
  
    const gasStatusEl = document.getElementById('gas-status');
    if (gasLevel > 60) {
      gasStatusEl.textContent = "Dangerous";
      gasStatusEl.classList.remove("safe");
      gasStatusEl.classList.add("danger");
    } else {
      gasStatusEl.textContent = "Safe";
      gasStatusEl.classList.remove("danger");
      gasStatusEl.classList.add("safe");
    }
  
    document.getElementById("temperature").textContent = `${temp} °C`;
    document.getElementById("humidity").textContent = `${humidity} %`;
  }
  