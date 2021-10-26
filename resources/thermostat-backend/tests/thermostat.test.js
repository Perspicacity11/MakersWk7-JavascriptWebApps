const Thermostat = require('../thermostat');
const WeatherApi = require('../weatherApi');

jest.mock('../weatherApi.js');

describe('Thermostat', () => {
  it('has temperature', () => {
    expect(new Thermostat().getTemperature()).toBe(20);
  });

  it('changes temperature to set city', () => {
    let api = new WeatherApi();
    let thermostat = new Thermostat(api);
    let fakeWeatherData = { main: { temp: 18 } };

    api.fetchWeatherData.mockImplementation((city, callback) => {
      callback(fakeWeatherData);
    });

    thermostat.setCity('London');

    expect(thermostat.getTemperature()).toBe(18)
  });
});