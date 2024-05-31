const apiKey = "507445716c184c5438563e1f2c464b44";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await response.json();
          console.log(data);

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

          const Icon = data.weather[0].main;
          if (Icon == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (Icon == "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (Icon == "Rain") {
            weatherIcon.src = "images/rain.png";
          } else if (Icon == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (Icon == "Mist") {
            weatherIcon.src = "images/mist.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });