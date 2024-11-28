let city = document.querySelector(".input")
let btn = document.querySelector(".button")

btn.addEventListener("click", function () {
    let cityValue = city.value
    let API_KEY = "bbe5d1c6e61daafbdbb6c21cf4e22f84"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`, {
        method: "GET"
    })
    .then(response => {
        if (!response.ok) {
            console.error("ERROR")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        
        let weatherIcon = document.querySelector(".weather-icon")
        let iconCode = data.weather[0].icon
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        weatherIcon.alt = data.weather[0].description;

        let titleTemperature = document.querySelector(".temperature")
        titleTemperature.innerHTML = `${Math.round(data.main.temp)}<sup>°C</sup>`;

        let titleName = document.querySelector(".country-name")
        titleName.textContent = ` ${data.name}`


        let nameCountry = document.querySelector(".name_Country")
        nameCountry.style.display = "block"
    })
    .catch(error => {
        console.log(error)
    })
})
