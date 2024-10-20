async function getWeather() {
    const city = document.getElementById('input__cidade').value;
    const apiKey = `226526562a869a8a5fe2a8a90985c054`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById('currentTemp').innerText = `${data.main.temp}°C`;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('weatherIcon').alt = data.weather[0].description;

        const description = data.weather[0].description;
        const localTime = new Date().toLocaleTimeString('pt-BR', { timeZone: data.timezone });

        document.getElementById('weatherDesc').innerText = `${description}, ${localTime}`;

    } catch (error) {
        console.error('Erro capturado:', error);
    }
}
