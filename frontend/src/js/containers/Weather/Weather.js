import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AddNewCard from '../../components/Weather/AddNewCard';
import Error from '../../components/common/Error';
import WeatherList from '../../components/Weather/WeatherList';

@inject('Store')
@observer
export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCityInput: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.createNewCity = this.createNewCity.bind(this);
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
  }

  componentDidMount() {
    this.setCurrentPosition();
  }

  /**
   * Поиск текущей позиции и запрос погоды
   */
  setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.props.Store.getWeatherByLocation(position.coords));
    } else {
      this.props.Store.setError = 'Для работы приложения необходимо включить средства геолокации';
    }
  }

  /**
   * Хэндлер инпута
   * @param {*} e
   */
  handleInput(e) {
    this.setState({
      newCityInput: e.target.value,
    });
  }

  /**
   * Добавление нового города
   */
  createNewCity() {
    this.props.Store.getWeatherInCity(this.state.newCityInput);
    this.setState({
      newCityInput: '',
    });
  }

  render() {
    const store = this.props.Store;
    return (
      <div className="App weather">
        <AddNewCard input={this.state.newCityInput} inputHandler={this.handleInput} submit={this.createNewCity} />
        <Error text={store.error} />
        <WeatherList list={store.weatherCards} remove={store.removeCard}/>
      </div>
    );
  }
}
