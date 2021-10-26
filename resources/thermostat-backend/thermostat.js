class Thermostat {
  constructor(weatherApi) {
    this.temperature = 20;
    this.weatherApi = weatherApi;
  }

  up() {
    this.temperature++;
  }

  down() {
    this.temperature--;
  }

  getTemperature() {
    return this.temperature;
  }

  setCity(city) {
    this.weatherApi.fetchWeatherData(city, (weatherData) => {
      this.temperature = weatherData.main.temp;
    });
  }
}

module.exports = Thermostat;