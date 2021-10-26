const got = require('got');

const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'; // paste your API key here

class WeatherApi {
  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    got(apiUrl).then((response) => {
      let weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  }
}

module.exports = WeatherApi;