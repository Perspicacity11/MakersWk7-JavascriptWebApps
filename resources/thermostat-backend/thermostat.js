class Thermostat {
  constructor(weatherApi) {
    this.DEFAULT_TEMPERATURE = 20;

    this.temperature = this.DEFAULT_TEMPERATURE;
    this.weatherApi = weatherApi;
  }

  up() {
    this.temperature++;
  }

  down() {
    this.temperature--;
  }

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
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