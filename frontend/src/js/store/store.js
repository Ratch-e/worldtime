import { action, observable } from 'mobx';
import axios from 'axios';

class Store {
  @observable weatherCards = [];
  @observable error = '';

  @action
  removeCard = id => {
    if (id !== 0) {
      this.weatherCards.splice(id, 1);
    }
    console.log(this.weatherCards);
  };

  @action
  setError = error => this.error = error;

  @action
  getWeatherInCity = city => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&id=524901&APPID=224fda37b0f22b3934a1a5a1a7348ff7&units=metric`,
      )
      .then(response => {
        this.error = '';
        this.weatherCards = [
          ...this.weatherCards,
          {
            temp: ~~response.data.main.temp,
            name: response.data.name,
            icon: response.data.weather[0].icon,
          },
        ];
      })
      .catch(error => (this.error = 'Введите корректный город'));
  };

  @action
  getWeatherByLocation = location => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${
          location.longitude
        }&id=524901&APPID=224fda37b0f22b3934a1a5a1a7348ff7&units=metric`,
      )
      .then(response => {
        this.error = '';
        this.weatherCards = [
          ...this.weatherCards,
          {
            temp: ~~response.data.main.temp,
            name: response.data.name,
            icon: response.data.weather[0].icon,
          },
        ];
      })
      .catch(error => (this.error = 'Не удалось получить текущее местоположение'));
  };
}

export default new Store();
