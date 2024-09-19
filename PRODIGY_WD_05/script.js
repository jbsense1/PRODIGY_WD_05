  const weatherData = {
    "London": {
      "location": {
        "name": "London",
        "country": "United Kingdom"
      },
      "current": {
        "temp_c": 11,
        "condition": {
          "text": "Partly cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
        },
        "humidity": 82,
        "wind_kph": 6.1
      }
    },
    "New York": {
      "location": {
        "name": "New York",
        "country": "USA"
      },
      "current": {
        "temp_c": 16,
        "condition": {
          "text": "Sunny",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
        },
        "humidity": 70,
        "wind_kph": 12.1
      }
    },
    "Tokyo": {
      "location": {
        "name": "Tokyo",
        "country": "Japan"
      },
      "current": {
        "temp_c": 24,
        "condition": {
          "text": "Clear sky",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
        },
        "humidity": 65,
        "wind_kph": 8.5
      }
    },
    "Addis Ababa": {
      "location": {
        "name": "Addis Ababa",
        "country": "Ethiopia"
      },
      "current": {
        "temp_c": 18,
        "condition": {
          "text": "Mostly sunny",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png"
        },
        "humidity": 77,
        "wind_kph": 5.4
      }
    },
    "Paris": {
      "location": {
        "name": "Paris",
        "country": "France"
      },
      "current": {
        "temp_c": 15,
        "condition": {
          "text": "Cloudy",
          "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png"
        },
        "humidity": 80,
        "wind_kph": 10.3
      }
    }
  };
  function displayWeather(city) {
    const cityWeather = weatherData[city];
  
    if (cityWeather) {
      document.getElementById('city-name').textContent = `${cityWeather.location.name}, ${cityWeather.location.country}`;
      document.getElementById('temperature').textContent = `Temperature: ${cityWeather.current.temp_c} °C`;
      document.getElementById('conditions').textContent = `Weather: ${cityWeather.current.condition.text}`;
      document.getElementById('humidity').textContent = `Humidity: ${cityWeather.current.humidity} %`;
      document.getElementById('wind-speed').textContent = `Wind Speed: ${cityWeather.current.wind_kph} km/h`;
    } else {
      alert('Weather data not available for the selected city.');
    }
  }
  document.getElementById('get-weather-btn').addEventListener('click', () => {
    const selectedCity = document.getElementById('city-select').value;
    displayWeather(selectedCity);
  });