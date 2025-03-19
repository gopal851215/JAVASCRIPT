async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "605c5a0f6d794f2b87524638251403";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weatherInfo").innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="weather icon">
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "<p>City not found. Please try again.</p>";
    }
}
