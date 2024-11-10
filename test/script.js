const butt = document.getElementById("butt")
let isCelcius = true;
let currentc= 0
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apikey = "749883e78432a591d82c6e06f32c39be";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    const data = await response.json();
    console.log(data)
    document.getElementById("cityname").textContent = data.name
    document.getElementById("condition").textContent = `condition: ${data.weather[0].description}`
    document.getElementById("temperature").textContent = `${data.main.temp}°C`
    currentc = data.main.temp
    
}






