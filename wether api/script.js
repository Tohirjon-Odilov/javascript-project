let weather = {
    apikey: "60fd57573f6c19f9c760dc63130e3ae8",
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    fetchWeather: function(cityName) {
        fetch(this.url + cityName + "&appid=" + this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { main } = data.weather[0].main;
        console.log(name, icon, description, humidity, temp, speed)
        console.log(data.weather[0].main)
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerHTML = Math.floor(temp - 273) + '°C';
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerHTML = "Wind speed: " + speed + "km/h"
        document.querySelector('.weather').classList.remove('loading')
        document.body.style.backgroundImage = 'url("./img/momaqaldiro.png")'; //"url('https://source.unsplash.com/1600x900/?" + name + "')";

        if (data.weather[0].main === "Clouds" || data.weather[0].main === "Clouds" && name == "Andijan" || data.weather[0].main === "Clouds" && name == "Namangan" || data.weather[0].main === "Clouds" && name == "Fergana") {
            document.body.style.backgroundImage = 'url("./img/cloud1.jpg")' //##############cloud
        } else if (data.weather[0].main === "Clear" || data.weather[0].main === "Clear" && name == "Andijan" || data.weather[0].main === "Clear" && name == "Namangan" || data.weather[0].main === "Clear" && name == "Fergana") {
            document.body.style.backgroundImage = 'url("./img/sunny.jpg")' // #############clear
        } else if (data.weather[0].main === "Rain" || data.weather[0].main === "Rain" && name == "Andijan" || data.weather[0].main === "Rain" && name == "Namangan" || data.weather[0].main === "Rain" && name == "Fergana") {
            document.body.style.backgroundImage = "url('./img/rainy.jpg')" // ##############Rain
        } else if (data.weather[0].main === "Snow" || data.weather[0].main === "Snow" && name == "Andijan" || data.weather[0].main === "Snow" && name == "Namangan" || data.weather[0].main === "Snow" && name == "Fergana") {
            document.body.style.backgroundImage = 'url("./img/snowy.jpg")' //###############snow
        } else if (data.weather[0].main === "Smoke", "Mist" || data.weather[0].main === "Smoke" && name == "Andijan" || data.weather[0].main === "Smoke" && name == "Namangan" || data.weather[0].main === "Smoke" && name == "Fergana") {
            document.body.style.backgroundImage = 'url("./img/smoke1.webp")' //##############smoke
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search_bar").value);
    }
};

document.querySelector('.search button').addEventListener("click", function() {
    weather.search()
        // console.log("Siz tugmani bosdingiz.")
    document.querySelector('.card').style.height = `${270}px`;
    document.querySelector("#h2").style.top = "-150px"
        // document.querySelector(".card").style.height = "100px"
        // document.querySelector(".loading").style.display = "block"
});
window.addEventListener("keypress", function(e) {
    if (e.keyCode == "13") {
        document.querySelector('.card').style.height = `${270}px`;
        document.querySelector("#h2").style.top = "-150px"
            // document.querySelector(".card").style.height = "100px"
            // document.querySelector('.weather').style.display = "block"
        weather.search()
    } else {
        document.querySelector(".loading").style.display = "block"
            // this.alert('Joy aniqlanmadi!')
        document.querySelector(".card").style.height = "100px"
            // document.querySelector('.weather').style.display = "none"

    }
});
// weather.fetchWeather("andijon")
// document.onload = function() {
//     document.querySelector("body").style.background = "red"
// }