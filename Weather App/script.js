const apiKey = "e87207e8f336ea34c5a28e54a6860e80";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const weatherCard = document.getElementById("weatherCard");
      weatherCard.style.display = "block";
      weatherCard.innerHTML = `
        <p>📍 <strong>${data.name}, ${data.sys.country}</strong></p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Condition: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch((error) => {
      const weatherCard = document.getElementById("weatherCard");
      weatherCard.style.display = "block";
      weatherCard.innerHTML = `<p style="color: red;">⚠️ ${error.message}</p>`;
    });
}