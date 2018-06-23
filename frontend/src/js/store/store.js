import { action, observable } from 'mobx';
import axios from 'axios';

class Store {
  @observable weatherCards = [];
  @observable error = '';
  @observable isLoading = false;

  @action
  removeCard = id => {
    console.log(id);
    if(id !== 0) {
      this.weatherCards.splice(id, 1);
    }
  }

  @action
  getWeatherInCity = city => {
    this.isLoading = true;
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
          },
        ];
      })
      .catch(error => this.error = "Введите корректный город");
    this.isLoading = false;
  };

  @action
  getWeatherByLocation = location => {
    this.isLoading = true;
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
          },
        ];
      })
      .catch(error => this.error = 'Не удалось получить такущее местоположение');
    this.isLoading = false;
  };
}

export default new Store();
